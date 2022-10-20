import { Checkbox } from "antd";
import "antd/dist/antd.css";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../store/redux/NewsReducer/news.action";
import styles from "./CaseStudy.module.scss";

const CheckboxGroup = Checkbox.Group;
const plainOptions = [
  "select 1",
  "select 2",
  "select 3",
  "select 4",
  "select 5",
  "select 6",
];

export default function CaseStudy(props) {
  const limit = 300;
  const limit2 = 100;
  const router = useRouter();
  const [checkedList, setCheckedList] = useState();
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.NewsReducer);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <div className={styles.caseStudy}>
      <div className="d-flex flex-row">
        <div className="col-3 pe-4 d-flex flex-column">
          <p className={styles.caseStudy_filter}>Filter</p>

          {Array(2)
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
            })}
        </div>

        <div className="col-9">
          <div className={styles.scroll + " " + "d-flex flex-wrap"}>
            {news.map((item, index) => {
              return (
                <div className="col-4 px-1" key={index}>
                  <Image
                    loader={({ src }) =>
                      `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
                    }
                    alt="khoa_hoc"
                    src={item.picture}
                    width={315}
                    height={177}
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
