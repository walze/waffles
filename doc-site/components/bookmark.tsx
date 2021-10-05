import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Button } from '@datacamp/waffles/button';
import { Link } from '@datacamp/waffles/icon';

const bookmarkStyle = css`
  margin-left: ${tokens.spacing.small};
  vertical-align: bottom;
`;

type BookmarkProps = {
  targetId: string;
};

function Bookmark({ targetId }: BookmarkProps) {
  return (
    <Button
      as="a"
      variant="plain"
      size="small"
      icon={<Link />}
      aria-label="Bookmark"
      href={`#${targetId}`}
      css={bookmarkStyle}
    />
  );
}

export default Bookmark;