import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Heading } from '@datacamp/waffles/heading';
import { Card } from '@datacamp/waffles/card';
import { Avatar } from '@datacamp/waffles/avatar';
import {
  PythonLogomark,
  SqlLogomark,
  RLogomark,
} from '@datacamp/waffles/asset';

function Example() {
  return (
    <Card
      headstone={
        <>
          <Avatar content={<PythonLogomark />} />
          <Avatar content={<SqlLogomark />} />
          <Avatar content={<RLogomark />} />
        </>
      }
    >
      <div
        css={css`
          padding: ${tokens.spacing.medium};
        `}
      >
        <Heading size="large">Introduction to DataCamp Projects</Heading>
        <Paragraph
          css={css`
            margin-bottom: 0;
          `}
        >
          Use Python, SQL or R to build a project that has a specific solution,
          with guided tasks and real-time automated code checks.
        </Paragraph>
      </div>
    </Card>
  );
}

export default Example;
