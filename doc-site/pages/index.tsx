import Head from 'next/head';
import { css } from '@emotion/react';

const containerStyle = css`
  padding: 24px;
`;

const headingStyle = css`
  font-family: Studio-Feixen-Sans, Arial, sans-serif;
  font-weight: 800;
  font-size: 20px;
  line-height: 1.25;
  margin-top: 0;
`;

const paragraphStyle = css`
  font-family: Studio-Feixen-Sans, Arial, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
`;


export default function Home() {
  return (
    <div css={containerStyle}>
      <Head>
        <title>Waffles 2.0</title>
        <meta
          name="description"
          content="Evolution of Waffles design system."
        />
        <link href="/favicon.ico" rel="icon" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/manifest.webmanifest" rel="manifest" />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/StudioFeixenSansRegular-english.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/StudioFeixenSansBold-english.woff2"
          rel="preload"
          type="font/woff2"
        />
      </Head>
      <main>
        <h1 css={headingStyle}>Welcome to Waffles 2.0</h1>
        <p css={paragraphStyle}>It is still work in progress and subject to change.</p>
      </main>
    </div>
  );
}
