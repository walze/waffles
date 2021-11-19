import { useState } from 'react';

import { Checkbox } from '@datacamp/waffles/checkbox';
import { Link } from '@datacamp/waffles/link';

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={() => setChecked(!checked)}
      placeholder="Welcome"
    >
      I accept{' '}
      <Link href="https://www.datacamp.com/terms-of-use">Terms of Use</Link> and{' '}
      <Link href="https://www.datacamp.com/privacy-policy">Privacy Policy</Link>
    </Checkbox>
  );
}

export default Example;