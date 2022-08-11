import { ScreenReaderOnly } from '../screen-reader-only';

import Progress from './progress';

type ProgressProps = {
  id: string;
  isStepsMode: boolean;
  max: NonNullable<React.ComponentProps<typeof Progress>['max']>;
  value: NonNullable<React.ComponentProps<typeof Progress>['value']>;
};

function Label({ id, isStepsMode, max, value }: ProgressProps) {
  const roundedVal = Math.floor(value);

  return (
    <label htmlFor={id}>
      {isStepsMode ? (
        <>
          <span aria-hidden="true">{`${roundedVal}/${max}`}</span>
          <ScreenReaderOnly>{`${roundedVal} out of ${max} steps`}</ScreenReaderOnly>
        </>
      ) : (
        `${(roundedVal / max) * 100}%`
      )}
    </label>
  );
}

export default Label;
