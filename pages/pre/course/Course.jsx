import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Course.module.scss";

export default function Course(props) {
  return (
    <div className={styles.course}>
      <div className="heading">
        <p className="text">khóa học</p>
        <p className="col decor"></p>
      </div>

      <section className="d-flex flex-row">
        <div className="col-8 pe-4" style={{ borderRight: "1px solid #000" }}>
          <div className="d-flex flex-wrap">
            <div className="col-12">
              <Image
                alt="khoa_hoc"
                src="/images/red.png"
                width={900}
                height={405}
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
          </div>
        </div>

        <div className="col-4 ps-4 pb-4">
          {Array(2)
            .fill()
            .map((item, index) => {
              return (
                <div className="d-flex flex-wrap"  key={index}>
                  <div className="col-12">
                    <Image
                      alt="khoa_hoc"
                      src="/images/black.png"
                      width={430}
                      height={210}
                    />
                  </div>

                  <div className="col-12">
                    <p className={styles.course_title}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      <section className="d-flex flex-row pb-5">
        <div className="col-8 pe-4" style={{ borderRight: "1px solid #000" }}>
          {Array(3)
            .fill()
            .map((item, index) => {
              return (
                <div  key={index}>
                  <div className="line"></div>

                  <div className="d-flex flex-row">
                    <div className="col-7 px-4">
                      <p className={styles.course_title}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit cum error assumenda quo.
                      </p>

                      <p className={styles.course_content}>
                        Senectus et netus et malesuada. Nunc pulvinar sapien et
                        ligula ullamcorper malesuada proin. Neque convallis a
                        cras semper auctor. Libero id faucibus nisl tincidunt
                        eget. Leo a diam sollicitudin tempor id. A lacus
                        vestibulum sed arcu non odio euismod lacinia. In tellus
                        integer feugiat scelerisque.
                      </p>
                    </div>

                    <div className="col-5">
                      <Image
                        alt="khoa_hoc"
                        src="/images/black.png"
                        width={375}
                        height={260}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="col-4 ps-4">
          <div className={styles.scroll + " " + "d-flex flex-column"}>
            {Array(10)
              .fill()
              .map((item, index) => {
                return (
                  <div className="d-flex flex-row"  key={index}>
                    <div className="col-5">
                      <Image
                        alt="khoa_hoc"
                        src="/images/black.png"
                        width={166}
                        height={110}
                      />
                    </div>

                    <div className="col-7 ps-2">
                      <p className={styles.course_title_sm}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <section>
        <Image
          alt="khoa_hoc"
          src="/images/course/banner.png"
          width={1380}
          height={280}
        />
      </section>
    </div>
  );
}
