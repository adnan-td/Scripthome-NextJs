import styles from "./mc.module.scss";

const Modalmc = ({ handleClose }) => {
  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["Script-Modal"]} onClick={(e) => e.stopPropagation()}>
        <div className={styles["header-wrapper"]}>
          <div className={styles["h-img-wrap"]}>
            <img src="/Question-Modal/Welcome-05.jpg" alt="" className={styles["welcome-img"]} />
          </div>
          <div className={styles["h-content-div"]}>
            <p className={styles["h-content-1"]}>Our Daily Uploads</p>
            <p className={styles["h-content-2"]}>
              On Scripthome we daily upload scripts for the most popular games.
            </p>
          </div>
          <div className={styles["dot-wrapper"]}>
            <div className={styles["dot-div"]}></div>
            <div className={styles["dot-div"]}></div>
            <div className={styles["dot-div"]}></div>
            <div className={styles["dot-div"]}></div>
            <div className={styles["dot-div"] + " " + styles["dot-div-active"]}></div>
          </div>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["next-button"]} onClick={handleClose}>
            Complete Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
