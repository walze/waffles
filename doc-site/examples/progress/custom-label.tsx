import { Progress } from '@datacamp/waffles/progress';

function Example() {
  const current = 40;

  return (
    <Progress
      value={current}
      aria-label="Progress with custom label"
      customLabel={`${current}% complete`}
    />
  );
}

export default Example;
