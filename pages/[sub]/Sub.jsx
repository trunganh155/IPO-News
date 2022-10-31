import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../store/redux/NewsReducer/news.action";
import { limitWord } from "../../utils/Function";
import styles from "./Sub.module.scss";

export default function Sub(props) {
  const limit = 40;
  const router = useRouter();
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.NewsReducer);
  const newsDetail = news.find(({ _id }) => _id === router.query.sub);

  const convertDateCreate = (str) => {
    const d = new Date(str);

    return (
      `Ngày ${d.getDate()}/${d.getMonth()}/${d.getFullYear()} - ${d.getHours()}h` +
      (d.getMinutes() < 10 ? `0${d.getMinutes()}` : `${d.getMinutes()}`)
    );
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
            width={1389}
            height={652}
          />
        </div>

        <div
          className={styles.text + " " + "col-12 col-lg-8 px-0 px-lg-5 py-2"}
        >
          <p className={styles.sub_title_lg}>{newsDetail?.title}</p>

          <p className={styles.sub_content_lg}>{newsDetail?.mieu_ta_ngan}</p>
        </div>
      </section>

      <div className="line"></div>

      <section className="d-flex flex-row">
        <div className="col-12 col-sm-9 d-flex flex-column pe-2 pe-sm-5 ps-2 px-sm-0">
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
            {news.slice(2, 5).map((item, index) => {
              return (
                <div className="col-4 px-2" key={index}>
                  <Image
                    loader={({ src }) =>
                      `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                    }
                    alt="sub_image"
                    src={item.picture}
                    width={315}
                    height={169}
                  />

                  <p className={styles.sub_title_sm}>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-3 d-none d-sm-block">
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
        {news.slice(1, 5).map((item, index) => {
          return (
            <div
              className="col-12 col-sm-6 d-flex flex-wrap ps-0 ps-sm-3 pe-0 pe-sm-4 mb-4 "
              key={index}
            >
              <div className="col-12 d-block d-sm-none">
                <p className={styles.sub_title_md}>{item.title}</p>
              </div>

              <div className="col-6">
                <Image
                  loader={({ src }) =>
                    `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                  }
                  alt="sub_image"
                  src={item.picture}
                  width={312}
                  height={158}
                />
              </div>

              <div className="col-6 px-3">
                <div>
                  <p
                    className={styles.sub_title_md + " " + "d-none d-sm-block"}
                  >
                    {item.title}
                  </p>

                  <p className={styles.sub_content_md}>
                    {limitWord(item.mieu_ta_ngan, limit)}
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
