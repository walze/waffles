import { css } from '@emotion/react';

import { Link } from '../index';
import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Paragraph>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,{' '}
        <Link size="small" href="https://datacamp.com">
          Go to DataCamp website
        </Link>{' '}
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paragraph>
      <Paragraph>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,{' '}
        <Link size="medium" href="https://datacamp.com">
          Go to DataCamp website
        </Link>{' '}
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paragraph>
      <Paragraph>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,{' '}
        <Link size="large" href="https://datacamp.com">
          Go to DataCamp website
        </Link>{' '}
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paragraph>
    </div>
  );
}

export default Story;
