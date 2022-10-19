import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../store/redux/NewsReducer/news.action";
import { convertDate, removeAccents } from "../../utils/Function";
import { post } from "../../utils/PostDemo/Post";
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
            width={1429}
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

                    <p className={styles.sub_title}>
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="col-3">
          <Image
            alt="sub_image"
            src="/images/mechanism/banner.png"
            width={355}
            height={854}
          />
        </div>
      </section>

      <div className="heading">
        <p className="text">tin tức khác</p>
        <p className="col decor"></p>
      </div>

      <section className="d-flex flex-column">
        {Array(3)
          .fill()
          .map((item, index) => {
            return (
              <div className="col-12 d-flex flex-row mb-3" key={index}>
                <div className="col-9 pe-5">
                  <div className="px-5">
                    <p className={styles.sub_title_sm}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit cum error assumenda quo.
                    </p>

                    <p className={styles.sub_content_sm}>
                      Senectus et netus et malesuada. Nunc pulvinar sapien et
                      ligula ullamcorper malesuada proin. Neque convallis a cras
                      semper auctor. Libero id faucibus nisl tincidunt eget. Leo
                      a diam sollicitudin tempor id. A lacus vestibulum sed arcu
                      non odio euismod lacinia. In tellus integer feugiat
                      scelerisque.
                    </p>
                  </div>
                </div>

                <div className="col-3">
                  <Image
                    alt="sub_image"
                    src="/images/black.png"
                    width={344}
                    height={170}
                  />
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
}
