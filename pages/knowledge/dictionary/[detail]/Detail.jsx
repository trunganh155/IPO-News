import { useRouter } from "next/router";
import React from "react";
import styles from "./Detail.module.scss";

export default function Detail(props) {
  const router = useRouter();

  return (
    <div className={styles.detail}>
      <div className="heading">
        <p className="text">FINANCIAL DICTIONARY</p>
        <p className="col decor"></p>
      </div>

      <section className="col-10 mx-auto d-flex flex-column">
        <div className="col-12 col-sm-5 col-lg-3">
          <p className={styles.word}>Lorem ipsum dolor sit amet</p>
        </div>

        <div className="col-11 mx-auto">
          <p className={styles.meaning}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem
            ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.
            Commodo odio aenean sed adipiscing diam donec adipiscing tristique.
            Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at
            imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis.
            Egestas integer eget aliquet nibh praesent. In hac habitasse platea
            dictumst quisque sagittis purus. Pulvinar elementum integer enim
            neque volutpat ac.
          </p>
        </div>
      </section>
    </div>
  );
}
