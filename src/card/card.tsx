import React, { forwardRef } from 'react';

import CardInternal from './card-internal';

import type { CardProps } from './card-internal';

type CardComponent = <T extends React.ElementType = 'section'>(
  props: CardProps<T>,
) => JSX.Element | null;

const Card: CardComponent = forwardRef(CardInternal);

export default Card;
