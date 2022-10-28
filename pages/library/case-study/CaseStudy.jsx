import { Checkbox } from "antd";
import "antd/dist/antd.css";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../store/redux/NewsReducer/news.action";
import styles from "./CaseStudy.module.scss";

const CheckboxGroup = Checkbox.Group;
const filter = [
  "Healthcare",
  "Fitness",
  "Mỹ Phẩm",
  "Công nghệ",
  "Thực phẩm",
  "...",
];

export default function CaseStudy(props) {
  const router = useRouter();
  const [showFilter, setShowFilter] = useState(true);
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.NewsReducer);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div className={styles.caseStudy}>
      <div className="d-flex flex-wrap">
        {/* <div className={styles.btnFilter + " " + "col-1"}>
          <button
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            Filter
          </button>
        </div> */}

        <div
          className={styles.modalFilter + " " + "col-3 pe-4 d-flex flex-column"}
        >
          {/* {Array(2)
            .fill()
            .map((item, index) => {
              return (
                <div className="mb-5" key={index}>
                  <Checkbox
                    indeterminate={indeterminate}
                    onChange={onCheckAllChange}
                    checked={checkAll}
                  >
                    Select all
                  </Checkbox>

                  <div className="lineWhite"></div>

                  <CheckboxGroup
                    options={plainOptions}
                    value={checkedList}
                    onChange={onChange}
                    className={styles.caseStudy_group}
                  />
                </div>
              );
            })} */}
          <div className="mb-4">
            <p className={styles.caseStudy_filter}>Case Study Doanh Nghiệp</p>
            {filter.map((item, index) => {
              return (
                <div key={index}>
                  <label className={styles.check_label}>
                    <input
                      className={styles.check_input}
                      type="checkbox"
                      onChange={() => {}}
                    />
                    <span className={styles.check_span}>{item}</span>
                  </label>
                </div>
              );
            })}
          </div>

          <div className="mb-4">
            <p className={styles.caseStudy_filter}>Case Study Aura Capital</p>
            {filter.map((item, index) => {
              return (
                <div key={index}>
                  <label className={styles.check_label}>
                    <input
                      className={styles.check_input}
                      type="checkbox"
                      onChange={() => {}}
                    />
                    <span className={styles.check_span}>{item}</span>
                  </label>
                </div>
              );
            })}
          </div>

          <div className="mb-4">
            <p className={styles.caseStudy_filter}>Tài Liệu IPO</p>
            {filter.map((item, index) => {
              return (
                <div key={index}>
                  <label className={styles.check_label}>
                    <input
                      className={styles.check_input}
                      type="checkbox"
                      onChange={() => {}}
                    />
                    <span className={styles.check_span}>{item}</span>
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-9">
          <div className={styles.scroll + " " + "d-flex flex-wrap"}>
            {news.map((item, index) => {
              return (
                <div className="col-4 px-2" key={index}>
                  <Image
                    loader={({ src }) =>
                      `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                    }
                    alt="khoa_hoc"
                    src={item.picture}
                    width={345}
                    height={187}
                  />

                  <div className="px-1">
                    <p className={styles.caseStudy_title}>{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
