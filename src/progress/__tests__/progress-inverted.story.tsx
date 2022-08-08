import { css } from '@emotion/react';

import { Progress } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  background-color: ${tokens.colors.navy};
  padding: ${tokens.spacing.medium};
  width: 200px;
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Progress inverted value="40" max="100" />
    </div>
  );
}

export default Story;
