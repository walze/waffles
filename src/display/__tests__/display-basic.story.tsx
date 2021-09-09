import { css } from '@emotion/react';

import { tokens } from '../../tokens';
import { Display } from '../index';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Display>Big and short non-semantic message</Display>
    </div>
  );
}

export default Story;