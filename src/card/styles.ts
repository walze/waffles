import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

type CardStyleOptions = {
  isFocusVisible: boolean;
  disableHover: boolean;
};

export function cardStyle({ isFocusVisible, disableHover }: CardStyleOptions) {
  return css`
    padding: ${tokens.spacing.medium};
    background-color: ${tokens.colors.white};
    border: ${tokens.borderWidth.thin} solid
      ${hexToRgba(tokens.colors.navy, 0.15)};
    border-radius: ${tokens.borderRadius.medium};
    transition: box-shadow 600ms cubic-bezier(0.1, 0.8, 0.2, 1),
      transform 600ms cubic-bezier(0.1, 0.8, 0.2, 1);
    outline: 0;

    ${isFocusVisible && `box-shadow: 0 0 0 2px ${tokens.colors.blueDark};`}

    ${!disableHover &&
    css`
      &:hover {
        box-shadow: ${tokens.boxShadow.thick};
        ${isFocusVisible &&
        `box-shadow: 0 0 0 2px ${tokens.colors.blueDark}, ${tokens.boxShadow.thick};`}
        transform: translateY(-1px);
      }
    `}
  `;
}
