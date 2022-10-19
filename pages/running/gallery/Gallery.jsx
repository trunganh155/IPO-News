import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./Gallery.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getGallery } from "../../../store/redux/GalleryReducer/gallery.action";

export default function Gallery(props) {
  const limit = 300;
  const limit2 = 100;
  const router = useRouter();
  const dispatch = useDispatch();
  const { gallery } = useSelector((state) => state.GalleryReducer);

  useEffect(() => {
    dispatch(getGallery());
  }, [dispatch]);

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
              src={gallery[0]?.url}
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>

          <p className={styles.gallery_title}>{gallery[0]?.title}</p>
        </div>

        <div className="col-6 ps-2">
          <div class="ratio ratio-16x9">
            <iframe
              src={gallery[1]?.url}
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>

          <p className={styles.gallery_title}>{gallery[1]?.title}</p>
        </div>
      </section>

      <section className="d-flex flex-row mt-4">
        <div className="col-6 d-flex flex-row pe-2">
          <div className="col-6 pe-1">
            <div class="ratio ratio-16x9">
              <iframe
                src={gallery[0]?.url}
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>

            <p className={styles.gallery_title_sm}>{gallery[0]?.title}</p>
          </div>

          <div className="col-6 ps-1">
            <div class="ratio ratio-16x9">
              <iframe
                src={gallery[1]?.url}
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>

            <p className={styles.gallery_title_sm}>{gallery[1]?.title}</p>
          </div>
        </div>

        <div className="col-6 d-flex flex-row ps-2">
          <div className="col-6 pe-1">
            <div class="ratio ratio-16x9">
              <iframe
                src={gallery[2]?.url}
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>

            <p className={styles.gallery_title_sm}>{gallery[2]?.title}</p>
          </div>

          <div className="col-6 ps-1">
            <div class="ratio ratio-16x9">
              <iframe
                src={gallery[3]?.url}
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>

            <p className={styles.gallery_title_sm}>{gallery[3]?.title}</p>
          </div>
        </div>
      </section>

      <section className="mt-4">
        <div className={styles.scroll + " " + "d-flex flex-row"}>
          {gallery.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div class="ratio ratio-16x9">
                  <iframe
                    src={item.url}
                    title="YouTube video"
                    allowfullscreen
                  ></iframe>
                </div>

                <p className={styles.gallery_title_sm}>{item.title}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-4">
        <Image
          alt="khoa_hoc"
          src="/images/course/banner.png"
          width={1378}
          height={270}
        />
      </section>
    </div>
  );
}
