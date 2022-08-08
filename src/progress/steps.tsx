import { stepClipStyle, stepClipWrapperStyle, sizeMap } from './styles';
import Progress from './progress';

type ProgressProps = {
  id: string;
  max: number;
  size: NonNullable<React.ComponentProps<typeof Progress>['size']>;
};

function ProgressSteps({ id, max, size }: ProgressProps) {
  function getStepClipRect(index: number) {
    return (
      <rect
        key={index}
        css={stepClipStyle({
          size,
          index,
          max,
        })}
        rx={parseInt(sizeMap[size].sizing) / 2}
      />
    );
  }

  return (
    <svg css={stepClipWrapperStyle()}>
      <defs>
        <clipPath id={`${id}-clip`}>
          {Array.from({ length: max }, (_, index) => {
            return getStepClipRect(index);
          })}
        </clipPath>
      </defs>
    </svg>
  );
}

export default ProgressSteps;
