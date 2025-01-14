import { css } from '@emotion/react';

import { tokens } from '../tokens';

import Input from './input';

type InputSize = NonNullable<React.ComponentProps<typeof Input>['size']>;

// Mapping between input's sizes and design tokens

const sizeMap = {
  small: {
    sizing: tokens.sizing.small,
    fontSize: tokens.fontSizes.small,
    spacing: '12px',
    spacingWithEnhancer: tokens.spacing.xlarge,
  },
  medium: {
    sizing: tokens.sizing.medium,
    fontSize: tokens.fontSizes.medium,
    spacing: '12px',
    spacingWithEnhancer: '36px',
  },
  large: {
    sizing: tokens.sizing.large,
    fontSize: tokens.fontSizes.medium,
    spacing: tokens.spacing.medium,
    spacingWithEnhancer: '40px',
  },
} as const;

// Main input styles

type InputWrapperStyleOptions = {
  size: InputSize;
  disabled: boolean;
  isFocused: boolean;
};

export function inputWrapperStyle({
  size,
  disabled,
  isFocused,
}: InputWrapperStyleOptions) {
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

const inputBaseStyle = css`
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
  cursor: text;

  &:disabled {
    cursor: default;
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0 ${tokens.sizing.medium} white inset;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
`;

type InputStyleOptions = {
  hasError: boolean;
  size: InputSize;
  inverted: boolean;
  hasIconLeft: boolean;
  hasEnhancerRight: boolean;
};

export function inputStyle({
  hasError,
  size,
  inverted,
  hasIconLeft,
  hasEnhancerRight,
}: InputStyleOptions) {
  return css`
    ${inputBaseStyle}
    font-size: ${sizeMap[size].fontSize};
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
    background-color: ${inverted
      ? tokens.colors.navyLight
      : tokens.colors.white};
    padding-left: ${hasIconLeft
      ? sizeMap[size].spacingWithEnhancer
      : sizeMap[size].spacing};
    padding-right: ${hasEnhancerRight
      ? sizeMap[size].spacingWithEnhancer
      : sizeMap[size].spacing};

    &::placeholder {
      opacity: 1;
      color: ${inverted
        ? tokens.colors.navySubtleTextOnDark
        : tokens.colors.navySubtleTextOnLight};
    }

    ${hasError &&
    css`
      border-color: ${tokens.colors.redDark};
      box-shadow: 0 0 0 1px ${tokens.colors.redDark};
    `};
  `;
}

// Left icon and right enhancer styles

const enhancerBaseStyle = css`
  position: absolute;
  z-index: ${tokens.zIndex.default};
  display: flex;
  height: 100%;
  align-items: center;
  pointer-events: none;
`;

type IconLeftStyleOptions = {
  size: InputSize;
  inverted: boolean;
};

export function iconLeftStyle({ size, inverted }: IconLeftStyleOptions) {
  return css`
    ${enhancerBaseStyle};
    top: 0;
    left: ${sizeMap[size].spacing};
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
  `;
}

type EnhancerRightStyleOptions = {
  size: InputSize;
  inverted: boolean;
};

export function enhancerRightStyle({
  size,
  inverted,
}: EnhancerRightStyleOptions) {
  return css`
    ${enhancerBaseStyle};
    top: 0;
    right: ${sizeMap[size].spacing};
    color: ${inverted ? tokens.colors.white : tokens.colors.navy};
  `;
}

type EnhancerStyleOptions = {
  isFocusVisible: boolean;
};

export function enhancerStyle({ isFocusVisible }: EnhancerStyleOptions) {
  return css`
    display: flex;
    align-items: center;
    pointer-events: auto;
    cursor: pointer;
    padding: 0;
    border: 0;
    border-radius: ${tokens.borderRadius.medium};
    padding: 2px;
    margin-right: -2px;
    background-color: transparent;
    color: inherit;
    outline: 0;

    &:disabled {
      cursor: inherit;
    }

    ${isFocusVisible &&
    css`
      box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
    `}
  `;
}
