import { stepClipStyle, stepClipWrapperStyle, sizeMap } from './styles';
import Progress from './progress';

type StepsProps = {
  id: string;
  max: number;
  size: NonNullable<React.ComponentProps<typeof Progress>['size']>;
};

function Steps({ id, max, size }: StepsProps) {
  function renderStepRect(index: number) {
    const width = `${100 / max}%`;

    return (
      <rect
        key={index}
        css={stepClipStyle({
          size,
          index,
          max,
        })}
        rx={parseInt(sizeMap[size].sizing) / 2}
        width={width} // Width required here for Chrome
      />
    );
  }

  return (
    <svg css={stepClipWrapperStyle()}>
      <defs>
        <clipPath id={`${id}-clip`}>
          {Array.from({ length: max }, (_, index) => {
            return renderStepRect(index);
          })}
        </clipPath>
      </defs>
    </svg>
  );
}

export default Steps;
