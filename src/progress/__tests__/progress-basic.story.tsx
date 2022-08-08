import { css } from '@emotion/react';

import { Progress } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
  width: 200px;
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Progress value="40" max="100" />
    </div>
  );
}

export default Story;
