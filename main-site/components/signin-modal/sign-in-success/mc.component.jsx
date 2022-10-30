import styles from "./mc.module.scss";

const Modalmc = ({ handleClose }) => {
  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["sign-up-modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content-mod"]}>
          <img src="/Modal/sign-up/email-address-icon.svg" alt="mail-icon" />
          <div className={styles["header-content"]}>
            <p>Auth Link</p>
            <span>Please check your mail for the login link.</span>
          </div>
        </div>
        <div className={styles["bottom-button"]}>
          <a
            href="https://mail.google.com/mail/"
            target="_blank"
            rel="noreferrer"
            className={styles["next-button"]}
          >
            Open in Mail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
