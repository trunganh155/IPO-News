import React from "react";
import styles from "./Comment.module.scss";

export default function Comment() {
  return (
    <div className={styles.comment}>
      <input type="text" placeholder="Viết bình luận..." className="inputCmt" />

      <div className="d-flex flex-row">
        <p className={styles.text_like + " " + "ps-3"}>Thích</p>
        <p className={styles.text_reply + " " + "ps-3"}>Phản hồi</p>
      </div>
    </div>
  );
}
