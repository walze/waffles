import React from 'react';

import { PolymorphicRef } from '../helpers';
import { ButtonProps } from '../button/button-internal';
import { Button } from '../button';

export type ActionButtonProps = {
  /* [skip docs] */
  isUpgrade?: boolean;
} & Omit<ButtonProps, 'variant' | 'size' | 'isLoading' | 'icon' | 'fullWidth'>;

function ActionButtonInternal<T extends React.ElementType = 'button'>(
  { isUpgrade, children, ...restProps }: ActionButtonProps,
  ref?: PolymorphicRef<T>,
) {
  return (
    <Button
      {...restProps}
      ref={ref}
      size="small"
      variant={isUpgrade ? 'upgrade' : 'plain'}
    >
      {children}
    </Button>
  );
}

export default ActionButtonInternal;
