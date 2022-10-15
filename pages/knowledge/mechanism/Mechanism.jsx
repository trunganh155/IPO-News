import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Mechanism.module.scss";

export default function Mechanism(props) {
  return (
    <div className={styles.mechanism}>
      <p className={styles.mechanism_heading}>cơ chế vốn</p>
      
      <section className="d-flex flex-column-reverse flex-sm-row align-items-center">
        <div className="col-12 col-sm-5">
          <p className={styles.mechanism_title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cum
            error assumenda quo.
          </p>

          <p className={styles.mechanism_content}>
            Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
            ullamcorper malesuada proin. Neque convallis a cras semper auctor.
            Libero id faucibus nisl tincidunt eget. Leo a diam sollicitudin
            tempor id. A lacus vestibulum sed arcu non odio euismod lacinia. In
            tellus integer feugiat scelerisque.
          </p>
        </div>

        <div className="col-12 col-sm-7 ps-0 ps-sm-4">
          <Image
            alt="co_che_von"
            src="/images/red.png"
            width={761}
            height={478}
          />
        </div>
      </section>
      <hr />

      <section className="d-flex flex-row mb-4">
        <div className="col-10" style={{ borderRight: "1px solid #000" }}>
          <div className="d-flex flex-row">
            <div className="col-4">
              <Image
                alt="co_che_von"
                src="/images/black.png"
                width={390}
                height={190}
              />
            </div>

            <div className="col-8 px-4">
              <p className={styles.mechanism_title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                cum error assumenda quo.
              </p>

              <p className={styles.mechanism_content}>
                Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
                ullamcorper malesuada proin. Neque convallis a cras semper
                auctor. Libero id faucibus nisl tincidunt eget. Leo a diam
                sollicitudin tempor id. A lacus vestibulum sed arcu non odio
                euismod lacinia. In tellus integer feugiat scelerisque.
              </p>
            </div>
          </div>

          <div className="d-flex flex-row">
            <div className="col-4">
              <Image
                alt="co_che_von"
                src="/images/black.png"
                width={390}
                height={190}
              />
            </div>

            <div className="col-8 px-4">
              <p className={styles.mechanism_title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                cum error assumenda quo.
              </p>

              <p className={styles.mechanism_content}>
                Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
                ullamcorper malesuada proin. Neque convallis a cras semper
                auctor. Libero id faucibus nisl tincidunt eget. Leo a diam
                sollicitudin tempor id. A lacus vestibulum sed arcu non odio
                euismod lacinia. In tellus integer feugiat scelerisque.
              </p>
            </div>
          </div>

          <div className="d-flex flex-row">
            <div className="col-4">
              <Image
                alt="co_che_von"
                src="/images/black.png"
                width={390}
                height={190}
              />
            </div>

            <div className="col-8 px-4">
              <p className={styles.mechanism_title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                cum error assumenda quo.
              </p>

              <p className={styles.mechanism_content}>
                Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
                ullamcorper malesuada proin. Neque convallis a cras semper
                auctor. Libero id faucibus nisl tincidunt eget. Leo a diam
                sollicitudin tempor id. A lacus vestibulum sed arcu non odio
                euismod lacinia. In tellus integer feugiat scelerisque.
              </p>
            </div>
          </div>
        </div>

        <div className="col-2 ps-3">
          <Image
            alt="co_che_von"
            src="/images/mechanism/banner.png"
            width={244}
            height={713}
          />
        </div>
      </section>

      <section className="d-flex flex-row">
        <div
          className="col-10 d-flex flex-row justify-content-around px-3 py-4"
          style={{ backgroundColor: "#606060" }}
        >
          <div className="col-3">
            <Image
              alt="co_che_von"
              src="/images/black.png"
              width={283}
              height={221}
            />
            <p className={styles.mechanism_title_white}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="col-3">
            <Image
              alt="co_che_von"
              src="/images/black.png"
              width={283}
              height={221}
            />
            <p className={styles.mechanism_title_white}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="col-3">
            <Image
              alt="co_che_von"
              src="/images/black.png"
              width={283}
              height={221}
            />
            <p className={styles.mechanism_title_white}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="col-2 ps-3">
          <Image
            alt="co_che_von"
            src="/images/mechanism/banner.png"
            width={244}
            height={414}
          />
        </div>
      </section>
    </div>
  );
}
