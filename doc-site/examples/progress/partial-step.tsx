import { Progress } from '@datacamp/waffles/progress';

function Example() {
  return (
    <Progress
      value={2.5}
      max={5}
      mode="steps"
      aria-label="Progress in steps mode, with partially complete step"
    />
  );
}

export default Example;
