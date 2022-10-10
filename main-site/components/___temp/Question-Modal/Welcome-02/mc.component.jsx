import styles from "./mc.module.scss";

const Modalmc = ({ handleClose }) => {
  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["Script-Modal"]} onClick={(e) => e.stopPropagation()}>
        <div className={styles["header-wrapper"]}>
          <div className={styles["h-img-wrap"]}>
            <img src="/Question-Modal/Welcome-02.png" alt="" className={styles["welcome-img"]} />
          </div>
          <div className={styles["h-content-div"]}>
            <p className={styles["h-content-1"]}>Our Youtube Channel</p>
            <p className={styles["h-content-2"]}>
              On our youtube channel we have regular tutorials uploaded everyday.
            </p>
          </div>
          <div className={styles["dot-wrapper"]}>
            <div className={styles["dot-div"]}></div>
            <div className={styles["dot-div"] + " " + styles["dot-div-active"]}></div>
            <div className={styles["dot-div"]}></div>
            <div className={styles["dot-div"]}></div>
            <div className={styles["dot-div"]}></div>
          </div>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["cancel-button"]}>Skip</button>
          <button className={styles["next-button"]}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
