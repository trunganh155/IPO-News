import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExpert } from "../../../store/redux/ExpertReducer/expert.action";
import { getNews } from "../../../store/redux/NewsReducer/news.action";
import styles from "./Portrait.module.scss";

export default function Portrait(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { expert } = useSelector((state) => state.ExpertReducer);
  const { news } = useSelector((state) => state.NewsReducer);

  useEffect(() => {
    dispatch(getExpert());
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div className={styles.expert}>
      <div className="d-flex flex-wrap align-items-center">
        <div className="col-12 col-lg-4 d-flex mx-auto h-100">
          <div className="col-12 col-sm-6 col-lg-12">
            <Image
              loader={({ src }) =>
                `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
              }
              alt="chuyen_gia"
              src={expert[2]?.image}
              width={462}
              height={666}
            />
          </div>

          <div className="col-6 d-none d-sm-block d-lg-none text-dark ps-3">
            <p className={styles.expert_name}>{expert[2]?.name}</p>
            <p className={styles.expert_company}>{expert[2]?.company}</p>

            <p className={styles.expert_content}>
              <section
                dangerouslySetInnerHTML={{ __html: expert[2]?.description }}
              />
            </p>
          </div>
        </div>

        <div className="col-12 col-lg-8 h-100">
          <div className={styles.expert_black}>
            <div className="d-block d-sm-none d-lg-block">
              <p className={styles.expert_name}>{expert[2]?.name}</p>
              <p className={styles.expert_company}>{expert[2]?.company}</p>

              <p className={styles.expert_content}>
                <section
                  dangerouslySetInnerHTML={{ __html: expert[2]?.description }}
                />
              </p>
            </div>

            <div className={styles.scroll + " " + "d-flex flex-row w-100"}>
              {news.map((item, index) => {
                return (
                  <div
                    className="col-6 col-sm-4 col-md-3 px-2 py-2"
                    key={index}
                  >
                    <Image
                      loader={({ src }) =>
                        `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                      }
                      alt="chuyen_gia"
                      src={item.picture}
                      width={180}
                      height={113}
                    />

                    <p className={styles.expert_title_sm}>{item.title}</p>
                  </div>
                );
              })}
            </div>

            <div className={styles.scroll + " " + "d-flex flex-row w-100 mt-3"}>
              {news.map((item, index) => {
                return (
                  <div
                    className="col-6 col-sm-4 col-md-3 px-2 py-2"
                    key={index}
                  >
                    <Image
                      loader={({ src }) =>
                        `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                      }
                      alt="chuyen_gia"
                      src={item.picture}
                      width={180}
                      height={113}
                    />

                    <p className={styles.expert_title_sm}>{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
