import styles from "./mc.module.scss";

const Modalmc = ({ handleClose }) => {
  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["sign-up-modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <img src="/Edit-Profile-Modal/change-icon.svg" alt="mail-icon" />
          <div className={styles["header-content"]}>
            <p>Select an option</p>
            <span>Select the attribute which you want to change</span>
          </div>

          <div className={styles["div-wrapper-modal"]}>
            <div className={styles["uploading-div"] + " " + styles["uping-div-active"]}>
              <div className={styles["d-flex-card"]}>
                <img src="/Modal/sign-up/image-icon.svg" className={styles["icon-img"]} alt="icon-bg" />
                <div className={styles["uping-content"]}>
                  <p className={styles["uping-title"]}>Change the profile image</p>
                </div>
              </div>
              <button className={styles["chec-icon-box"]}>
                <img src="/Modal/sign-up/checkbox-icon.svg" className={styles["close-icon-black"]} alt="" />
              </button>
            </div>
            <div className={styles["uploading-div"]}>
              <div className={styles["d-flex-card"]}>
                <img src="/Edit-Profile-Modal/username-icon.svg" className={styles["icon-img"]} alt="icon-bg" />
                <div className={styles["uping-content"]}>
                  <p className={styles["uping-title"]}>Change username</p>
                </div>
              </div>
              <div className={styles["uncheck-div"]}></div>
            </div>
            <div className={styles["uploading-div"]}>
              <div className={styles["d-flex-card"]}>
                <img src="/Edit-Profile-Modal/lock-icon.svg" className={styles["icon-img"]} alt="icon-bg" />
                <div className={styles["uping-content"]}>
                  <p className={styles["uping-title"]}>Change password</p>
                </div>
              </div>
              <div className={styles["uncheck-div"]}></div>
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
