import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../store/redux/NewsReducer/news.action";
import { removeAccents } from "../../../utils/Function";
import styles from "./Course.module.scss";
import ReactPaginate from "react-paginate";

export default function Course(props) {
  const itemsPerPage = 6;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const router = useRouter();
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.NewsReducer);

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
      <div className="d-flex flex-wrap">
        {currentItems?.map((item, index) => (
          <div className="col-12 col-sm-6 d-flex flex-wrap pe-5" key={index}>
            <div className="col-6">
              <Image
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                }
                alt="khoa_hoc"
                src={item.picture}
                width={430}
                height={250}
              />
            </div>
            <div className="col-6 px-3">
              <p
                className={styles.course_title}
                onClick={() =>
                  router.push(`/${removeAccents(item?._id || "")}`)
                }
              >
                {item.title}
              </p>
              <p className={styles.course_content}>{item.mieu_ta_ngan}</p>
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
    <div className={styles.course}>
      <div className="heading">
        <p className="text">khóa học</p>
        <p className="col decor"></p>
      </div>

      <section className="d-flex flex-wrap">
        <div className={"col-12 col-sm-8 pe-0 pe-sm-4"}>
          <div className="d-flex flex-wrap">
            <div className="col-12">
              <Image
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                }
                alt="khoa_hoc"
                src={news[0]?.picture}
                width={1200}
                height={535}
              />
            </div>

            <div className="col-12">
              <p
                className={styles.course_title}
                onClick={() =>
                  router.push(`/${removeAccents(news[0]?._id || "")}`)
                }
              >
                {news[0]?.title}
              </p>

              <p className={styles.course_content}>{news[0]?.mieu_ta_ngan}</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-4 ps-0 ps-sm-4 pb-4">
          {news.slice(1, 3).map((item, index) => {
            return (
              <div className="col-12 d-flex flex-column" key={index}>
                <div className="col-12">
                  <Image
                    loader={({ src }) =>
                      `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                    }
                    alt="khoa_hoc"
                    src={item.picture}
                    width={430}
                    height={250}
                  />
                </div>

                <div className="col-12">
                  <p
                    className={styles.course_title}
                    onClick={() =>
                      router.push(`/${removeAccents(item?._id || "")}`)
                    }
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="line"></div>

      {/* <section className="d-flex flex-wrap pb-3 pb-sm-5 ">
        <div className={styles.bdRight + " " + "col-12 col-sm-8 pe-0 pe-sm-4"}>
          {news.slice(3, 6).map((item, index) => {
            return (
              <div key={index}>
                <div className="line"></div>

                <div className="d-flex flex-row">
                  <div className="col-7 px-4">
                    <p
                      className={styles.course_title}
                      onClick={() =>
                        router.push(`/${removeAccents(item?._id || "")}`)
                      }
                    >
                      {item.title}
                    </p>

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

        <div className="col-12 col-sm-4 ps-0 ps-sm-4 mt-3 mt-sm-0">
          <div className={styles.scroll + " " + "d-flex flex-column"}>
            {news.map((item, index) => {
              return (
                <div className="d-flex flex-wrap p-2" key={index}>
                  <div className="col-5 col-sm-12 col-lg-5">
                    <Image
                      loader={({ src }) =>
                        `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                      }
                      alt="khoa_hoc"
                      src={item.picture}
                      width={216}
                      height={160}
                    />
                  </div>

                  <div className="col-7 col-sm-12 col-lg-7 ps-2 ps-sm-0 ps-lg-2">
                    <p
                      className={styles.course_title_sm}
                      onClick={() =>
                        router.push(`/${removeAccents(item?._id || "")}`)
                      }
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      <section className="mb-4">
        {/* {news.slice(0, 6).map((item, index) => {
          return (
            <div className="col-12 col-sm-6 d-flex flex-wrap pe-5">
              <div className="col-6">
                <Image
                  loader={({ src }) =>
                    `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                  }
                  alt="khoa_hoc"
                  src={item.picture}
                  width={430}
                  height={250}
                />
              </div>
              <div className="col-6 px-3">
                <p
                  className={styles.course_title}
                  onClick={() =>
                    router.push(`/${removeAccents(item?._id || "")}`)
                  }
                >
                  {item.title}
                </p>
                <p className={styles.course_content}>{item.mieu_ta_ngan}</p>
              </div>
            </div>
          );
        })} */}

        <div
          className="position-relative h-100"
          style={{ paddingBottom: "70px" }}
        >
          <Items currentItems={currentItems} />

          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            previousLabel=" < "
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
      </section>

      <section className="d-flex flex-row mb-4">
        <div
          className="col-12 d-flex flex-wrap justify-content-around px-2 px-lg-4 pt-5 pt-sm-3 py-3 py-lg-4 "
          style={{ backgroundColor: "#606060" }}
        >
          <div className="heading_white px-3 px-lg-5">
            <p className="text">phương thức</p>
            <p className="col decor"></p>
          </div>

          {news.slice(0, 3).map((item, index) => (
            <div className="col-12 col-sm-4 px-3 mb-3 mb-sm-0" key={index}>
              <Image
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                }
                alt="co_che_von"
                src={item.picture}
                width={440}
                height={250}
              />
              <p
                className={styles.course_title_white}
                onClick={() =>
                  router.push(`/${removeAccents(item?._id || "")}`)
                }
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="d-flex flex-row mb-4">
        <div
          className="col-12 d-flex flex-wrap justify-content-around px-2 px-lg-4 pt-5 pt-sm-3 py-3 py-lg-4 "
          style={{ backgroundColor: "#606060" }}
        >
          <div className="heading_white px-3 px-lg-5">
            <p className="text">HỒ SƠ GỌI VỐN</p>
            <p className="col decor"></p>
          </div>

          {news.slice(0, 3).map((item, index) => (
            <div className="col-12 col-sm-4 px-3 mb-3 mb-sm-0" key={index}>
              <Image
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                }
                alt="co_che_von"
                src={item.picture}
                width={440}
                height={250}
              />
              <p
                className={styles.course_title_white}
                onClick={() =>
                  router.push(`/${removeAccents(item?._id || "")}`)
                }
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="d-flex flex-row mb-4">
        <div
          className="col-12 d-flex flex-wrap justify-content-around px-2 px-lg-4 pt-5 pt-sm-3 py-3 py-lg-4 "
          style={{ backgroundColor: "#606060" }}
        >
          <div className="heading_white px-3 px-lg-5">
            <p className="text">HỒ SƠ THƯƠNG HIỆU</p>
            <p className="col decor"></p>
          </div>

          {news.slice(0, 3).map((item, index) => (
            <div className="col-12 col-sm-4 px-3 mb-3 mb-sm-0" key={index}>
              <Image
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                }
                alt="co_che_von"
                src={item.picture}
                width={440}
                height={250}
              />
              <p
                className={styles.course_title_white}
                onClick={() =>
                  router.push(`/${removeAccents(item?._id || "")}`)
                }
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Image
          alt="khoa_hoc"
          src="/images/course/banner.png"
          width={1850}
          height={420}
        />
      </section>
    </div>
  );
}
