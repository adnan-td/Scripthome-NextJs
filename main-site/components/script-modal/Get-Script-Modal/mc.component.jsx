import styles from "./mc.module.scss";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function GetScriptModal({ className, code, children }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className={className}>
        {children}
      </button>
      {show ? <Modalmc handleClose={handleClose} code={code} /> : ""}
    </>
  );
}

const Modalmc = ({ handleClose, code }) => {
  const [codelist, setcl] = useState([]);
  useEffect(() => {
    if (code) {
      setcl(code.split("\n"));
      console.log(code.split("\n"));
    }
  }, [code]);

  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["Script-Modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <div className={styles["div-header-wrapper"]}>
            <div className={styles["header-content"]}>
              <img src="/Script/Modal-Icons/Script-Modal-Icon.svg" alt="mail-icon" />
              <p>Script</p>
            </div>
            <div className={styles["script-box"]}>
              {codelist.map((line, i) => {
                return (
                  <div className={styles["script-box-content"]} key={i}>
                    <div className={styles["script-number"]}>
                      <p className={styles["s-line-num"]}>{i + 1}</p>
                    </div>
                    <p className={styles["right-script-text"]}>{line}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["cancel-button"]} onClick={handleClose}>
            Cancel
          </button>
          <button
            className={styles["next-button"]}
            onClick={() => {
              navigator.clipboard.writeText(code);
              toast.success("Game Link copied to your Clipboard!");
            }}
          >
            Copy Script
          </button>
        </div>
      </div>
    </div>
  );
};
