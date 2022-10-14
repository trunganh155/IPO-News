import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="/vendor/font-awesome-pro-5.15.4/css/all.min.css"
        />

        {/* Google Font */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
