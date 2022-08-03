import { useMemo } from 'react';
import { nanoid } from 'nanoid';

/**
 * Autogenerate random ID to facilitate accessibility features.
 *
 * For a components which are part of server-side initial render it may be required to provide IDs manually to avoid client-server values mismatch.
 *
 * @param prefix Optional custom prefix for an ID
 * @returns Random ID with a prefix
 */
function useId(prefix?: string) {
  const id = useMemo(() => nanoid(6), []);

  return prefix == null ? id : `${prefix}-${id}`;
}

export default useId;
