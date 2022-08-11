import { cloneElement } from 'react';

import { useId } from '../hooks';

import { progressStyle, wrapperStyle, progressWrapperStyle } from './styles';
import Steps from './steps';
import Label from './label';

type ProgressProps = {
  /* Optional identifier. Useful for when using your own `<label>`. */
  id?: string;
  /* The size of the progress. */
  size?: 'small' | 'medium';
  /* The current value of the progress, which can also be a decimal. This is in relation to the `max` property. */
  value?: number;
  /* The maximum value of the progress. Must be greater than `value`. The default is 100. */
  max?: number;
  /* The mode in which the progress will display - `continuous` is the default behaviour, as one single bar and `steps` renders as multiple segments. For `steps`, `max` and `value` are treated as the total and current steps respectively. */
  mode?: 'continuous' | 'steps';
  /* Custom label to be shown instead of the original. Use `<label>` element as the parent. */
  customLabel?: JSX.Element;
  /* Whether the progress is inverted in color or not. */
  inverted?: boolean;
  /* [skip docs] */
  hideLabel?: never;
  /* Should always be provided for progress context. E.g. "Course Progress" */
  'aria-label': string;
} & React.HTMLAttributes<HTMLProgressElement>;

type ProgressNoLabelProps = {
  /* Whether to hide the default label or not. Not necessary if `customLabel` is provided. */
  hideLabel: boolean;
  customLabel: never;
} & ProgressProps;

function Progress({
  id,
  size = 'medium',
  mode = 'continuous',
  inverted = false,
  value = 0,
  max = 100,
  customLabel,
  hideLabel,
  'aria-label': ariaLabel,
  ...restProps
}: ProgressNoLabelProps | ProgressProps) {
  const generatedId = useId('progress');
  const progressId = id || generatedId;
  const isStepsMode = mode === 'steps';

  return (
    <div data-testid="progress-wrapper" css={wrapperStyle({ size, inverted })}>
      <div css={progressWrapperStyle()}>
        {isStepsMode && <Steps id={progressId} max={max} size={size} />}
        <progress
          id={progressId}
          css={progressStyle({ size, inverted, clipId: `${progressId}-clip` })}
          max={max}
          value={value}
          aria-label={ariaLabel}
          aria-valuemin={0}
          aria-valuenow={value}
          aria-valuemax={max}
          {...restProps}
        />
      </div>
      {customLabel &&
        cloneElement(customLabel, {
          htmlFor: progressId,
        })}
      {!customLabel && !hideLabel && (
        <Label {...{ id: progressId, isStepsMode, max, value }} />
      )}
    </div>
  );
}

export default Progress;
