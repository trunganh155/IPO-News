import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
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
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&family=Montserrat:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        ></link>
      
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
