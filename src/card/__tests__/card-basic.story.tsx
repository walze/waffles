import { css } from '@emotion/react';

import { Card } from '../index';
import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';
import { Heading } from '../../heading';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Card
        css={css`
          padding: ${tokens.spacing.medium};
          width: 600px;
        `}
      >
        <Heading size="large">Basic Card</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>
      </Card>
    </div>
  );
}

export default Story;