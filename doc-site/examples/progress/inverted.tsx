import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Progress } from '@datacamp/waffles/progress';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.small};
      `}
    >
      <Progress value={40} max={100} inverted aria-label="Inverted progress" />
      <Progress
        value={3}
        max={5}
        inverted
        mode="steps"
        aria-label="Inverted progress in steps mode"
      />
    </div>
  );
}

export default Example;
