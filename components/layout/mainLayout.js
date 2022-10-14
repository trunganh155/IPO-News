import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./mainLayout.module.scss";

function MainLayout({ children }) {
  return (
    <>
      <div className={styles.mainLayout}>
        <Header />
        <div className={styles.children}>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
