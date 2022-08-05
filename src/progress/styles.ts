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
    display: inline-flex;
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

type StepClipStyleOptions = {
  size: NonNullable<React.ComponentProps<typeof Progress>['size']>;
  index: number;
  max: number;
};

export function stepClipWrapperStyle() {
  return css`
    position: absolute;
    width: 100%;
    max-width: 100%;
  `;
}

export function stepClipStyle({ size, index, max }: StepClipStyleOptions) {
  const startPosX = `${(100 / (max as number)) * index}%`;
  const width = `${100 / (max as number)}%`;

  return css`
    //  Done - Emotion does not like these attributes, but they are supported standards

    // startPosX is for determining start location across bar
    x: calc(${startPosX === '0%' ? 0 : `${startPosX} + 4px`});
    width: calc(${startPosX === '0%' ? width : `${width} - 4px`});
    height: ${sizeMap[size].sizing};
  `;
}

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
    clip-path: url(#${clipId});
    appearance: none;
    height: ${sizeMap[size].sizing};
    width: 100%;

    /* Container for the progress bar indicator */
    &::-webkit-progress-bar {
      background-color: inherit;
      border-radius: ${tokens.borderRadius.medium};
    }

    /* Progress bar value indicator */
    &::-moz-progress-bar {
      background-color: ${tokens.colors.green};
      border-radius: ${tokens.borderRadius.medium};
    }

    &::-webkit-progress-value {
      background-color: ${tokens.colors.green};
      border-radius: ${tokens.borderRadius.medium};
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
