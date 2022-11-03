import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../../components/comment/Comment";
import { getDetailUserAction } from "../../store/redux/AccountReducer/account.action";
import { getNews } from "../../store/redux/NewsReducer/news.action";
import styles from "./SubPartner.module.scss";

export default function SubPartner(props) {
  const limit = 40;
  const router = useRouter();
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.NewsReducer);
  // const { detailUser } = useSelector((state) => state.AccountReducer);
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
    dispatch(getDetailUserAction(Cookies.get("access_token")));
  }, [dispatch]);

  return (
    <div className={styles.subPartner}>
      <section className={styles.subPartner_header + " " + "mb-4"}>
        <div className={styles.background + " " + "col-12"}>
          <Image
            loader={({ src }) =>
              `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
            }
            alt="subPartner_image"
            src={newsDetail?.picture}
            width={1389}
            height={652}
          />
        </div>

        <div
          className={styles.text + " " + "col-12 col-lg-8 px-0 px-lg-5 py-2"}
        >
          <p className={styles.subPartner_title_lg}>{newsDetail?.title}</p>

          <p className={styles.subPartner_content_lg}>
            {newsDetail?.mieu_ta_ngan}
          </p>
        </div>
      </section>

      <div className="line"></div>

      <section className="d-flex flex-column-reverse flex-sm-row">
        <div className="col-12 col-sm-9 pe-0 pe-sm-5">
          <div className="col-12 d-flex flex-column my-3">
            <div className={styles.link + " " + "d-flex flex-row mb-2"}>
              <i className="fab fa-facebook "></i>
              <i className="fab fa-linkedin "></i>
              <i className="fab fa-instagram "></i>
              <i className="far fa-link "></i>
              <i className="far fa-bookmark"></i>
            </div>

            <p className={styles.timeCreate}>
              {convertDateCreate(newsDetail?.date_created)}
            </p>
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: newsDetail?.content,
            }}
          ></div>

          <div
            className={styles.extend + " " + "col-12 d-flex flex-column mt-5"}
          >
            <div className="d-flex flex-row justify-content-between">
              <p className={styles.amount}>
                Trọng khang và 22 người khác đã thích
              </p>

              <p className={styles.amount}>4 bình luận</p>
            </div>

            <div
              className={
                styles.interactive +
                " " +
                "col-12 col-sm-6 d-flex flex-row justify-content-between align-items-end"
              }
            >
              <div className="d-flex flex-row">
                <i class="far fa-heart"></i>
                Thích
              </div>

              <div className="d-flex flex-row">
                <i class="far fa-comment-alt"></i>
                Bình luận
              </div>

              <div className="d-flex flex-row">
                <i class="far fa-share"></i>
                Chia sẻ
              </div>

              <div className="d-flex flex-row">
                <i class="fab fa-facebook"></i>
                Chia sẻ lên Facebook
              </div>
            </div>

            <div
              className="col-12 col-sm-8 d-flex flex-row px-3 py-3"
              style={{ gap: "10px" }}
            >
              <div>
                <div className={styles.avatar}>
                  <Image
                    alt="forum_image"
                    src="/images/expert/DMN.png"
                    width={35}
                    height={35}
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="col-10 col-sm-12 d-flex flex-column">
                <div className="d-flex flex-column">
                  <p className={styles.account_cmt}>Trọng Khang</p>
                  <p className={styles.time_cmt}>Thứ 6, ngày 28/10/2022</p>
                </div>

                <div>
                  <Comment />
                </div>

                <div className="ps-4">
                  <Comment />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-10 col-sm-3 d-flex flex-column mx-auto">
          <div>
            <Image
              alt="subPartner_image"
              src="/images/grey.png"
              width={356}
              height={385}
            />
          </div>

          <div className="px-3">
            <div className={styles.box + " " + "d-flex flex-column"}>
              <p className={styles.user}>tên tài khoản</p>

              <div className="d-flex flex-row">
                <div
                  className="d-flex flex-column px-2 text-center"
                  style={{ borderRight: "1px solid #000" }}
                >
                  <p className={styles.label}>Ngày tham gia</p>
                  <p className={styles.joinDate}>30/08</p>
                  <p className={styles.joinDate}>2022</p>
                </div>

                <div className="d-flex flex-column justify-content-center px-2">
                  <p className={styles.label_lg}>
                    Số lượng bài đăng: <b>7</b>{" "}
                  </p>
                  <p className={styles.label_lg}>
                    Lượt like: <b>23</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
