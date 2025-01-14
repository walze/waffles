import { css } from '@emotion/react';

import { tokens } from '../tokens';

import Select from './select';

type SelectSize = NonNullable<React.ComponentProps<typeof Select>['size']>;

// Mapping between select's sizes and design tokens

const sizeMap = {
  small: {
    sizing: tokens.sizing.small,
    fontSize: tokens.fontSizes.small,
    spacing: '12px',
    spacingWithIcon: tokens.spacing.xlarge,
  },
  medium: {
    sizing: tokens.sizing.medium,
    fontSize: tokens.fontSizes.medium,
    spacing: '12px',
    spacingWithIcon: '36px',
  },
  large: {
    sizing: tokens.sizing.large,
    fontSize: tokens.fontSizes.medium,
    spacing: tokens.spacing.medium,
    spacingWithIcon: '40px',
  },
} as const;

type SelectWrapperStyleOptions = {
  size: SelectSize;
  disabled: boolean;
  isFocused: boolean;
};

export function selectWrapperStyle({
  size,
  disabled,
  isFocused,
}: SelectWrapperStyleOptions) {
  return css`
    position: relative;
    width: 100%;
    height: ${sizeMap[size].sizing};
    opacity: ${disabled ? tokens.opacity.high : 1};

    &::after {
      content: '';
      display: block;
      position: absolute;
      z-index: ${tokens.zIndex.default};
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: -2px;
      border-radius: 6px;
      pointer-events: none;
      transition: box-shadow 125ms ease-out;
    }

    ${isFocused &&
    css`
      &::after {
        box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
      }
    `}
  `;
}

const selectBaseStyle = css`
  display: flex;
  width: 100%;
  height: 100%;
  font-family: ${tokens.fontFamilies.sansSerif};
  font-weight: ${tokens.fontWeights.regular};
  line-height: ${tokens.lineHeights.relaxed};
  border: ${tokens.borderWidth.thin} solid ${tokens.colors.greyDark};
  border-radius: ${tokens.borderRadius.medium};
  outline: 0;
  appearance: none;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`;

type SelectStyleOptions = {
  hasError: boolean;
  withPlaceholder: boolean;
  size: SelectSize;
  inverted: boolean;
};

export function selectStyle({
  hasError,
  withPlaceholder,
  size,
  inverted,
}: SelectStyleOptions) {
  return css`
    ${selectBaseStyle}
    font-size: ${sizeMap[size].fontSize};
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    background-color: ${inverted
      ? tokens.colors.navyLight
      : tokens.colors.white};
    padding-left: ${sizeMap[size].spacing};
    padding-right: ${sizeMap[size].spacingWithIcon};

    ${withPlaceholder &&
    css`
      color: ${inverted
        ? tokens.colors.navySubtleTextOnDark
        : tokens.colors.navySubtleTextOnLight};
    `};

    ${hasError &&
    css`
      border-color: ${tokens.colors.redDark};
      box-shadow: 0 0 0 1px ${tokens.colors.redDark};
    `};
  `;
}

const iconRightBaseStyle = css`
  position: absolute;
  z-index: ${tokens.zIndex.default};
  display: flex;
  height: 100%;
  align-items: center;
  pointer-events: none;
`;

type IconRightStyleOptions = {
  size: SelectSize;
  inverted: boolean;
};

export function iconRightStyle({ size, inverted }: IconRightStyleOptions) {
  return css`
    ${iconRightBaseStyle};
    top: 0;
    right: ${sizeMap[size].spacing};
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
  `;
}
