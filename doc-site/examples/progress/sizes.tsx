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
      <Progress size="small" value={60} max={100} aria-label="Small progress" />
      <Progress
        size="medium"
        value={60}
        max={100}
        aria-label="Medium progress"
      />
    </div>
  );
}

export default Example;
