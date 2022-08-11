import React from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { cardStyle } from './styles';

type CardProps = {
  children: React.ReactNode;
  disableHover?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function Card({ children, disableHover = false, ...restProps }: CardProps) {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <section
      {...mergeProps(focusProps, restProps)}
      css={cardStyle({ isFocusVisible, disableHover })}
    >
      {children}
    </section>
  );
}

export default Card;
