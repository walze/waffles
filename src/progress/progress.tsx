import { useId } from '../hooks';

import {
  labelStyle,
  progressStyle,
  wrapperStyle,
  progressWrapperStyle,
} from './styles';
import ProgressSteps from './steps';

type ProgressProps = {
  /* Optional identifier. Useful for when using your own `<label>`, for example. */
  id?: string;
  /* The size of the progress. */
  size?: 'small' | 'medium';
  /* The current value of the progress. This is in relation to the `max` property. */
  value?: number;
  /* The maximum value of the progress. Must be greater than `value`. The default is 100. */
  max?: number;
  /* Whether the progress should be split into individual steps. If so, `max` and value` are treat as the total and current steps respectively. */
  showSteps?: boolean;
  /* Whether the progress is inverted in color or not. */
  inverted?: boolean;
  /* [skip docs] */
  'aria-label'?: string;
} & React.HTMLAttributes<HTMLProgressElement>;

function Progress({
  id,
  size = 'medium',
  showSteps = false,
  inverted = false,
  value = 0,
  max = 100,
  'aria-label': ariaLabel,
  ...restProps
}: ProgressProps) {
  const generatedId = useId('progress');
  const progressId = id || generatedId;

  return (
    <div data-testid="progress-wrapper" css={wrapperStyle()}>
      <div css={progressWrapperStyle()}>
        {showSteps && <ProgressSteps id={progressId} max={max} size={size} />}
        <progress
          id={progressId}
          css={progressStyle({ size, inverted, clipId: `${progressId}-clip` })}
          max={max}
          value={value}
          aria-label={ariaLabel}
          {...restProps}
        />
      </div>
      {!ariaLabel && (
        <label css={labelStyle({ size, inverted })} htmlFor={progressId}>
          {showSteps ? `${value}/${max}` : `${(value / max) * 100}%`}
        </label>
      )}
    </div>
  );
}

export default Progress;
