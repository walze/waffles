import { css } from '@emotion/react';

const buttonStyle = css`
  background-color: red;
`;

function Button() {
  return <button css={buttonStyle}>Hello!</button>;
}

export default Button;
