import React from 'react';

import { ButtonProps } from '../button/button-internal';
import { Button } from '../button';

import { buttonStyle } from './styles';
import { useMenu } from './menu-context';

type MenuButtonProps = {
  /* [skip docs] */
  index?: number;
} & Omit<ButtonProps, 'size' | 'isLoading' | 'icon' | 'fullWidth'>;

function MenuButton({
  index = 0,
  children,
  onClick,
  ...restProps
}: MenuButtonProps) {
  const { listRef, setIsOpen, getItemProps, triggerRef, inverted } = useMenu();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    onClick?.(event);
    setIsOpen(false);
    // @ts-expect-error: focus() not recognized
    triggerRef.current?.focus();
  }

  return (
    <Button
      {...getItemProps({
        onClick: handleClick,
        ...restProps,
      })}
      ref={(node: HTMLButtonElement) => (listRef.current[index] = node)}
      role="menuitem"
      inverted={inverted}
      css={buttonStyle()}
    >
      {children}
    </Button>
  );
}

export default MenuButton;
