import { css } from '@emotion/react';

import { Progress } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  background-color: ${tokens.colors.navy};
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Progress inverted value={40} max={100} aria-label="Inverted progress" />
    </div>
  );
}

export default Story;
