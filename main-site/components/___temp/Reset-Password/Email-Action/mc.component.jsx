import styles from "./mc.module.scss";

const Modalmc = ({ handleClose }) => {
  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div
        className={styles["sign-up-modal"]}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles["close-div"]} onClick={handleClose}>
          <img
            src="/Modal/sign-up/x-close.svg"
            alt=""
            className={styles["close-icon"]}
          />
        </button>
        <div className={styles["top-content"]}>
          <img src="/Modal/sign-up/email-address-icon.svg" alt="mail-icon" />
          <div className={styles["header-content"]}>
            <p>Email Address</p>
            <span>
              Please enter the email address for the Scripthome account.
            </span>
          </div>

          <form className={styles["email-input"] + " " + styles["input-field"]}>
            <label htmlFor="">Email Address</label>
            <input type="email" title="Type your email address" />
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
