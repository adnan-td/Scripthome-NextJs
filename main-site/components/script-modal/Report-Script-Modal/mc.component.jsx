import styles from "./mc.module.scss";
import { useState } from "react";
import axios from "axios";
import { hostname } from "../../../../config/hostname";
import { toast } from "react-toastify";

export default function ReportScriptModal({ className, children, script_id, reported_by, status }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className={className}>
        {children}
      </button>
      {show ? (
        <Modalmc
          handleClose={handleClose}
          script_id={script_id}
          reported_by={reported_by}
          status={status}
        />
      ) : (
        ""
      )}
    </>
  );
}

const Modalmc = ({ handleClose, script_id, reported_by, status }) => {
  const [body, setBody] = useState("");
  async function handleSubmitReport() {
    if (status !== "authenticated") {
      toast.error("Please login to continue!");
    } else if (body.length < 20) {
      toast.error("Report should have atleast 20 characters!");
    } else if (script_id && reported_by) {
      await axios({
        method: "post",
        url: `${hostname}/api/reports`,
        data: {
          method: "add",
          report: {
            body: body,
            script_id: script_id,
            reported_by: reported_by,
            resolved: 0,
          },
        },
      });
      setBody("");
      handleClose();
      toast.success("Report posted successfully!");
    } else {
      toast.error("Something must be wrong. Please try again later!");
    }
  }

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
              <textarea
                className={styles["r-input"]}
                name="body"
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["cancel-button"]} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles["next-button"]} onClick={handleSubmitReport}>
            Report Script
          </button>
        </div>
      </div>
    </div>
  );
};
