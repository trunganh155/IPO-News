import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "./Course.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../store/redux/NewsReducer/news.action";

export default function Course(props) {
  const limit = 300;
  const limit2 = 100;
  const router = useRouter();
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.NewsReducer);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div className={styles.course}>
      <div className="heading">
        <p className="text">khóa học</p>
        <p className="col decor"></p>
      </div>

      <section className="d-flex flex-row">
        <div className="col-8 pe-4" style={{ borderRight: "1px solid #000" }}>
          <div className="d-flex flex-wrap">
            <div className="col-12">
              <Image
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                }
                alt="khoa_hoc"
                src={news[0]?.picture}
                width={900}
                height={405}
              />
            </div>

            <div className="col-12">
              <p className={styles.course_title}>{news[0]?.title}</p>

              <p className={styles.course_content}>{news[0]?.mieu_ta_ngan}</p>
            </div>
          </div>
        </div>

        <div className="col-4 ps-4 pb-4">
          {news.slice(1, 3).map((item, index) => {
            return (
              <div className="d-flex flex-wrap" key={index}>
                <div className="col-12">
                  <Image
                    loader={({ src }) =>
                      `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                    }
                    alt="khoa_hoc"
                    src={item.picture}
                    width={430}
                    height={210}
                  />
                </div>

                <div className="col-12">
                  <p className={styles.course_title}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="d-flex flex-row pb-5">
        <div className="col-8 pe-4" style={{ borderRight: "1px solid #000" }}>
          {news.slice(3, 6).map((item, index) => {
            return (
              <div key={index}>
                <div className="line"></div>

                <div className="d-flex flex-row">
                  <div className="col-7 px-4">
                    <p className={styles.course_title}>{item.title}</p>

                    <p className={styles.course_content}>{item.mieu_ta_ngan}</p>
                  </div>

                  <div className="col-5">
                    <Image
                      loader={({ src }) =>
                        `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                      }
                      alt="khoa_hoc"
                      src={item.picture}
                      width={375}
                      height={260}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-4 ps-4">
          <div className={styles.scroll + " " + "d-flex flex-column"}>
            {news.map((item, index) => {
              return (
                <div className="d-flex flex-row" key={index}>
                  <div className="col-5">
                    <Image
                      loader={({ src }) =>
                        `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                      }
                      alt="khoa_hoc"
                      src={item.picture}
                      width={166}
                      height={110}
                    />
                  </div>

                  <div className="col-7 ps-2">
                    <p className={styles.course_title_sm}>{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <Image
          alt="khoa_hoc"
          src="/images/course/banner.png"
          width={1380}
          height={280}
        />
      </section>
    </div>
  );
}
