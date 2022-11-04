import { useRouter } from "next/router";
import React from "react";
import Footer from "../footer/footer";
import FooterDark from "../footer/footer-dark";
import Header from "../header/header";
import HeaderOnlyB from "../header/headerOnlyB";
import HeaderOnlyW_Nav from "../header/headerOnlyW_Nav";
import styles from "./mainLayout.module.scss";

function MainLayout({ children }) {
  const router = useRouter();

  const renderHeader = () => {
    if (
      router.pathname.includes("/[sub]") ||
      router.pathname.includes("/sub-partner") ||
      router.pathname.includes("/forum")
    ) {
      return <HeaderOnlyW_Nav />;
    }

    return <Header />;
  };

  return (
    <>
      <div className={styles.mainLayout}>
        {renderHeader()}
        <div className={styles.children}>{children}</div>
        {/* {router.pathname === "/" ? <Footer /> : <FooterDark />} */}
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
