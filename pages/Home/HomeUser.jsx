import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../components/layout/mainLayout";
import { getDetailUserAction } from "../../store/redux/AccountReducer/account.action";
import { getExpert } from "../../store/redux/ExpertReducer/expert.action";
import { getGallery } from "../../store/redux/GalleryReducer/gallery.action";
import { getNews } from "../../store/redux/NewsReducer/news.action";
import { removeAccents } from "../../utils/Function";
import styles from "./HomeUser.module.scss";
import HomeUserView2 from "./HomeUserView2";

const LISTTAGNEWS = [
  {
    id: 1,
    name: "Bài đăng",
  },
  {
    id: 2,
    name: "Bài viết đã lưu",
  },
  {
    id: 3,
    name: "Tài liệu đã tải",
  },
];

function HomeUser(props) {
  const { data: session } = useSession();
  const [isTagNews, setIsTagNews] = useState(1);
  const [isList, setIsList] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  const expert = useSelector((state) => state.ExpertReducer.expert);
  const news = useSelector((state) => state.NewsReducer.news);
  const gallery = useSelector((state) => state.GalleryReducer.gallery);
  const { detailUser } = useSelector((state) => state.AccountReducer);

  useEffect(() => {
    dispatch(getExpert());
    dispatch(getNews());
    dispatch(getGallery());
    dispatch(getDetailUserAction());
  }, [dispatch]);

  return (
    <MainLayout>
      <div className={styles.item_list + " " + "gap-2"}>
        <div
          onClick={() => setIsList(true)}
          style={{
            color: isList ? "rgb(201 137 0)" : "#4d4d4d",
            cursor: "pointer",
          }}
        >
          <i className="fas fa-list"></i>
        </div>
        <div
          onClick={() => setIsList(false)}
          style={{
            color: isList ? "#4d4d4d" : "rgb(201 137 0)",
            cursor: "pointer",
          }}
        >
          <i className="fas fa-th"></i>
        </div>
      </div>
      {isList ? (
        <div className={styles.homeuser}>
          <div
            className={
              styles.box_profile +
              " " +
              `${isList ? "row" : "row col-5 justify-content-center p-0"}`
            }
            style={{ borderRight: isList ? "" : "1px solid black" }}
          >
            <div
              className={
                styles.avatar +
                " " +
                `${isList ? "col-auto pe-2" : "col-auto p-0"}`
              }
            >
              {session ? (
                <Image
                  loader={() => `${session?.user.image}`}
                  src={session?.user.image}
                  height={305}
                  width={305}
                  alt="avatar"
                />
              ) : (
                <Image
                  loader={({ src }) =>
                    `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                  }
                  src={expert[0]?.image}
                  height={305}
                  width={305}
                  alt="avatar"
                />
              )}
            </div>
            <div
              className={
                styles.profile_detail +
                " " +
                `${
                  isList
                    ? "col-xl-7 col-lg-6 col-auto py-3 px-4"
                    : "col-12 text-center"
                }`
              }
            >
              <h3>
                Thông tin thành viên:{" "}
                <span>{detailUser.name || session?.user.name}</span>
              </h3>
              <h3>
                Tên TK: <span>{session?.user.email || "TRONGKHANG97"}</span>
              </h3>
              <h3>
                Cấp thành viên:<span>VIP1</span>
              </h3>
              <h3>
                Ngày tham gia: <span>01/11/2022</span>
              </h3>
              <h3>
                Số lượng bài viết: <span>10</span>
              </h3>
              <h3>
                Lượt like: <span>20</span>
              </h3>
            </div>
          </div>
          <hr className={`${isList ? "m-0" : "d-none"}`} />
          <div
            className={styles.box_content + " " + `${isList ? "" : "col-7"}`}
          >
            <div className={styles.tag_news}>
              {LISTTAGNEWS.map((item, index) => {
                return (
                  <span
                    className={isTagNews === item.id ? styles.active : ""}
                    onClick={() => setIsTagNews(item.id)}
                    key={index}
                  >
                    {item.name}
                  </span>
                );
              })}
            </div>
            <hr className="m-0" />
            <div className={styles.list_news}>
              {news.map((item, index) => {
                return (
                  <div className={styles.item_news + " " + "row"} key={index}>
                    <h3
                      className="px-3 d-block d-lg-none"
                      onClick={() =>
                        router.push(`/${removeAccents(item._id || "")}`)
                      }
                    >
                      {item.title}
                    </h3>
                    <div
                      className={
                        styles.image_new +
                        " " +
                        `${isList ? "col-6 col-lg-auto" : "col-4"}`
                      }
                    >
                      <Image
                        loader={({ src }) =>
                          `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                        }
                        src={item.picture}
                        height={isList ? 163 : 130}
                        width={isList ? 305 : 195}
                        alt={item.title}
                      />
                    </div>
                    <div
                      className={
                        styles.content_new +
                        " " +
                        `${isList ? "col-xl-7 col-6" : "col-8"}`
                      }
                    >
                      <h3
                        className="d-lg-block d-none"
                        onClick={() =>
                          router.push(`/${removeAccents(item._id || "")}`)
                        }
                      >
                        {item.title}
                      </h3>
                      <p>{item.mieu_ta_ngan}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <HomeUserView2 />
      )}
    </MainLayout>
  );
}

export default HomeUser;
