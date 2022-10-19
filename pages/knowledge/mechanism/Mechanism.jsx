import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "./Mechanism.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../store/redux/NewsReducer/news.action";

export default function Mechanism(props) {
  const limit = 300;
  const limit2 = 100;
  const router = useRouter();
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.NewsReducer);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div className={styles.mechanism}>
      <div className="heading">
        <p className="text">cơ chế vốn</p>
        <p className="col decor"></p>
      </div>

      <section className="d-flex flex-column-reverse flex-sm-row align-items-center">
        <div className="col-12 col-sm-5">
          <p className={styles.mechanism_title}>{news[0]?.title}</p>

          <p className={styles.mechanism_content}>
            <section
              dangerouslySetInnerHTML={{
                __html: news[0]?.mieu_ta_ngan.slice(0, limit),
              }}
            />
          </p>
        </div>

        <div className="col-12 col-sm-7 ps-0 ps-sm-4">
          <Image
            loader={({ src }) =>
              `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
            }
            alt="co_che_von"
            src={news[0]?.picture}
            width={781}
            height={498}
          />
        </div>
      </section>
      <hr />

      <section className="d-flex flex-row mb-4">
        <div className="col-10" style={{ borderRight: "1px solid #000" }}>
          {news.slice(1, 4).map((item, index) => (
            <div className="d-flex flex-row mb-3" key={index}>
              <div className="col-4">
                <Image
                  loader={({ src }) =>
                    `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                  }
                  alt="co_che_von"
                  src={item.picture}
                  width={390}
                  height={190}
                />
              </div>

              <div className="col-8 px-4">
                <p className={styles.mechanism_title}>{item?.title}</p>

                <p className={styles.mechanism_content}>
                  <section
                    dangerouslySetInnerHTML={{
                      __html: item?.content.slice(0, limit),
                    }}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="col-2 ps-3">
          <Image
            alt="co_che_von"
            src="/images/mechanism/banner.png"
            width={244}
            height={713}
          />
        </div>
      </section>

      <section className="d-flex flex-row">
        <div
          className="col-10 d-flex flex-row justify-content-around px-3 py-4"
          style={{ backgroundColor: "#606060" }}
        >
          {news.slice(4, 7).map((item, index) => (
            <div className="col-3" key={index}>
              <Image
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                }
                alt="co_che_von"
                src={item.picture}
                width={283}
                height={221}
              />
              <p className={styles.mechanism_title_white}>
                <section
                  dangerouslySetInnerHTML={{
                    __html: item?.content.slice(0, limit2),
                  }}
                />
              </p>
            </div>
          ))}
        </div>

        <div className="col-2 ps-3">
          <Image
            alt="co_che_von"
            src="/images/mechanism/banner.png"
            width={244}
            height={414}
          />
        </div>
      </section>
    </div>
  );
}
