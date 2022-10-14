import React from "react";
import styles from "./PopupVideo.module.scss";

function PopupVideo({ index, video }) {
  const url = String(video);
  const link = url.slice(url.indexOf("v"), url.length).replace("v=", "");
  return (
    <div
      className="modal fade"
      id={`exampleModal_${index}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className={"modal-dialog" + " " + styles.modal}>
        <div className={"modal-content" + " " + styles.modal_content}>
          <div className={"modal-header" + " " + styles.modal_header}>
            <i
              className="fal fa-times"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></i>
          </div>
          <div className={"modal-body" + " " + styles.modal_body}>
            <iframe
              src={`https://www.youtube.com/embed/${link}` || ""}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              //   allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupVideo;
