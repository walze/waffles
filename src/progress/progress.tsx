import React from 'react';

import { useId } from '../hooks';

import {
  stepClipStyle,
  labelStyle,
  progressStyle,
  wrapperStyle,
  progressWrapperStyle,
  stepClipWrapperStyle,
  sizeMap,
} from './styles';

type ProgressProps = {
  /* The size of the progress bar. */
  size?: 'small' | 'medium';
  /* Whether the progress bar should be split into individual steps. If so, `max` and value` are treat as the total and current steps respectively. */
  showSteps?: boolean;
  /* Whether the progress bar is inverted in color or not. */
  inverted?: boolean;
} & React.ProgressHTMLAttributes<HTMLElement>;

function Progress({
  size = 'medium',
  showSteps = false,
  inverted = false,
  ...restProps
}: ProgressProps) {
  const generatedId = useId('progress-bar');
  const { max, value } = restProps;

  function getStepClipRect(index: number) {
    return (
      <rect
        key={index}
        css={stepClipStyle({
          size,
          index,
          max: max as number,
        })}
        rx={parseInt(sizeMap[size].sizing) / 2}
      />
    );
  }

  return (
    <div css={wrapperStyle()}>
      <div css={progressWrapperStyle()}>
        {showSteps && (
          <svg css={stepClipWrapperStyle()}>
            <defs>
              <clipPath id={`${generatedId}-clip`}>
                {Array.from({ length: max as number }, (_, index) => {
                  return getStepClipRect(index);
                })}
              </clipPath>
            </defs>
          </svg>
        )}
        <progress
          id={generatedId}
          css={progressStyle({ size, inverted, clipId: `${generatedId}-clip` })}
          {...restProps}
        />
      </div>
      <label css={labelStyle({ size, inverted })} htmlFor={generatedId}>
        {showSteps
          ? `${value}/${max}`
          : `${((value as number) / (max as number)) * 100}%`}
      </label>
    </div>
  );
}

export default Progress;
