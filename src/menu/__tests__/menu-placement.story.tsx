import React, { useState } from 'react';
import { css } from '@emotion/react';

import { Menu } from '../index';
import { tokens } from '../../tokens';
import { Radio } from '../../radio';
import { Code, Edit, Copy } from '../../icon';
import { Button } from '../../button';

type Placement = React.ComponentProps<typeof Menu>['placement'];

type PlacementRadioProps = {
  placement: Placement;
};

function Story() {
  const [currentPlacement, setCurrentPlacement] =
    useState<Placement>('bottomRight');

  function PlacementRadio({ placement }: PlacementRadioProps) {
    return (
      <Radio
        name="menuPlacement"
        value={placement}
        checked={placement === currentPlacement}
        onChange={() => setCurrentPlacement(placement)}
      >
        {placement}
      </Radio>
    );
  }

  return (
    <div
      css={css`
        padding: ${tokens.spacing.medium};
      `}
    >
      <div
        css={css`
          display: flex;
          gap: ${tokens.spacing.medium};
        `}
      >
        <PlacementRadio placement="bottomRight" />
        <PlacementRadio placement="bottom" />
        <PlacementRadio placement="bottomLeft" />
        <PlacementRadio placement="topRight" />
        <PlacementRadio placement="top" />
        <PlacementRadio placement="topLeft" />
        <PlacementRadio placement="right" />
        <PlacementRadio placement="left" />
      </div>
      <div
        css={css`
          margin-top: 200px;
          margin-left: 300px;
        `}
      >
        <Menu
          trigger={<Button variant="secondary">Open Menu</Button>}
          placement={currentPlacement}
        >
          <Menu.Item label="Edit" iconLeft={<Code />} />
          <Menu.Item label="Rename" iconLeft={<Edit />} />
          <Menu.Item label="Duplicate" iconLeft={<Copy />} />
        </Menu>
      </div>
    </div>
  );
}

export default Story;
