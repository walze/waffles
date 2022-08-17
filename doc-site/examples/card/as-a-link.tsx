import { css } from '@emotion/react';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Heading } from '@datacamp/waffles/heading';
import { Code } from '@datacamp/waffles/code';
import { Card } from '@datacamp/waffles/card';

function Example() {
  return (
    <Card as="a" href="https://www.datacamp.com">
      <Heading size="large">Card as a Link</Heading>
      <Paragraph
        css={css`
          margin-bottom: 0;
        `}
      >
        Focus will be handled properly in rare cases when <Code>Card</Code> is
        used as <Code>a</Code> or any other active element.
      </Paragraph>
    </Card>
  );
}

export default Example;
