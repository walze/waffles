import { keyframes } from '@emotion/react';

export const stroke = keyframes`
   100% {
    stroke-dashoffset: 0;
  }
`;

export const loaderStartMask = keyframes`
  0%, 6% {
    clip-path: polygon(-5% -5%, 0% 178%, 188% 106%, 178% 69%);
  }
  100% {
    clip-path: polygon(-5% -5%, 0% 197%, 188% 300%, 178% 69%);
  }
`;
export const loaderEndMask = keyframes`
  0%, 71% {
    clip-path: polygon(-5% 0%, 0% 88.5%, 100% 38.5%, 100% -54%);
  }
  96%, 100% {
    clip-path: polygon(-5% 0%, 0% 150%, 100% 94%, 100% -84%);
  }
`;
