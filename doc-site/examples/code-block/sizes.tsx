import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { CodeBlock } from '@datacamp/waffles/code-block';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        gap: ${tokens.spacing.small};
      `}
    >
      <CodeBlock size="large">{`pyftsubset JetBrainsMono.ttf
--output-file="JetBrainsMono.woff"
--flavor=woff
--with-zopfli
--layout-features="kern,liga,clig,ccmp"
--unicodes="*"`}</CodeBlock>
      <CodeBlock size="medium">{`pyftsubset JetBrainsMono.ttf
--output-file="JetBrainsMono.woff"
--flavor=woff
--with-zopfli
--layout-features="kern,liga,clig,ccmp"
--unicodes="*"`}</CodeBlock>
      <CodeBlock size="small">{`pyftsubset JetBrainsMono.ttf
--output-file="JetBrainsMono.woff"
--flavor=woff
--with-zopfli
--layout-features="kern,liga,clig,ccmp"
--unicodes="*"`}</CodeBlock>
    </div>
  );
}

export default Example;
