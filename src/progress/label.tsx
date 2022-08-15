import Progress from './progress';

type ProgressProps = {
  id: string;
  isStepsMode: boolean;
  max: NonNullable<React.ComponentProps<typeof Progress>['max']>;
  value: NonNullable<React.ComponentProps<typeof Progress>['value']>;
  customLabel?: React.ReactNode | string;
};

function Label({ id, isStepsMode, max, value, customLabel }: ProgressProps) {
  const roundedVal = Math.floor(value);

  return (
    <label htmlFor={id}>
      {customLabel ? (
        customLabel
      ) : (
        <span aria-hidden="true">
          {isStepsMode
            ? `${roundedVal} / ${max}`
            : `${Math.floor((roundedVal / max) * 100)}%`}
        </span>
      )}
    </label>
  );
}

export default Label;
