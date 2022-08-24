import { forwardRef } from 'react';

import ButtonInternal, { DialogButtonProps } from './button-internal';

type ButtonComponent = (props: DialogButtonProps) => JSX.Element | null;

const Button: ButtonComponent = forwardRef(ButtonInternal);

export default Button;
