import { css } from '@emotion/react';
import React from 'react';

const buttonStyle = css`
  color: #05192d;
  background-color: #03ef62;
  height: 36px;
  min-width: 100px;
  font-family: Studio-Feixen-Sans, Arial, sans-serif;
  font-weight: 800;
  font-size: 14px;
  line-height: 1;
  outline: 0;
  border-radius: 4px;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: #65ff8f;
  }

  &:active {
    transform: scale(0.975);
  }
`;

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} css={buttonStyle}>
      {children}
    </button>
  );
}

export default Button;
