/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html prefix="og: http://ogp.me/ns#" lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <script src="/adblocker.js" async></script> */}
      </body>
    </Html>
  );
}
