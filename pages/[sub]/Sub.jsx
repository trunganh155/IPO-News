import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../store/redux/NewsReducer/news.action";
import styles from "./Sub.module.scss";

export default function Sub(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.NewsReducer);
  const newsDetail = news.find(({ _id }) => _id === router.query.sub);

  const convertDateCreate = (str) => {
    const d = new Date(str);

    return `Ngày ${d.getDate()}/${d.getMonth()}/${d.getFullYear()} - ${d.getHours()}h${d.getMinutes()}`;
  };

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div className={styles.sub}>
      <section className={styles.sub_header + " " + "mb-4"}>
        <div className={styles.background + " " + "col-12"}>
          <Image
            loader={({ src }) =>
              `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
            }
            alt="sub_image"
            src={newsDetail?.picture}
            width={1459}
            height={752}
          />
        </div>

        <div className={styles.text + " " + "col-8"}>
          <p className={styles.sub_title_lg}>{newsDetail?.title}</p>

          <p className={styles.sub_content_lg}>{newsDetail?.mieu_ta_ngan}</p>
        </div>
      </section>

      <div className="line"></div>

      <section className="d-flex flex-row">
        <div className="col-9 d-flex flex-column pe-5">
          <div className="col-12 d-flex flex-column my-3">
            <div className="d-flex flex-row mb-2">
              <i className="fab fa-facebook "></i>
              <i className="fab fa-linkedin "></i>
              <i className="fab fa-instagram "></i>
              <i className="far fa-link "></i>
            </div>

            <p className={styles.timeCreate}>
              {convertDateCreate(newsDetail?.date_created)}
            </p>
          </div>

          <div className="col-12">
            <div
              dangerouslySetInnerHTML={{
                __html: newsDetail?.content,
              }}
            ></div>
          </div>

          <div className="col-12 d-flex flex-row justify-content-between">
            {Array(3)
              .fill()
              .map((item, index) => {
                return (
                  <div className="col-4 px-2" key={index}>
                    <Image
                      alt="sub_image"
                      src="/images/black.png"
                      width={374}
                      height={219}
                    />

                    <p className={styles.sub_title_sm}>
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="col-3">
          <div className="height_100">
            <Image
              alt="sub_image"
              src="/images/mechanism/banner.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <div className="heading">
        <p className="text">tin tức khác</p>
        <p className="col decor"></p>
      </div>

      <section className="d-flex flex-wrap">
        {Array(4)
          .fill()
          .map((item, index) => {
            return (
              <div
                className="col-12 col-sm-6 d-flex flex-row pe-4 mb-4"
                key={index}
              >
                <div className="col-6">
                  <Image
                    alt="sub_image"
                    src="/images/black.png"
                    width={422}
                    height={230}
                  />
                </div>

                <div className="col-6 px-3">
                  <div className="">
                    <p className={styles.sub_title_md}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>

                    <p className={styles.sub_content_md}>
                      Senectus et netus et malesuada. Nunc pulvinar sapien et
                      ligula ullamcorper malesuada proin
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
}
