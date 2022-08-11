import { Progress } from '@datacamp/waffles/progress';

function Example() {
  return (
    <Progress
      value={2}
      max={6}
      mode="steps"
      aria-label="Progress in steps mode"
    />
  );
}

export default Example;
