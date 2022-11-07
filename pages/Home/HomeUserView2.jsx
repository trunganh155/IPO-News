import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExpert } from "../../store/redux/ExpertReducer/expert.action";
import { getGallery } from "../../store/redux/GalleryReducer/gallery.action";
import { getNews } from "../../store/redux/NewsReducer/news.action";
import { removeAccents } from "../../utils/Function";
import styles from "./HomeUser.module.scss";

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

function HomeUserView2(props) {
  const { data: session } = useSession();
  const [isTagNews, setIsTagNews] = useState(1);
  const [isList, setIsList] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  const expert = useSelector((state) => state.ExpertReducer.expert);
  const news = useSelector((state) => state.NewsReducer.news);
  const gallery = useSelector((state) => state.GalleryReducer.gallery);

  useEffect(() => {
    dispatch(getExpert());
    dispatch(getNews());
    dispatch(getGallery());
  }, [dispatch]);

  return (
    <div className={styles.homeuser_view2 + " " + "row"}>
      <div className={styles.box_profile + " " + "p-0 pe-2"}>
        <div className={styles.avatar + " " + "col-auto p-0"}>
          <Image
            loader={({ src }) =>
              `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
            }
            src={expert[0]?.image}
            height={305}
            width={305}
            alt={expert[0]?.name}
          />
        </div>
        <div className={styles.profile_detail + " " + "col-12 text-center"}>
          <h3>
            Thông tin thành viên:{" "}
            <span>{session.user.name || "VÕ TRỌNG KHANG"}</span>
          </h3>
          <h3>
            Tên TK: <span>{session.user.email || TRONGKHANG97}</span>
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
      <div className={styles.box_content + " " + "col-7"}>
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
                  className="px-3 pb-2 d-block d-lg-none"
                  onClick={() =>
                    router.push(`/${removeAccents(item._id || "")}`)
                  }
                >
                  {item.title}
                </h3>
                <div className={styles.image_new + " " + "col-auto"}>
                  <Image
                    loader={({ src }) =>
                      `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                    }
                    src={item.picture}
                    height={130}
                    width={195}
                    alt={item.title}
                  />
                </div>
                <div
                  className={
                    styles.content_new + " " + "col-6 col-xl-7 col-xxl-8"
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
  );
}

export default HomeUserView2;
