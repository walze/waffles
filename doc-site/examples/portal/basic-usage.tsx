import { useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Portal } from '@datacamp/waffles/portal';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { hexToRgba } from '@datacamp/waffles/helpers';
import { Heading } from '@datacamp/waffles/heading';
import { Button } from '@datacamp/waffles/button';

const contentStyle = css`
  position: fixed;
  top: 70px;
  right: ${tokens.spacing.medium};
  background-color: ${tokens.colors.white};
  padding: ${tokens.spacing.medium};
  border: ${tokens.borderWidth.thin} solid
    ${hexToRgba(tokens.colors.navy, 0.15)};
  border-radius: ${tokens.borderRadius.medium};
  z-index: ${tokens.zIndex.popup};
  box-shadow: ${tokens.boxShadow.xthick};
`;

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Portal</Button>
      <Portal>
        {isOpen && (
          <div css={contentStyle}>
            <Heading>The Portal</Heading>
            <Paragraph>Completely new dimension.</Paragraph>
            <Button onClick={() => setIsOpen(false)}>Close Portal</Button>
          </div>
        )}
      </Portal>
    </>
  );
}

export default Example;
