import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Checkmark, Cross } from '@datacamp/waffles/icon';
import { Heading } from '@datacamp/waffles/heading';
import { Card } from '@datacamp/waffles/card';

const sectionStyle = css`
  padding: ${tokens.spacing.medium};
`;

const headingStyle = css`
  display: flex;
  align-items: center;
`;

const iconStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: ${tokens.spacing.small};
  border-radius: ${tokens.borderRadius.circle};
`;

type BestPracticesCardProps = {
  variant: 'recommended' | 'discouraged';
  children: React.ReactNode;
};

function BestPracticesCard({ children, variant }: BestPracticesCardProps) {
  const isRecommended = variant === 'recommended';

  return (
    <Card disableHover css={sectionStyle}>
      <Heading size="large" css={headingStyle}>
        <span
          css={css`
            ${iconStyle}
            background-color: ${isRecommended
              ? tokens.colors.green
              : tokens.colors.red};
          `}
        >
          {isRecommended ? <Checkmark /> : <Cross />}
        </span>
        {isRecommended ? 'Do' : "Don't"}
      </Heading>
      {children}
    </Card>
  );
}

export default BestPracticesCard;
