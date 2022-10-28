import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../store/redux/NewsReducer/news.action";
import { fakeDictionary } from "../../../utils/DataDemo/Dictionary";
import styles from "./Dictionary.module.scss";
import { Tabs } from "antd";

export default function Dictionary(props) {
  const limit = 300;
  const limit2 = 100;
  const router = useRouter();
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.NewsReducer);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div className={styles.dictionary}>
      <div className="heading">
        <p className="text" style={{ marginBottom: "0px" }}>
          FINANCIAL DICTIONARY
        </p>
        <p className="col decor"></p>
      </div>

      <Tabs
        defaultActiveKey="1"
        centered
        items={fakeDictionary.map((item, index) => {
          return {
            label: `${item.character}`,
            key: index,
            children: (
              <div className="d-flex flex-wrap col-8 mx-auto">
                {item.words.map((word, index) => {
                  return (
                    <div className="col-4 px-3" key={index}>
                      <p
                        className={styles.word}
                        onClick={() =>
                          router.push("/knowledge/dictionary/detail")
                        }
                      >
                        {word}
                      </p>
                    </div>
                  );
                })}
              </div>
            ),
          };
        })}
      />
    </div>
  );
}
