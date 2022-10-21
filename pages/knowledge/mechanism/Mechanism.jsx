import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../store/redux/NewsReducer/news.action";
import { removeAccents } from "../../../utils/Function";
import styles from "./Mechanism.module.scss";

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
          <p
            className={styles.mechanism_title}
            onClick={() => router.push(`/${removeAccents(news[0]?._id || "")}`)}
          >
            {news[0]?.title}
          </p>

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
        <div className={styles.bdRight + " " + "col-12 col-sm-9 col-lg-10"}>
          {news.slice(1, 4).map((item, index) => (
            <div className="d-flex flex-row mb-3" key={index}>
              <div className="col-5 col-sm-4">
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

              <div className="col-7 col-sm-8 ps-3 ps-sm-4 pe-0 pe-sm-4">
                <a
                  className={styles.mechanism_title}
                  onClick={() =>
                    router.push(`/${removeAccents(item?._id || "")}`)
                  }
                >
                  {item?.title}
                </a>

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

        <div className="col col-sm-3 col-lg-2 ps-3 d-none d-sm-block">
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
          className="col-12 col-sm-9 col-lg-10 d-flex flex-wrap justify-content-around px-2 px-lg-4 pt-5 pt-sm-3 py-3 py-lg-4 "
          style={{ backgroundColor: "#606060" }}
        >
          {news.slice(0, 3).map((item, index) => (
            <div
              className="col-12 col-sm-4 px-2 px-lg-4 mb-3 mb-sm-0"
              key={index}
            >
              <Image
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                }
                alt="co_che_von"
                src={item.picture}
                width={353}
                height={241}
              />
              <p
                className={styles.mechanism_title_white}
                onClick={() =>
                  router.push(`/${removeAccents(item?._id || "")}`)
                }
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="col col-sm-3 col-lg-2 d-none d-sm-block ps-3">
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
