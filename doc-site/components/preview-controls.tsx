import React from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { hexToRgba } from '@datacamp/waffles/helpers';

const wrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${tokens.spacing.small};
  margin-bottom: ${tokens.spacing.xlarge};
  background-color: ${tokens.colors.white};
  border: ${tokens.borderWidth.thin} solid
    ${hexToRgba(tokens.colors.navy, 0.15)};
  border-top: 0;
  border-bottom-left-radius: ${tokens.borderRadius.medium};
  border-bottom-right-radius: ${tokens.borderRadius.medium};
`;

type CodePreviewControlsProps = {
  children: React.ReactNode;
};

function PreviewControls({ children }: CodePreviewControlsProps) {
  return <div css={wrapperStyle}>{children}</div>;
}

export default PreviewControls;
