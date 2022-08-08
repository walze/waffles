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
      <Progress value={40} max={100} inverted />
      <Progress value={3} max={5} inverted showSteps />
    </div>
  );
}

export default Example;
