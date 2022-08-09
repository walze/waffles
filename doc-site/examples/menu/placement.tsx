import React, { useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Radio } from '@datacamp/waffles/radio';
import { Menu } from '@datacamp/waffles/menu';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { Button } from '@datacamp/waffles/button';

type Placement = React.ComponentProps<typeof Menu>['placement'];

type PlacementRadioProps = {
  placement: Placement;
};

function Example() {
  const [currentPlacement, setCurrentPlacement] =
    useState<Placement>('bottomLeft');

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
    <>
      <Menu
        trigger={<Button variant="secondary">Edit</Button>}
        placement={currentPlacement}
      >
        <Menu.Category noDivider>
          <Menu.Item label="Cut" />
          <Menu.Item label="Copy" />
          <Menu.Item label="Rename" />
        </Menu.Category>
      </Menu>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: ${tokens.spacing.medium};
          margin-top: ${tokens.spacing.large};

          ${mediaQuery.aboveSmall} {
            grid-template-columns: repeat(3, 1fr);
          }
        `}
      >
        <PlacementRadio placement="bottomLeft" />
        <PlacementRadio placement="bottomRight" />
        <PlacementRadio placement="bottom" />
        <PlacementRadio placement="topLeft" />
        <PlacementRadio placement="topRight" />
        <PlacementRadio placement="top" />
        <PlacementRadio placement="right" />
        <PlacementRadio placement="left" />
      </div>
    </>
  );
}

export default Example;
