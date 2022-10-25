import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../store/redux/NewsReducer/news.action";
import styles from "./Dictionary.module.scss";
import { Tabs } from "antd";

const fakeDictionary = [
  {
    character: "A",
    words: [
      "Aorem ipsum dolor sit amet",
      "Aorem ipsum dolor sit amet",
      "Aorem ipsum dolor sit amet",
      "Aorem ipsum dolor sit amet",
      "Aorem ipsum dolor sit amet",
      "Aorem ipsum dolor sit amet",
      "Aorem ipsum dolor sit amet",
      "Aorem ipsum dolor sit amet",
    ],
  },
  {
    character: "B",
    words: [
      "Borem ipsum dolor sit amet",
      "Borem ipsum dolor sit amet",
      "Borem ipsum dolor sit amet",
      "Borem ipsum dolor sit amet",
      "Borem ipsum dolor sit amet",
      "Borem ipsum dolor sit amet",
      "Borem ipsum dolor sit amet",
    ],
  },
  {
    character: "C",
    words: [
      "Corem ipsum dolor sit amet",
      "Corem ipsum dolor sit amet",
      "Corem ipsum dolor sit amet",
      "Corem ipsum dolor sit amet",
      "Corem ipsum dolor sit amet",
      "Corem ipsum dolor sit amet",
      "Corem ipsum dolor sit amet",
    ],
  },
  {
    character: "D",
    words: [
      "Dorem ipsum dolor sit amet",
      "Dorem ipsum dolor sit amet",
      "Dorem ipsum dolor sit amet",
      "Dorem ipsum dolor sit amet",
      "Dorem ipsum dolor sit amet",
      "Dorem ipsum dolor sit amet",
      "Dorem ipsum dolor sit amet",
    ],
  },
  {
    character: "E",
    words: [
      "Eorem ipsum dolor sit amet",
      "Eorem ipsum dolor sit amet",
      "Eorem ipsum dolor sit amet",
      "Eorem ipsum dolor sit amet",
      "Eorem ipsum dolor sit amet",
      "Eorem ipsum dolor sit amet",
      "Eorem ipsum dolor sit amet",
    ],
  },
  {
    character: "F",
    words: [
      "Forem ipsum dolor sit amet",
      "Forem ipsum dolor sit amet",
      "Forem ipsum dolor sit amet",
      "Forem ipsum dolor sit amet",
      "Forem ipsum dolor sit amet",
      "Forem ipsum dolor sit amet",
      "Forem ipsum dolor sit amet",
    ],
  },
  {
    character: "G",
    words: [
      "Gorem ipsum dolor sit amet",
      "Gorem ipsum dolor sit amet",
      "Gorem ipsum dolor sit amet",
      "Gorem ipsum dolor sit amet",
      "Gorem ipsum dolor sit amet",
      "Gorem ipsum dolor sit amet",
      "Gorem ipsum dolor sit amet",
    ],
  },
];

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
        <p className="text">FINANCIAL DICTIONARY</p>
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
                      <p>{word}</p>
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
