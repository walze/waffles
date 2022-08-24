import React from 'react';

import { PolymorphicRef } from '../helpers';
import { ButtonProps } from '../button/button-internal';
import { Button } from '../button';

import { buttonStyle } from './styles';

export type DialogButtonProps = {
  /* Focus this particular button when dialog is opened. */
  /* @default false */
  autoFocus?: boolean;
} & Omit<ButtonProps, 'autoFocus' | 'icon'>;

// Override autoFocus behavior to play nicely with react-focus-on
function ButtonInternal<T extends React.ElementType = 'button'>(
  { autoFocus = false, children, ...restProps }: DialogButtonProps,
  ref?: PolymorphicRef<T>,
) {
  return (
    <Button
      {...restProps}
      ref={ref}
      data-autofocus={autoFocus ? true : null}
      css={buttonStyle()}
    >
      {children}
    </Button>
  );
}

export default ButtonInternal;
