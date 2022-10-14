import React from "react";
import styles from "./Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "../../components/layout/mainLayout";
import {
  HomeMedia,
  HomeNews,
  homePartner,
  HomeTrending,
  HomeWork,
} from "../../utils/DataDemo/HomeData";
import { useRouter } from "next/router";
import { newsEventData } from "../../utils/DataDemo/NewsEvent";
import { removeAccents } from "../../utils/Function";
import PopupVideo from "../../components/popupVideo/PopupVideo";

function HomePage(props) {
  return (
    <MainLayout>
      <div className={styles.home_page}>
        <div
          className={styles.banner}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className={styles.banner_image}>
            <Image
              alt="Banner"
              src="/images/Home/Banner/banner.png"
              height={810}
              width={1440}
            />
          </div>
          <div className={styles.group_button_banner}>
            <button className={styles.button_banner}>Chi tiết</button>
            <button className={styles.button_banner}>Mua vé ngay</button>
          </div>
        </div>
        <div className={styles.banner_logo + " " + "row"}>
          <di
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className={
              styles.logo_left +
              " " +
              "col-6 d-flex justify-content-end align-items-center"
            }
          >
            <Image
              alt="logo_left"
              src="/images/Home/Banner/logo_left.png"
              height={170}
              width={620}
            />
          </di>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className={
              styles.logo_right +
              " " +
              "col-6 d-flex justify-content-start align-items-center"
            }
          >
            <Image
              alt="logo_left"
              src="/images/Home/Banner/logo_right.png"
              height={170}
              width={620}
            />
          </div>
        </div>
        <div className={styles.home_work}>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className={styles.header_text}
          >
            HOẠT ĐỘNG
          </div>
          <div className={styles.group_work + " " + "row"}>
            {HomeWork.map((item, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className={
                    styles.work +
                    " " +
                    "d-flex align-items-center col-7 col-md-4"
                  }
                  key={index}
                >
                  <div className={styles.work_image}>
                    <Image
                      alt="work"
                      src={item.picture}
                      height={300}
                      width={410}
                    />
                    <div className={styles.bg_work_image}></div>
                  </div>
                  <div className={styles.work_title}>{item.title}</div>

                  <Link href={item.url}>
                    <button className={styles.button_work}>Chi tiết</button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.home_trending}>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className={styles.header_text}
          >
            NỔI BẬT
          </div>
          <div className="row justify-content-evenly">
            {HomeTrending.map((item, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className={styles.trending + " " + "col-12 col-lg-6"}
                  key={index}
                >
                  <div
                    className={
                      styles.trending_image +
                      " " +
                      "d-flex justify-content-center"
                    }
                  >
                    <Image
                      alt="trending"
                      src={item.picture}
                      height={335}
                      width={585}
                    />
                  </div>
                  <div className={styles.trending_type}>{item.type}</div>
                  <div className={styles.trending_title}>{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.home_new}>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className={styles.header_text}
          >
            TIN TỨC SỰ KIỆN
          </div>
          <div className="row justify-content-evenly">
            {HomeNews.map((item, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className={styles.new + " " + "col-8 col-lg-4"}
                  key={index}
                >
                  <div
                    style={{
                      background: "rgba(32, 59, 96, 0.4)",
                      paddingBottom: "10px",
                    }}
                  >
                    <div
                      className={
                        styles.new_image + " " + "d-flex justify-content-center"
                      }
                    >
                      <Image
                        alt="new"
                        src={item.picture}
                        height={255}
                        width={410}
                      />
                    </div>
                    <div className={styles.box_content}>
                      <div className={styles.new_type}>{item.type}</div>
                      <div className={styles.new_time}>{item.time}</div>
                    </div>
                    <div className={styles.new_title}>{item.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="d-flex justify-content-center"
          >
            <button className={styles.btn_new}>XEM THÊM</button>
          </div>
        </div>
        <div className={styles.home_media}>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className={styles.header_text}
          >
            HÌNH ẢNH, VIDEO
          </div>
          <div className="row justify-content-evenly">
            {HomeMedia.map((item, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className={styles.media + " " + "col-5 col-md-3"}
                  key={index}
                >
                  <div className={styles.media_image}>
                    <Image
                      alt="media"
                      src={item.picture}
                      height={280}
                      width={300}
                    />
                  </div>
                  {item.type === "Video" && (
                    <div
                      className={styles.play}
                      // data-bs-toggle="modal"
                      // data-bs-target="#exampleModal12"
                      style={{
                        display: "block",
                      }}
                    >
                      <i className="fas fa-play"></i>
                    </div>
                  )}
                  <div className={styles.media_title}>{item.title}</div>
                </div>
              );
            })}
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="d-flex justify-content-center"
          >
            <button className={styles.btn_media}>XEM THÊM</button>
          </div>
        </div>
        <div className={styles.home_partner}>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className={styles.header_text}
          >
            TÀI TRỢ
          </div>
          <div className="row justify-content-around">
            {homePartner.map((item, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className={styles.partner + " " + "col-4"}
                  key={index}
                >
                  <Image
                    alt="partner"
                    src={item.picture}
                    height={160}
                    width={350}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default HomePage;
