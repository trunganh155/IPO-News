import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import PopupVideo from "../../components/popupVideo/PopupVideo";
import styles from "./CaseStudy.module.scss";
import { Checkbox } from "antd";
import "antd/dist/antd.css";

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
  const [checkedList, setCheckedList] = useState();
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

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
                <div className="mb-5">
                  <Checkbox
                    indeterminate={indeterminate}
                    onChange={onCheckAllChange}
                    checked={checkAll}
                  >
                    Select all
                  </Checkbox>

                  <hr />

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
            {Array(15)
              .fill()
              .map((item, index) => {
                return (
                  <div className="col-4">
                    <Image
                      alt="khoa_hoc"
                      src="/images/grey.png"
                      width={305}
                      height={167}
                    />

                    <p className={styles.course_title}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
