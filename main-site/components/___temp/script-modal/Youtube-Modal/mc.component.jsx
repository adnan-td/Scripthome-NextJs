import styles from "./mc.module.scss";

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
              <img src="/Script/Modal-Icons/Youtube-Modal-Icon.svg" alt="mail-icon" />
              <p>Youtube Video</p>
            </div>
            <div className={styles["youtube-box"]}>
              <img src="/Script/Modal-Icons/Play-button.svg" alt="" className={styles["y-play"]} />
              <img src="/Script/Modal-Icons/Video-player.png" alt="" className={styles["y-overlay"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
