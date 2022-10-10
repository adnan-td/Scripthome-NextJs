import styles from "./mc.module.scss";

const Modalmc = ({ handleClose }) => {
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
            <input type="text" />
          </form>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["cancel-button"]} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles["next-button"]}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
