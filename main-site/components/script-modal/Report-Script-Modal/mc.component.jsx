import styles from "./mc.module.scss";
import { useState } from "react";

export default function ReportScriptModal({ className, children }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className={className}>
        {children}
      </button>
      {show ? <Modalmc handleClose={handleClose} /> : ""}
    </>
  );
}

const Modalmc = ({ handleClose }) => {
  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["Script-Modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <div className={styles["div-header-wrapper"]}>
            <div className={styles["header-content"]}>
              <img src="/Script/Modal-Icons/Report-Modal-Icon.svg" alt="mail-icon" />
              <p>Report Script</p>
            </div>
            <div className={styles["report-box"]}>
              <label className={styles["r-title"]}>Reason for Reporting Script</label>
              <textarea className={styles["r-input"]} />
            </div>
          </div>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["cancel-button"]} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles["next-button"]}>Report Script</button>
        </div>
      </div>
    </div>
  );
};
