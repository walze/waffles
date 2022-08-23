import React from 'react';

import { Button } from '../button';

import { buttonStyle } from './styles';

type DialogButtonProps = {
  /* Focus this particular button when dialog is opened. */
  /* @default false */
  autoFocus?: boolean;
} & Omit<React.ComponentProps<typeof Button>, 'autoFocus'>;

// Override autoFocus behavior to play nicely with react-focus-on
function ButtonInternal(
  { autoFocus = false, children, ...restProps }: DialogButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  return (
    <Button
      {...restProps}
      data-autofocus={autoFocus ? true : null}
      ref={ref}
      css={buttonStyle()}
    >
      {children}
    </Button>
  );
}

export default ButtonInternal;
