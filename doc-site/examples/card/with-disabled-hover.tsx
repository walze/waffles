import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Heading } from '@datacamp/waffles/heading';
import { Card } from '@datacamp/waffles/card';

function Example() {
  return (
    <Card
      disableHover
      css={css`
        padding: ${tokens.spacing.medium};
      `}
    >
      <Heading size="large">Card with Hover Disabled</Heading>
      <Paragraph
        css={css`
          margin-bottom: 0;
        `}
      >
        It is possible to disable mouse over drop shadow visual indicator for
        the very basic cards.
      </Paragraph>
    </Card>
  );
}

export default Example;
