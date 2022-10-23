import { useState } from "react";
import styles from "./mc.module.scss";

const Modalmc = ({ handleClose, setnewuser, newuser, setShow }) => {
  const [name, setName] = useState("");

  function handleNext() {
    setnewuser({ ...newuser, name: name });
    setShow("Confirm");
  }

  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["sign-up-modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <img src="/Edit-Profile-Modal/fingerprint-icon.svg" alt="mail-icon" />
          <div className={styles["header-content"]}>
            <p>Enter New Username</p>
            <span>Enter your new username to change your old username.</span>
          </div>

          <form className={styles["username-input"] + " " + styles["input-field"]}>
            <label htmlFor="">New Username</label>
            <input
              type="text"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </form>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["cancel-button"]} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles["next-button"]} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
