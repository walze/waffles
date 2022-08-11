import { Progress } from '@datacamp/waffles/progress';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Progress } from '@datacamp/waffles/progress';

function Playground() {
  return (
    <Progress value={35} max={100} aria-label="Default progress" />
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Progress,
  },
};

export default playgroundConfig;
