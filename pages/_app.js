import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { store } from "../store";
import "../styles/globals.scss";

import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
    import("bootstrap/dist/js/bootstrap");
    AOS.init();
    AOS.init({
      duration: 800,
    });
  }, []);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <>null</>;
  } else {
    return (
      <Provider store={store}>
        <Head>
          <meta charset="utf-8" />
          <title>Tạp Chí IPO</title>
          <meta name="description" content="Generated by create next app" />
          <meta
            property="zalo-platform-site-verification"
            content="NlFW6QhNR28knTmYxiS92XNKfJtvfNvbD38"
          ></meta>
          <meta name="theme-color" content="#000000"></meta>
          {/* <meta name="image" content="images/Logo/favicon.png"></meta>
          <meta name="description" content=""></meta>
          <meta name="og:image" content="assets/images/Logo/favicon.png"></meta> */}
          <meta name="og:description" content=""></meta>
          {/* logo favicon */}
          <link href="/images/logo.png" rel="icon" />
          <link href="/images/logo.png" rel="apple-touch-icon"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          {/*css bootstrap*/}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossOrigin="anonymous"
          ></link>

          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossOrigin="anonymous"
          />
        </Head>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
export default MyApp;
