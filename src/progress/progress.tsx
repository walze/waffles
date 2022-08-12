import { useId } from '../hooks';

import { progressStyle, wrapperStyle, progressWrapperStyle } from './styles';
import Steps from './steps';
import Label from './label';

type ProgressProps = {
  /* The size of the progress. */
  size?: 'small' | 'medium';
  /* The current value of the progress, which can also be a decimal. This is in relation to the `max` property. */
  value?: number;
  /* The maximum value of the progress. Must be greater than `value`. The default is 100. */
  max?: number;
  /* The mode in which the progress will display. In default `continuous` mode one single bar will be shown. In `steps` mode multiple segments will be rendered and `max` and `value` are treated as the total and current steps respectively. */
  mode?: 'continuous' | 'steps';
  /* Custom label content to be shown instead of the original. Use `<label>` element as the parent. */
  customLabel?: JSX.Element;
  /* Whether the progress is inverted in color or not. */
  inverted?: boolean;
  /* [skip docs] */
  hideLabel?: boolean;
  /* Should always be provided with context of the progress. E.g. "Course Progress". */
  'aria-label': string;
} & React.HTMLAttributes<HTMLProgressElement>;

type ProgressNoLabelProps = {
  /* Whether to hide the default label or not. Not necessary if `customLabel` is provided. */
  hideLabel: boolean;
  customLabel: never;
  'aria-label': string;
} & ProgressProps;

type ProgressCustomLabelProps = {
  customLabel?: JSX.Element;
  'aria-label'?: string;
} & ProgressProps;

function Progress({
  size = 'medium',
  mode = 'continuous',
  inverted = false,
  value = 0,
  max = 100,
  customLabel,
  hideLabel,
  'aria-label': ariaLabel,
  ...restProps
}: ProgressProps | ProgressCustomLabelProps | ProgressNoLabelProps) {
  const generatedId = useId('progress');
  const isStepsMode = mode === 'steps';

  return (
    <div data-testid="progress-wrapper" css={wrapperStyle({ size, inverted })}>
      <div css={progressWrapperStyle()}>
        {isStepsMode && <Steps id={generatedId} max={max} size={size} />}
        <progress
          id={generatedId}
          css={progressStyle({ size, inverted, clipId: `${generatedId}-clip` })}
          max={max}
          value={value}
          aria-label={ariaLabel}
          aria-valuemin={0}
          aria-valuenow={value}
          aria-valuemax={max}
          {...restProps}
        />
      </div>
      {!hideLabel && (
        <Label {...{ id: generatedId, isStepsMode, max, value, customLabel }} />
      )}
    </div>
  );
}

export default Progress;
