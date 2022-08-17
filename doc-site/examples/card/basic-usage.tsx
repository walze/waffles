import { css } from '@emotion/react';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Heading } from '@datacamp/waffles/heading';
import { Card } from '@datacamp/waffles/card';

function Example() {
  return (
    <Card>
      <Heading size="large">Intermediate Python</Heading>
      <Paragraph
        css={css`
          margin-bottom: 0;
        `}
      >
        Level up your data science skills by creating visualizations using
        Matplotlib and manipulating DataFrames with pandas.
      </Paragraph>
    </Card>
  );
}

export default Example;
