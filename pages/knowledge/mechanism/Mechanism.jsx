import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../store/redux/NewsReducer/news.action";
import { removeAccents } from "../../../utils/Function";
import styles from "./Mechanism.module.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Mechanism(props) {
  const limit = 300;
  const router = useRouter();
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.NewsReducer);

  const itemsPerPage = 6;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    arrows: true,
    infinite: true,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(news.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(news.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, news]);

  function Items({ currentItems }) {
    return (
      <div style={{ marginBottom: "80px" }}>
        {currentItems?.map((item, index) => (
          <div className="d-flex flex-row mb-3" key={index}>
            <div className="col-5 col-sm-4">
              <Image
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                }
                alt="co_che_von"
                src={item.picture}
                width={490}
                height={290}
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
    );
  }

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % news.length;

    setItemOffset(newOffset);
  };

  return (
    <div className={styles.mechanism}>
      <div className="heading">
        <p className="text">cơ chế vốn</p>
        <p className="col decor"></p>
      </div>

      <section className={styles.mechanism_header + " " + "mb-4"}>
        <div className={styles.background + " " + "col-12"}>
          <Image
            loader={({ src }) =>
              `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
            }
            alt="co_che_von"
            src={news[0]?.picture}
            width={1850}
            height={1150}
          />
        </div>

        <div
          className={styles.text + " " + "col-12 d-flex flex-wrap px-4 py-3"}
        >
          <div className="col-7">
            <p className={styles.mechanism_title_lg}>{news[0]?.title}</p>
          </div>

          <div className="col-12">
            <p className={styles.mechanism_content_lg}>
              {news[0]?.mieu_ta_ngan}
            </p>
          </div>
        </div>
      </section>

      {/* <section className="d-flex flex-column-reverse flex-sm-row align-items-center">
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
      </section> */}
      <hr />

      <section className="d-flex flex-row mb-4">
        <div className={styles.bdRight + " " + "col-12 col-sm-9 col-lg-10"}>
          {/* {news.slice(1, 7).map((item, index) => (
            <div className="d-flex flex-row mb-3" key={index}>
              <div className="col-5 col-sm-4">
                <Image
                  loader={({ src }) =>
                    `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                  }
                  alt="co_che_von"
                  src={item.picture}
                  width={490}
                  height={290}
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
          ))} */}

          <div className="position-relative h-100">
            <Items currentItems={currentItems} />

            <ReactPaginate
              breakLabel="..."
              nextLabel=""
              previousLabel=""
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              pageCount={pageCount}
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName="page-num"
              previousLinkClassName="page-num"
              nextLinkClassName="page-num"
              activeLinkClassName="active"
            />
          </div>
        </div>

        <div
          className="col col-sm-3 col-lg-2 ps-3  d-flex flex-column justify-content-between"
          style={{ gap: "20px" }}
        >
          <div className="height_50">
            <Image
              alt="co_che_von"
              src="/images/mechanism/banner.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="height_50">
            <Image
              alt="co_che_von"
              src="/images/mechanism/banner.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <section className="d-flex flex-row">
        <div
          className="col-12 col-sm-9 col-lg-10 d-flex flex-wrap justify-content-around px-2 px-lg-4 pt-5 pt-sm-3 py-3 py-lg-4 h-100"
          style={{ backgroundColor: "#606060" }}
        >
          <div className="heading_white px-2 px-lg-4">
            <p className="text">quỹ đầu tư</p>
            <p className="col decor"></p>
          </div>

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

        {/* <div
          className="col-12 col-sm-9 col-lg-10"
          style={{ backgroundColor: "#606060" }}
        >
          <Slider {...settings} className={styles.mechanism_slider}>
            {news.slice(0, 5).map((item, index) => (
              <div className="col px-3" key={index}>
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
          </Slider>
        </div> */}

        <div className="col col-sm-3 col-lg-2 d-none d-sm-block ps-3">
          {/* <Image
            alt="co_che_von"
            src="/images/mechanism/banner.png"
            width={244}
            height={504}
          /> */}

          <div className="height_100">
            <Image
              alt="co_che_von"
              src="/images/mechanism/banner.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
