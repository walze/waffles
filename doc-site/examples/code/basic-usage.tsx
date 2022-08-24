import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Code } from '@datacamp/waffles/code';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.small};
      `}
    >
      <Paragraph size="large">
        You can install Waffles components library by running{' '}
        <Code>npm install @datacamp/waffles</Code> with npm or{' '}
        <Code>yarn add @datacamp/waffles</Code> with yarn.
      </Paragraph>
      <Paragraph>
        You can install Waffles components library by running{' '}
        <Code>npm install @datacamp/waffles</Code> with npm or{' '}
        <Code>yarn add @datacamp/waffles</Code> with yarn.
      </Paragraph>
      <Paragraph size="small">
        You can install Waffles components library by running{' '}
        <Code>npm install @datacamp/waffles</Code> with npm or{' '}
        <Code>yarn add @datacamp/waffles</Code> with yarn.
      </Paragraph>
    </div>
  );
}

export default Example;
