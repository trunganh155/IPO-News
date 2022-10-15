import React from "react";
import styles from "./Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "../../components/layout/mainLayout";
import { useRouter } from "next/router";

function HomePage(props) {
  return (
    <MainLayout>
      <div style={{ height: "500px" }}>
        <h1>HOME PAGE</h1>
      </div>
    </MainLayout>
  );
}

export default HomePage;
