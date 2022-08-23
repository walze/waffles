import { forwardRef } from 'react';

import ActionButtonInternal from './action-button-internal';

import type { ActionButtonProps } from './action-button-internal';

type ButtonComponent = (props: ActionButtonProps) => JSX.Element | null;

const ActionButton: ButtonComponent = forwardRef(ActionButtonInternal);

export default ActionButton;
