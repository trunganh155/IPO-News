import { useRouter } from "next/router";
import React from "react";
import Footer from "../footer/footer";
import FooterDark from "../footer/footer-dark";
import Header from "../header/header";
import styles from "./mainLayout.module.scss";

function MainLayout({ children }) {
  const router = useRouter();

  return (
    <>
      <div className={styles.mainLayout}>
        <Header />
        <div
          className={styles.children}
          style={{
            backgroundColor: router.pathname.includes("/case-study")
              ? "#000"
              : "#F0EEE8",
          }}
        >
          {children}
        </div>
        {router.pathname === "/" ? <Footer /> : <FooterDark />}
      </div>
    </>
  );
}

export default MainLayout;
