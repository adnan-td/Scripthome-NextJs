/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html prefix="og: http://ogp.me/ns#" lang="en">
      <Head>
        {/* Primary Meta Tags  */}
        <meta name="title" content="ScriptHome" />
        <meta
          name="description"
          content="Automatically optimize your Roblox experience with scripts from ScriptHome. Roblox Scripts, which are frequently updated and uploaded, where almost everyone can contribute!. Get notified for new roblox scripts by joining our server."
        />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scripthome.org/" />
        <meta property="og:title" content="ScriptHome" />
        <meta
          property="og:description"
          content="Automatically optimize your Roblox experience with scripts from ScriptHome. Roblox Scripts, which are frequently updated and uploaded, where almost everyone can contribute!. Get notified for new roblox scripts by joining our server."
        />
        <meta property="og:image" content="" />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://scripthome.org/" />
        <meta property="twitter:domain" content="https://scripthome.org/" />
        <meta property="twitter:title" content="ScriptHome" />
        <meta
          property="twitter:description"
          content="Automatically optimize your Roblox experience with scripts from ScriptHome. Roblox Scripts, which are frequently updated and uploaded, where almost everyone can contribute!. Get notified for new roblox scripts by joining our server."
        />
        <meta property="twitter:image" content="" />
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
