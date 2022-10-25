import { useRouter } from "next/router";
import React from "react";
import Footer from "../footer/footer";
import FooterDark from "../footer/footer-dark";
import Header from "../header/header";
import HeaderOnlyB from "../header/headerOnlyB";
import HeaderOnlyW from "../header/headerOnlyW";
import styles from "./mainLayout.module.scss";

function MainLayout({ children }) {
  const router = useRouter();

  const renderHeader = () => {
    if (
      router.pathname.includes("/sub") ||
      router.pathname.includes("/forum")
    ) {
      return <HeaderOnlyW />;
    } else if (router.pathname.includes("/case-study")) {
      return <HeaderOnlyB />;
    }

    return <Header />;
  };

  return (
    <>
      <div className={styles.mainLayout}>
        {renderHeader()}

        {children}

        {router.pathname === "/" ? <Footer /> : <FooterDark />}
      </div>
    </>
  );
}

export default MainLayout;
