import styles from "./mc.module.scss";
import { useState } from "react";
import Link from "next/link";

export default function WatchVideoModal({ className, link, children }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className={className}>
        {children}
      </button>
      {show ? <Modalmc handleClose={handleClose} link={link} /> : ""}
    </>
  );
}

const Modalmc = ({ handleClose, link }) => {
  const videoId = link.split("v=")[1];

  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["Script-Modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <div className={styles["div-header-wrapper"]}>
            <div className={styles["header-content"]}>
              <img src="/Script/Modal-Icons/Youtube-Modal-Icon.svg" alt="mail-icon" />
              <p>Youtube Video</p>
            </div>
            <iframe
              className={styles["youtube-box"]}
              src={`https://www.youtube.com/embed/${videoId}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
