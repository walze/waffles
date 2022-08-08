import { css } from '@emotion/react';

import { Progress } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.medium};
  background-color: ${tokens.colors.beigeLight};
  padding: ${tokens.spacing.medium};
`;

const sizes = ['small', 'medium'] as const;

function Story() {
  return (
    <>
      <div css={wrapperStyle}>
        {sizes.map((size) => {
          return <Progress key={size} value={40} max={100} size={size} />;
        })}
      </div>
      <div css={wrapperStyle}>
        {sizes.map((size) => {
          return (
            <Progress key={size} value={3} max={5} size={size} showSteps />
          );
        })}
      </div>
    </>
  );
}

export default Story;
