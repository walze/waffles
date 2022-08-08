import { css } from '@emotion/react';

import { Progress } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  background-color: ${tokens.colors.beigeLight};
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Progress value={3} max={5} showSteps />
    </div>
  );
}

export default Story;
