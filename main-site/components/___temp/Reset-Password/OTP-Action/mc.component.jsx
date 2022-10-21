import styles from "./mc.module.scss";

const Modalmc = ({ handleClose }) => {
  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["sign-up-modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <img src="/Modal/sign-up/email-address-icon.svg" alt="mail-icon" />
          <div className={styles["header-content"]}>
            <p>Please check your mail</p>
            <span>
              We{"'"}ve sent a code to <b>spuniverse@gmail.com</b>
            </span>
          </div>
          <div className={styles["form-content"]}>
            <div className={styles["form-wrapper"]}>
              <form className={styles["input-field-2"]}>
                <input type="text" placeholder="-" />
              </form>
              <form className={styles["input-field-2"]}>
                <input type="text" placeholder="-" />
              </form>
              <form className={styles["input-field-2"]}>
                <input type="text" placeholder="-" />
              </form>
              <form className={styles["input-field-2"]}>
                <input type="text" placeholder="-" />
              </form>
            </div>
            <div className={styles["resend-div"]}>
              <p className={styles["re-text"]}>
                Didn{"'"}t get the code? <a href="sudhanshuprasd.com">Click to resend.</a>
              </p>
            </div>
          </div>
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
