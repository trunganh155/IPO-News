import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Gallery.module.scss";

export default function Gallery(props) {
  return (
    <div className={styles.gallery}>
      <div className="heading">
        <p className="text">gallery</p>
        <p className="col decor"></p>
      </div>

      <section className="d-flex flex-row">
        <div className="col-6 pe-2">
          <div class="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/Cd5Ry0E5S3w"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>

          <p className={styles.gallery_title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="col-6 ps-2">
          <div class="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/Cd5Ry0E5S3w"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>

          <p className={styles.gallery_title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>

      <section className="d-flex flex-row mt-4">
        <div className="col-6 d-flex flex-row pe-2">
          <div className="col-6 pe-1">
            <div class="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/Cd5Ry0E5S3w"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>

            <p className={styles.gallery_title_sm}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="col-6 ps-1">
            <div class="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/Cd5Ry0E5S3w"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>

            <p className={styles.gallery_title_sm}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="col-6 d-flex flex-row ps-2">
          <div className="col-6 pe-1">
            <div class="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/Cd5Ry0E5S3w"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>

            <p className={styles.gallery_title_sm}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="col-6 ps-1">
            <div class="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/Cd5Ry0E5S3w"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>

            <p className={styles.gallery_title_sm}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-4">
        <div className={styles.scroll + " " + "d-flex flex-row"}>
          {Array(10)
            .fill()
            .map((item, index) => {
              return (
                <div className="col-3">
                  <div class="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/Cd5Ry0E5S3w"
                      title="YouTube video"
                      allowfullscreen
                    ></iframe>
                  </div>

                  <p className={styles.gallery_title_sm}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              );
            })}
        </div>
      </section>

      <section className="mt-4">
        <Image
          alt="khoa_hoc"
          src="/images/course/banner.png"
          width={1358}
          height={260}
        />
      </section>
    </div>
  );
}
