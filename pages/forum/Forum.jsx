import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { post } from "../../utils/PostDemo/Post";
import { removeAccents } from "../../utils/Function";
import styles from "./Forum.module.scss";

export default function Forum(props) {
  const router = useRouter();

  return (
    <div className={styles.forum}>
      <section className={styles.forum_header + " " + "mb-4"}>
        <div className={styles.background + " " + "col-12"}>
          <Image
            alt="forum_image"
            src="/images/grey.png"
            width={1429}
            height={752}
          />
        </div>

        <div className={styles.text + " " + "col-8"}>
          <p className={styles.forum_title_lg}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <p className={styles.forum_content_lg}>
            Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
            ullamcorper malesuada proin. Neque convallis a cras semper auctor.
          </p>
        </div>
      </section>

      <div className="line"></div>

      <section className="d-flex flex-row">
        <div className="col-9 d-flex flex-column pe-5">
          <div className="col-12">
            <div
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            ></div>
          </div>

          <div className="col-12 d-flex flex-row justify-content-between">
            {Array(3)
              .fill()
              .map((item, index) => {
                return (
                  <div className="col-4 px-2">
                    <Image
                      alt="forum_image"
                      src="/images/black.png"
                      width={374}
                      height={219}
                    />

                    <p className={styles.forum_title}>
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="col-3">
          <Image
            alt="forum_image"
            src="/images/mechanism/banner.png"
            width={355}
            height={854}
          />
        </div>
      </section>

      <p className={styles.forum_heading}>TIN TỨC KHÁC</p>

      <section className="d-flex flex-column">
        {Array(3)
          .fill()
          .map((item, index) => {
            return (
              <div className="col-12 d-flex flex-row mb-3">
                <div className="col-9 pe-5">
                  <div className="px-5">
                    <p className={styles.forum_title_sm}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit cum error assumenda quo.
                    </p>

                    <p className={styles.forum_content_sm}>
                      Senectus et netus et malesuada. Nunc pulvinar sapien et
                      ligula ullamcorper malesuada proin. Neque convallis a cras
                      semper auctor. Libero id faucibus nisl tincidunt eget. Leo
                      a diam sollicitudin tempor id. A lacus vestibulum sed arcu
                      non odio euismod lacinia. In tellus integer feugiat
                      scelerisque.
                    </p>
                  </div>
                </div>

                <div className="col-3">
                  <Image
                    alt="forum_image"
                    src="/images/black.png"
                    width={344}
                    height={170}
                  />
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
}
