import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import PopupVideo from "../../components/popupVideo/PopupVideo";
import styles from "./Expert.module.scss";

export default function Expert(props) {
  return (
    <div className={styles.expert}>
      <div className="d-flex flex-row align-items-center">
        <div className="col-4">
          <Image
            alt="chuyen_gia"
            src="/images/expert/DMN.png"
            width={462}
            height={501}
          />
        </div>

        <div className="col-8">
          <div className={styles.expert_black}>
            <p className={styles.expert_title}>Mr. Đậu Minh Nhật</p>
            <p className={styles.expert_title}>Aura Capital</p>

            <p className={styles.expert_content}>
              Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
              ullamcorper malesuada proin. Neque convallis a cras semper auctor.
              Libero id faucibus nisl tincidunt eget. Leo a diam sollicitudin
              tempor id. A lacus vestibulum sed arcu non odio euismod lacinia.
              In tellus integer feugiat scelerisque.
            </p>

            <div className={styles.scroll + " " + "d-flex flex-row"}>
              {Array(10)
                .fill()
                .map((item, index) => {
                  return (
                    <div className="col-3" key={index}>
                      <Image
                        alt="chuyen_gia"
                        src="/images/gray.png"
                        width={180}
                        height={113}
                      />

                      <p className={styles.gallery_title_sm}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
