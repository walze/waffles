import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { Input } from '@datacamp/waffles/input';
import { useId } from '@datacamp/waffles/hooks';

const descriptionStyle = css`
  margin-bottom: ${tokens.spacing.small};
`;

const errorStyle = css`
  color: ${tokens.colors.redDarkText};
  margin-top: ${tokens.spacing.small};
`;

function Example() {
  const id = useId();
  const descriptionId = `description-${id}`;
  const errorId = `error-${id}`;

  return (
    <>
      <Text id={descriptionId} as="p" css={descriptionStyle}>
        Description
      </Text>
      <Input
        aria-errormessage={errorId}
        aria-describedby={descriptionId}
        error
        placeholder="Error"
      />
      <Text id={errorId} as="p" css={errorStyle}>
        Error message
      </Text>
    </>
  );
}

export default Example;
