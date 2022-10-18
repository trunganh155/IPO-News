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
      <div className="heading">
        <p className="text">diễn đàn tạp chí ipo</p>
        <p className="col decor"></p>
      </div>

      <section>
        {Array(3)
          .fill()
          .map((item, index) => {
            return (
              <div>
                <div className="d-flex flex-row mb-4">
                  <div className="col-4">
                    <Image
                      alt="forum_image"
                      src="/images/grey.png"
                      width={445}
                      height={271}
                    />
                  </div>

                  <div className="col-8 ps-3">
                    <p className={styles.forum_title}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    <p className={styles.forum_content}>
                      Senectus et netus et malesuada. Nunc pulvinar sapien et
                      ligula ullamcorper malesuada proin. Neque convallis a cras
                      semper auctor.
                    </p>

                    <div className="d-flex flex-row">
                      <div className={styles.avatar}>
                        <Image
                          alt="forum_image"
                          src="/images/grey.png"
                          width={35}
                          height={35}
                          objectFit="cover"
                        />
                      </div>

                      <div className="d-flex flex-column ps-3">
                        <p className={styles.forum_text}>Tên tác giả</p>
                        <p className={styles.forum_text}>
                          Tên tác giả Lượt xem: 17 - Bình Luận: 5
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="line"></div>
              </div>
            );
          })}
      </section>
    </div>
  );
}
