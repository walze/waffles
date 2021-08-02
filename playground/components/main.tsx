import { css } from '@emotion/react';
import React from 'react';

import GridBackground from './grid-background';

const mainStyle = css`
  background: url(${GridBackground}) repeat;
  width: 100%;
  height: 100vh;
  padding: 100px;
`;

type MainProps = {
  children?: React.ReactNode;
}

function Main({ children }: MainProps) {
  return <main css={mainStyle}>{children}</main>
}

export default Main;
