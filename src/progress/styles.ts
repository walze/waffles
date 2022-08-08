import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { hexToRgba } from '../helpers';

import Progress from './progress';

export const sizeMap = {
  small: {
    sizing: '4px',
    fontSize: tokens.fontSizes.xsmall,
    spacing: tokens.spacing.small,
  },
  medium: {
    sizing: '8px',
    fontSize: tokens.fontSizes.small,
    spacing: tokens.spacing.medium,
  },
};

export function wrapperStyle() {
  return css`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: ${tokens.spacing.small};
  `;
}

export function progressWrapperStyle() {
  return css`
    width: 100%;
    position: relative;
    display: inline-flex;
  `;
}

export function stepClipWrapperStyle() {
  return css`
    position: absolute;
    width: 100%;
    height: 1px;
  `;
}

type StepClipStyleOptions = {
  size: NonNullable<React.ComponentProps<typeof Progress>['size']>;
  index: number;
  max: number;
};

export function stepClipStyle({ size, index, max }: StepClipStyleOptions) {
  // startPosX is for determining start location
  const startPosX = `${(100 / max) * index}%`;
  const width = `${100 / max}%`;

  //  Emotion does not like the 'x' attribute, but it is supported in all modern browsers
  return css`
    x: calc(${startPosX === '0%' ? 0 : `${startPosX} + 4px`});
    width: calc(${startPosX === '0%' ? width : `${width} - 4px`});
    height: ${sizeMap[size].sizing};
  `;
}

const progressIndicatorStyle = css`
  background-color: ${tokens.colors.green};
  border-radius: ${tokens.borderRadius.medium};
  transition: width 1s ease-in-out;
`;

type ProgressStyleOptions = {
  size: NonNullable<React.ComponentProps<typeof Progress>['size']>;
  inverted: boolean;
  clipId: string;
};

export function progressStyle({
  size,
  inverted,
  clipId,
}: ProgressStyleOptions) {
  return css`
    background-color: ${inverted
      ? hexToRgba(tokens.colors.white, 0.2)
      : hexToRgba(tokens.colors.navy, 0.15)};
    border: none;
    border-radius: ${tokens.borderRadius.medium};
    clip-path: url(#${clipId});
    appearance: none;
    height: ${sizeMap[size].sizing};
    width: 100%;

    /* Container for the progress indicator */
    &::-webkit-progress-bar {
      background-color: inherit;
      border-radius: ${tokens.borderRadius.medium};
    }

    /* Progress value indicator */
    &::-moz-progress-bar {
      ${progressIndicatorStyle}
    }

    /* Cannot use comma separated list due to common issue with these psuedo selectors */
    &::-webkit-progress-value {
      ${progressIndicatorStyle}
    }
  `;
}

type LabelStyleOptions = {
  size: NonNullable<React.ComponentProps<typeof Progress>['size']>;
  inverted: boolean;
};

export function labelStyle({ size, inverted }: LabelStyleOptions) {
  return css`
    color: ${inverted
      ? tokens.colors.navySubtleTextOnDark
      : tokens.colors.navySubtleTextOnLight};
    font-family: ${tokens.fontFamilies.sansSerif};
    font-size: ${sizeMap[size].fontSize};
    line-height: ${tokens.lineHeights.tight};
  `;
}
