import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { post } from "../../utils/PostDemo/Post";
import { removeAccents } from "../../utils/Function";
import styles from "./SubPartner.module.scss";

export default function SubPartner(props) {
  const router = useRouter();

  return (
    <div className={styles.subPartner}>
      <section className={styles.subPartner_header + " " + "mb-4"}>
        <div className={styles.background + " " + "col-12"}>
          <Image
            alt="subPartner_image"
            src="/images/grey.png"
            width={1429}
            height={752}
          />
        </div>

        <div className={styles.text + " " + "col-8"}>
          <p className={styles.subPartner_title_lg}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <p className={styles.subPartner_content_lg}>
            Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
            ullamcorper malesuada proin. Neque convallis a cras semper auctor.
          </p>
        </div>
      </section>

      <div className="line"></div>

      <section className="d-flex flex-row">
        <div className="col-9 pe-5">
          <div className="col-12 d-flex flex-column my-3">
            <div className="d-flex flex-row mb-2">
              <i className="fab fa-facebook "></i>
              <i className="fab fa-linkedin "></i>
              <i className="fab fa-instagram "></i>
              <i className="far fa-link "></i>
            </div>

            <p className={styles.timeCreate}>Ngày 29/08/2022 - 13h50 </p>
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          ></div>
        </div>

        <div className="col-3 d-flex flex-column">
          <div>
            <Image
              alt="subPartner_image"
              src="/images/grey.png"
              width={346}
              height={370}
            />
          </div>

          <div className="px-3">
            <div className={styles.box + " " + "d-flex flex-column"}>
              <p className={styles.user}>tên tài khoản</p>

              <div className="d-flex flex-row">
                <div
                  className="d-flex flex-column px-2 text-center"
                  style={{ borderRight: "1px solid #000" }}
                >
                  <p className={styles.label}>Ngày tham gia</p>
                  <p className={styles.joinDate}>30/08</p>
                  <p className={styles.joinDate}>2022</p>
                </div>

                <div className="d-flex flex-column justify-content-center px-2">
                  <p className={styles.label}>
                    Số lượng bài đăng: <b>7</b>{" "}
                  </p>
                  <p className={styles.label}>
                    Lượt like của bài đăng: <b>23</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
