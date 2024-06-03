import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>
      <body style={{fontFamily:"'Clash Display', sans-serif"}} className="overflow-x-hidden bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
