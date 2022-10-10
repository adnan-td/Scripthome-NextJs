import styles from "./mc.module.scss";

const Modalmc = ({ handleClose, next }) => {
  const handleNext = () => {
    next(2);
  };

  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["Script-Modal"]} onClick={(e) => e.stopPropagation()}>
        <div className={styles["header-wrapper"]}>
          <div className={styles["h-img-wrap"]}>
            <img src="/Question-Modal/Welcome-01.png" alt="" className={styles["welcome-img"]} />
          </div>
          <div className={styles["h-content-div"]}>
            <p className={styles["h-content-1"]}>Welcome to our Community</p>
            <p className={styles["h-content-2"]}>
              We{"'"}re glad to have you onboard. Here is a quick tour for you to get familiar with
              some perks of our community.
            </p>
          </div>
          <div className={styles["dot-wrapper"]}>
            <div className={styles["dot-div"] + " " + styles["dot-div-active"]}></div>
            <div className={styles["dot-div"]}></div>
            <div className={styles["dot-div"]}></div>
            <div className={styles["dot-div"]}></div>
            <div className={styles["dot-div"]}></div>
          </div>
        </div>
        <div className={styles["bottom-button"]}>
          <button
            className={styles["cancel-button"]}
            onClick={() => {
              next(5);
            }}
          >
            Skip
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
