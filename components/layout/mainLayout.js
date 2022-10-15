import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./mainLayout.module.scss";
import { useRouter } from "next/router";

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
              : "#fff",
          }}
        >
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
