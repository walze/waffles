import { useId } from '../hooks';

import {
  labelStyle,
  progressStyle,
  wrapperStyle,
  progressWrapperStyle,
} from './styles';
import ProgressSteps from './steps';

type ProgressProps = {
  /* The size of the progress. */
  size?: 'small' | 'medium';
  /* The current value of the progress. This is in relation to the `max` property. */
  value: number;
  /* The maximum value of the progress. Must be greater than `value`. The default is 100. */
  max?: number;
  /* Whether the progress should be split into individual steps. If so, `max` and value` are treat as the total and current steps respectively. */
  showSteps?: boolean;
  /* Whether the progress is inverted in color or not. */
  inverted?: boolean;
} & React.HTMLAttributes<HTMLProgressElement>;

function Progress({
  size = 'medium',
  showSteps = false,
  inverted = false,
  value,
  max = 100,
  ...restProps
}: ProgressProps) {
  const generatedId = useId('progress');

  return (
    <div data-testid="progress-wrapper" css={wrapperStyle()}>
      <div css={progressWrapperStyle()}>
        {showSteps && <ProgressSteps id={generatedId} max={max} size={size} />}
        <progress
          id={generatedId}
          css={progressStyle({ size, inverted, clipId: `${generatedId}-clip` })}
          max={max}
          value={value}
          {...restProps}
        />
      </div>
      <label css={labelStyle({ size, inverted })} htmlFor={generatedId}>
        {showSteps ? `${value}/${max}` : `${(value / max) * 100}%`}
      </label>
    </div>
  );
}

export default Progress;
