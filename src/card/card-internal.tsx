import React from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { cardStyle, headstoneStyle } from './styles';

import type { PolymorphicRef, PolymorphicComponentProps } from '../helpers';

type CardBaseProps = {
  children: React.ReactNode;
  headstone?: React.ReactNode;
  disableHover?: boolean;
};

export type CardProps<T extends React.ElementType = 'section'> =
  PolymorphicComponentProps<T, CardBaseProps>;

function CardInternal<T extends React.ElementType = 'section'>(
  { as, children, headstone, disableHover = false, ...restProps }: CardProps<T>,
  ref?: PolymorphicRef<T>,
) {
  const Element = as || 'section';
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <Element
      {...mergeProps(focusProps, restProps)}
      ref={ref}
      css={cardStyle({
        isFocusVisible,
        hasHeadstone: !!headstone,
        disableHover,
      })}
    >
      {headstone && <div css={headstoneStyle()}>{headstone}</div>}
      {children}
    </Element>
  );
}

export default CardInternal;
