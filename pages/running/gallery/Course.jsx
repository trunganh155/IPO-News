import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Course.module.scss";

export default function Course(props) {
  return (
    <div className={styles.course}>
      <p className={styles.course_heading}>khóa học</p>

      <div className="d-flex flex-row mb-5">
        <div className="col-8 pe-3" style={{ borderRight: "1px solid #000" }}>
          <section className="d-flex flex-wrap">
            <div className="col-12">
              <Image
                alt="khoa_hoc"
                src="/images/red.png"
                width={871}
                height={378}
              />
            </div>

            <div className="col-12">
              <p className={styles.course_title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                cum error assumenda quo.
              </p>

              <p className={styles.course_content}>
                Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
                ullamcorper malesuada proin. Neque convallis a cras semper
                auctor. Libero id faucibus nisl tincidunt eget. Leo a diam
                sollicitudin tempor id. A lacus vestibulum sed arcu non odio
                euismod lacinia. In tellus integer feugiat scelerisque.
              </p>
            </div>
          </section>
          <hr />

          <section className="d-flex flex-row">
            <div className="col-7 px-3">
              <p className={styles.course_title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                cum error assumenda quo.
              </p>

              <p className={styles.course_content}>
                Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
                ullamcorper malesuada proin. Neque convallis a cras semper
                auctor. Libero id faucibus nisl tincidunt eget. Leo a diam
                sollicitudin tempor id. A lacus vestibulum sed arcu non odio
                euismod lacinia. In tellus integer feugiat scelerisque.
              </p>
            </div>

            <div className="col-5">
              <Image
                alt="khoa_hoc"
                src="/images/black.png"
                width={345}
                height={229}
              />
            </div>
          </section>

          {/* loop */}
          <section className="d-flex flex-row">
            <div className="col-7 px-3">
              <p className={styles.course_title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                cum error assumenda quo.
              </p>

              <p className={styles.course_content}>
                Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
                ullamcorper malesuada proin. Neque convallis a cras semper
                auctor. Libero id faucibus nisl tincidunt eget. Leo a diam
                sollicitudin tempor id. A lacus vestibulum sed arcu non odio
                euismod lacinia. In tellus integer feugiat scelerisque.
              </p>
            </div>

            <div className="col-5">
              <Image
                alt="khoa_hoc"
                src="/images/black.png"
                width={345}
                height={229}
              />
            </div>
          </section>

          <section className="d-flex flex-row">
            <div className="col-7 px-3">
              <p className={styles.course_title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                cum error assumenda quo.
              </p>

              <p className={styles.course_content}>
                Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
                ullamcorper malesuada proin. Neque convallis a cras semper
                auctor. Libero id faucibus nisl tincidunt eget. Leo a diam
                sollicitudin tempor id. A lacus vestibulum sed arcu non odio
                euismod lacinia. In tellus integer feugiat scelerisque.
              </p>
            </div>

            <div className="col-5">
              <Image
                alt="khoa_hoc"
                src="/images/black.png"
                width={345}
                height={229}
              />
            </div>
          </section>
          {/* loop */}
        </div>

        <div className="col-4 px-3">
          <section className="d-flex flex-wrap">
            <div className="col-12">
              <Image
                alt="khoa_hoc"
                src="/images/black.png"
                width={408}
                height={190}
              />
            </div>

            <div className="col-12">
              <p className={styles.course_title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                cum error assumenda quo.
              </p>
            </div>
          </section>

          {/* loop */}
          <section className="d-flex flex-wrap">
            <div className="col-12">
              <Image
                alt="khoa_hoc"
                src="/images/black.png"
                width={408}
                height={190}
              />
            </div>

            <div className="col-12">
              <p className={styles.course_title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                cum error assumenda quo.
              </p>
            </div>
          </section>
          {/* loop */}

          <section className={styles.scroll + " " + "d-flex flex-column"}>
            <div className="d-flex flex-row">
              <div className="col-5">
                <Image
                  alt="khoa_hoc"
                  src="/images/black.png"
                  width={166}
                  height={110}
                />
              </div>

              <div className="col-7">
                <p className={styles.course_title_sm}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            {/* loop */}
            <div className="d-flex flex-row">
              <div className="col-5">
                <Image
                  alt="khoa_hoc"
                  src="/images/black.png"
                  width={166}
                  height={110}
                />
              </div>

              <div className="col-7">
                <p className={styles.course_title_sm}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="col-5">
                <Image
                  alt="khoa_hoc"
                  src="/images/black.png"
                  width={166}
                  height={110}
                />
              </div>

              <div className="col-7">
                <p className={styles.course_title_sm}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="col-5">
                <Image
                  alt="khoa_hoc"
                  src="/images/black.png"
                  width={166}
                  height={110}
                />
              </div>

              <div className="col-7">
                <p className={styles.course_title_sm}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="col-5">
                <Image
                  alt="khoa_hoc"
                  src="/images/black.png"
                  width={166}
                  height={110}
                />
              </div>

              <div className="col-7">
                <p className={styles.course_title_sm}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="col-5">
                <Image
                  alt="khoa_hoc"
                  src="/images/black.png"
                  width={166}
                  height={110}
                />
              </div>

              <div className="col-7">
                <p className={styles.course_title_sm}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="col-5">
                <Image
                  alt="khoa_hoc"
                  src="/images/black.png"
                  width={166}
                  height={110}
                />
              </div>

              <div className="col-7">
                <p className={styles.course_title_sm}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="col-5">
                <Image
                  alt="khoa_hoc"
                  src="/images/black.png"
                  width={166}
                  height={110}
                />
              </div>

              <div className="col-7">
                <p className={styles.course_title_sm}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            {/*  */}
          </section>
        </div>
      </div>

      <div>
        <Image
          alt="khoa_hoc"
          src="/images/course/banner.png"
          width={1332}
          height={260}
        />
      </div>
    </div>
  );
}
