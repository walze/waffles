import Head from 'next/head';

import Workbench from '../workbench';
import Main from '../components/main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Waffles 2.0 Playground</title>
        <meta
          name="description"
          content="Interactive playground to develop and polish Waffles components."
        />
        <link href="/favicon.ico" rel="icon" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/manifest.webmanifest" rel="manifest" />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/StudioFeixenSansRegular.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/StudioFeixenSansBold.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/JetBrainsMono.woff2"
          rel="preload"
          type="font/woff2"
        />
      </Head>
      <Main>
        <Workbench />
      </Main>
    </>
  );
}
