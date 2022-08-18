import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import useIsomorphicLayoutEffect from './use-isomorphic-layout-effect';

let serverHandoffComplete = false;

function generateId() {
  return nanoid(6);
}

function useGeneratedId() {
  // If this instance isn't part of the initial render it doesn't have to double render
  // Just generate the ID and return it
  const initialId = serverHandoffComplete ? generateId() : null;
  const [id, setId] = useState(initialId);

  useIsomorphicLayoutEffect(() => {
    // Patch the ID after render
    // To avoid possible flickering useLayoutEffect is used
    if (id == null) {
      setId(generateId());
    }
  }, []);

  useEffect(() => {
    // Flag all future uses of useId to skip unnecessary re-renders
    if (!serverHandoffComplete) {
      serverHandoffComplete = true;
    }
  }, []);

  return id;
}

// toString prevents bundlers from importing it
// @ts-expect-error: might not exist
const useReactId = React['useId'.toString()] as () => string;

/**
 * Autogenerate random ID to facilitate accessibility features.
 *
 * When available use React 18 built-in `useId`, otherwise fall back to a bit less performant implementation.
 *
 * @returns Random ID
 */
const useId = useReactId ?? useGeneratedId;

export default useId;
