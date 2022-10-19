import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExpert } from "../../store/redux/ExpertReducer/expert.action";
import styles from "./Expert.module.scss";

export default function Expert(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { expert } = useSelector((state) => state.ExpertReducer);

  useEffect(() => {
    dispatch(getExpert());
  }, [dispatch]);

  return (
    <div className={styles.expert}>
      <div className="d-flex flex-row align-items-center">
        <div className="col-4">
          <Image
            loader={({ src }) =>
              `https://api.fostech.vn${src}?access_token=${process.env.ACCESS_TOKEN}`
            }
            alt="chuyen_gia"
            src={expert[0]?.image}
            width={462}
            height={501}
          />
        </div>

        <div className="col-8">
          <div className={styles.expert_black}>
            <p className={styles.expert_title}>{expert[0]?.name}</p>
            <p className={styles.expert_title}>{expert[0]?.company}</p>

            <p className={styles.expert_content}>
              <section
                dangerouslySetInnerHTML={{ __html: expert[0]?.description }}
              />
            </p>

            <div className={styles.scroll + " " + "d-flex flex-row"}>
              {Array(10)
                .fill()
                .map((item, index) => {
                  return (
                    <div className="col-3" key={index}>
                      <Image
                        alt="chuyen_gia"
                        src="/images/gray.png"
                        width={180}
                        height={113}
                      />

                      <p className={styles.gallery_title_sm}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
