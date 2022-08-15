import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { Card } from '@datacamp/waffles/card';

const cardStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  ${mediaQuery.aboveSmall} {
    min-height: 180px;
    flex-direction: row;
  }
`;

const imageWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${tokens.colors.purpleLight};
  padding: ${tokens.spacing.xsmall};

  ${mediaQuery.aboveSmall} {
    max-width: 236px;
  }
`;

const imageStyle = css`
  max-height: 140px;

  ${mediaQuery.aboveSmall} {
    height: 100%;
  }
`;

const contentStyle = css`
  padding: ${tokens.spacing.medium};
`;

type LandingPageCardProps = {
  imageUrl: string;
  children: React.ReactNode;
};

function LandingPageCard({ imageUrl, children }: LandingPageCardProps) {
  return (
    <Card disableHover css={cardStyle}>
      <div css={imageWrapperStyle}>
        <img src={imageUrl} css={imageStyle} />
      </div>
      <div css={contentStyle}>{children}</div>
    </Card>
  );
}

export default LandingPageCard;
