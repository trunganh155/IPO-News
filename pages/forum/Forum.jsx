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
      <section>
        <div className="heading">
          <p className="text">BÀI VIẾT MỚI NHẤT</p>
          <p className="col decor"></p>
        </div>

        <div className="px-5">
          {Array(3)
            .fill()
            .map((item, index) => {
              return (
                <div key={index}>
                  <div className="d-flex flex-wrap mb-3">
                    <div className="col-12 d-block d-sm-none">
                      <p className={styles.forum_title}>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>

                    <div className="col-6 col-sm-4">
                      <Image
                        alt="forum_image"
                        src="/images/grey.png"
                        width={402}
                        height={204}
                      />
                    </div>

                    <div className="col-6 col-sm-8 ps-3">
                      <p
                        className={
                          styles.forum_title + " " + "d-none d-sm-block"
                        }
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>

                      <p className={styles.forum_content}>
                        Senectus et netus et malesuada. Nunc pulvinar sapien et
                        ligula ullamcorper malesuada proin. Neque convallis a
                        cras semper auctor.
                      </p>

                      <div className="d-none d-sm-block">
                        <div className="d-flex flex-row">
                          <div className={styles.avatar}>
                            <Image
                              alt="forum_image"
                              src="/images/expert/DMN.png"
                              width={35}
                              height={35}
                              objectFit="cover"
                            />
                          </div>

                          <div className="d-flex flex-column ps-3">
                            <p className={styles.forum_text}>Tên tác giả</p>
                            <p className={styles.forum_text}>
                              Lượt xem: 17 - Bình Luận: 5
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 d-block d-sm-none">
                      <div className="d-flex flex-row">
                        <div className={styles.avatar}>
                          <Image
                            alt="forum_image"
                            src="/images/expert/DMN.png"
                            width={35}
                            height={35}
                            objectFit="cover"
                          />
                        </div>

                        <div className="d-flex flex-column ps-3">
                          <p className={styles.forum_text}>Tên tác giả</p>
                          <p className={styles.forum_text}>
                            Lượt xem: 17 - Bình Luận: 5
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < 2 ? <div className="line"></div> : null}
                </div>
              );
            })}
        </div>
      </section>

      <section>
        <div className="heading">
          <p className="text">BÀI VIẾT ĐƯỢC QUAN TÂM NHẤT</p>
          <p className="col decor"></p>
        </div>

        <div className="px-5">
          {Array(3)
            .fill()
            .map((item, index) => {
              return (
                <div key={index}>
                  <div className="d-flex flex-wrap mb-3">
                    <div className="col-12 d-block d-sm-none">
                      <p className={styles.forum_title}>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>

                    <div className="col-6 col-sm-4">
                      <Image
                        alt="forum_image"
                        src="/images/grey.png"
                        width={402}
                        height={204}
                      />
                    </div>

                    <div className="col-6 col-sm-8 ps-3">
                      <p
                        className={
                          styles.forum_title + " " + "d-none d-sm-block"
                        }
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>

                      <p className={styles.forum_content}>
                        Senectus et netus et malesuada. Nunc pulvinar sapien et
                        ligula ullamcorper malesuada proin. Neque convallis a
                        cras semper auctor.
                      </p>

                      <div className="d-none d-sm-block">
                        <div className="d-flex flex-row">
                          <div className={styles.avatar}>
                            <Image
                              alt="forum_image"
                              src="/images/expert/DMN.png"
                              width={35}
                              height={35}
                              objectFit="cover"
                            />
                          </div>

                          <div className="d-flex flex-column ps-3">
                            <p className={styles.forum_text}>Tên tác giả</p>
                            <p className={styles.forum_text}>
                              Lượt xem: 17 - Bình Luận: 5
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 d-block d-sm-none">
                      <div className="d-flex flex-row">
                        <div className={styles.avatar}>
                          <Image
                            alt="forum_image"
                            src="/images/expert/DMN.png"
                            width={35}
                            height={35}
                            objectFit="cover"
                          />
                        </div>

                        <div className="d-flex flex-column ps-3">
                          <p className={styles.forum_text}>Tên tác giả</p>
                          <p className={styles.forum_text}>
                            Lượt xem: 17 - Bình Luận: 5
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < 2 ? <div className="line"></div> : null}
                </div>
              );
            })}
        </div>
      </section>

      <section>
        <div className="heading">
          <p className="text">BÀI VIẾT HAY NHẤT</p>
          <p className="col decor"></p>
        </div>

        <div className="px-5">
          {Array(3)
            .fill()
            .map((item, index) => {
              return (
                <div key={index}>
                  <div className="d-flex flex-wrap mb-3">
                    <div className="col-12 d-block d-sm-none">
                      <p className={styles.forum_title}>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>

                    <div className="col-6 col-sm-4">
                      <Image
                        alt="forum_image"
                        src="/images/grey.png"
                        width={402}
                        height={204}
                      />
                    </div>

                    <div className="col-6 col-sm-8 ps-3">
                      <p
                        className={
                          styles.forum_title + " " + "d-none d-sm-block"
                        }
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>

                      <p className={styles.forum_content}>
                        Senectus et netus et malesuada. Nunc pulvinar sapien et
                        ligula ullamcorper malesuada proin. Neque convallis a
                        cras semper auctor.
                      </p>

                      <div className="d-none d-sm-block">
                        <div className="d-flex flex-row">
                          <div className={styles.avatar}>
                            <Image
                              alt="forum_image"
                              src="/images/expert/DMN.png"
                              width={35}
                              height={35}
                              objectFit="cover"
                            />
                          </div>

                          <div className="d-flex flex-column ps-3">
                            <p className={styles.forum_text}>Tên tác giả</p>
                            <p className={styles.forum_text}>
                              Lượt xem: 17 - Bình Luận: 5
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 d-block d-sm-none">
                      <div className="d-flex flex-row">
                        <div className={styles.avatar}>
                          <Image
                            alt="forum_image"
                            src="/images/expert/DMN.png"
                            width={35}
                            height={35}
                            objectFit="cover"
                          />
                        </div>

                        <div className="d-flex flex-column ps-3">
                          <p className={styles.forum_text}>Tên tác giả</p>
                          <p className={styles.forum_text}>
                            Lượt xem: 17 - Bình Luận: 5
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < 2 ? <div className="line"></div> : null}
                </div>
              );
            })}
        </div>
      </section>

      <section>
        <div className="heading">
          <p className="text">THẢO LUẬN IPO</p>
          <p className="col decor"></p>
        </div>

        <div className="px-5">
          {Array(3)
            .fill()
            .map((item, index) => {
              return (
                <div key={index}>
                  <div className="d-flex flex-wrap mb-3">
                    <div className="col-12 d-block d-sm-none">
                      <p className={styles.forum_title}>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>

                    <div className="col-6 col-sm-4">
                      <Image
                        alt="forum_image"
                        src="/images/grey.png"
                        width={402}
                        height={204}
                      />
                    </div>

                    <div className="col-6 col-sm-8 ps-3">
                      <p
                        className={
                          styles.forum_title + " " + "d-none d-sm-block"
                        }
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>

                      <p className={styles.forum_content}>
                        Senectus et netus et malesuada. Nunc pulvinar sapien et
                        ligula ullamcorper malesuada proin. Neque convallis a
                        cras semper auctor.
                      </p>

                      <div className="d-none d-sm-block">
                        <div className="d-flex flex-row">
                          <div className={styles.avatar}>
                            <Image
                              alt="forum_image"
                              src="/images/expert/DMN.png"
                              width={35}
                              height={35}
                              objectFit="cover"
                            />
                          </div>

                          <div className="d-flex flex-column ps-3">
                            <p className={styles.forum_text}>Tên tác giả</p>
                            <p className={styles.forum_text}>
                              Lượt xem: 17 - Bình Luận: 5
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 d-block d-sm-none">
                      <div className="d-flex flex-row">
                        <div className={styles.avatar}>
                          <Image
                            alt="forum_image"
                            src="/images/expert/DMN.png"
                            width={35}
                            height={35}
                            objectFit="cover"
                          />
                        </div>

                        <div className="d-flex flex-column ps-3">
                          <p className={styles.forum_text}>Tên tác giả</p>
                          <p className={styles.forum_text}>
                            Lượt xem: 17 - Bình Luận: 5
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < 2 ? <div className="line"></div> : null}
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}
