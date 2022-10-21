import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./Gallery.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getGallery } from "../../../store/redux/GalleryReducer/gallery.action";

export default function Gallery(props) {
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

      <section className="d-flex flex-wrap">
        <div className="col-12 col-md-6 pe-0 pe-md-2">
          <div class="ratio ratio-16x9">
            <iframe
              src={gallery[0]?.url}
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>

          <p className={styles.gallery_title}>{gallery[0]?.title}</p>
        </div>

        <div className="col-12 col-md-6 ps-0 ps-md-2">
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

      <section className="d-flex flex-wrap mt-2 mt-md-4">
        <div className="col-12 col-md-6 d-flex flex-wrap pe-0 pe-md-2">
          <div className="col-12 col-sm-6 pe-0 pe-sm-1">
            <div class="ratio ratio-16x9">
              <iframe
                src={gallery[0]?.url}
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>

            <p className={styles.gallery_title_sm}>{gallery[0]?.title}</p>
          </div>

          <div className="col-12 col-sm-6 ps-0 ps-sm-1">
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

        <div className="col-12 col-md-6 d-flex flex-wrap ps-0 ps-md-2">
          <div className="col-12 col-sm-6 pe-0 pe-sm-1">
            <div class="ratio ratio-16x9">
              <iframe
                src={gallery[2]?.url}
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>

            <p className={styles.gallery_title_sm}>{gallery[2]?.title}</p>
          </div>

          <div className="col-12 col-sm-6 ps-0 ps-sm-1">
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

      <section className="mt-2 mt-md-4">
        <div className={styles.scroll + " " + "d-flex flex-row"}>
          {gallery.map((item, index) => {
            return (
              <div className="col-6 col-sm-4 col-md-3 px-2 py-2" key={index}>
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

      <section className="mt-2 mt-md-4">
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
