import React from 'react';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';

import { cardStyle, headstoneStyle } from './styles';

type CardProps = {
  children: React.ReactNode;
  headstone?: React.ReactNode;
  disableHover?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function Card({
  children,
  headstone,
  disableHover = false,
  ...restProps
}: CardProps) {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <section
      {...mergeProps(focusProps, restProps)}
      css={cardStyle({
        isFocusVisible,
        hasHeadstone: !!headstone,
        disableHover,
      })}
    >
      {headstone && <div css={headstoneStyle()}>{headstone}</div>}
      {children}
    </section>
  );
}

export default Card;
