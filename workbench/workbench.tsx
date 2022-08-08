import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Progress } from '@datacamp/waffles/progress';

function Workbench() {
  return (
    <>
      <div
        css={css`
          padding: 32px;
          background-color: white;
          gap: ${tokens.spacing.small};
          display: flex;
          flex-direction: column;
        `}
      >
        <Progress max={100} value={35} />
        <Progress max={100} value={67} />
        <Progress size="small" max={100} value={35} />
        <Progress size="small" max={100} value={67} />

        <Progress max={4} value={1} showSteps />
        <Progress max={5} value={2} showSteps />
        <Progress size="small" max={4} value={1} showSteps />
        <Progress size="small" max={5} value={2} showSteps />
      </div>
      <div
        css={css`
          padding: 32px;
          background-color: ${tokens.colors.navyDark};
          display: flex;
          flex-direction: column;
          gap: ${tokens.spacing.small};
        `}
      >
        <Progress inverted max={100} value={35} />
        <Progress inverted max={100} value={67} />
        <Progress inverted size="small" max={100} value={35} />
        <Progress inverted size="small" max={100} value={67} />

        <Progress inverted max={4} value={1} showSteps />
        <Progress inverted max={5} value={2.5} showSteps />
        <Progress inverted size="small" max={4} value={1} showSteps />
        <Progress inverted size="small" max={5} value={2} showSteps />
      </div>
    </>
  );
}

export default Workbench;
