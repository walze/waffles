import React from 'react';

import { Loader } from '../loader';

import { loaderStyle, loaderWrapperStyle } from './styles';
import Button from './button';

type ButtonLoaderProps = {
  size: NonNullable<React.ComponentProps<typeof Button>['size']>;
  variant: NonNullable<React.ComponentProps<typeof Button>['variant']>;
  inverted: NonNullable<React.ComponentProps<typeof Button>['inverted']>;
  hasIcon: boolean;
};

function ButtonLoader({ size, variant, inverted, hasIcon }: ButtonLoaderProps) {
  return (
    <div css={loaderWrapperStyle({ size, hasLoadingLabel: !hasIcon })}>
      <Loader
        css={loaderStyle({ variant, inverted })}
        width={size === 'small' ? '12' : '16'} // Setting width prop here so that it gets passed to the loader as restProps for the svg element
      />
      {!hasIcon && <span>Loading…</span>}
    </div>
  );
}

export default ButtonLoader;
