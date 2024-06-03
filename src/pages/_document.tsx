import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap" rel="stylesheet" />
      </Head>
      <body style={{fontFamily:"'Clash Display', sans-serif"}} className="overflow-x-hidden bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
