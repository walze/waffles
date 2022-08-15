import { useState } from 'react';
import { Switch } from '@datacamp/waffles/switch';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import React, { useState } from 'react';

import { Switch } from '@datacamp/waffles/switch';

function Playground() {
  const [checked, setChecked] = useState(false);

  function toggle() {
    setChecked(!checked);
  }

  // Using style, because emotion css prop doesn't work in Playground

  return (
    <div style={{ width: '300px' }}>
      <Switch
        checked={checked}
        onChange={toggle}
      >Switch description</Switch>
    </div>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    useState,
    Switch,
  },
};

export default playgroundConfig;
