import styles from "./mc.module.scss";

const Modalmc = ({ handleClose }) => {
  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["Script-Modal"]} onClick={(e) => e.stopPropagation()}>
        <div className={styles["header-wrapper-mod"]}>
          <div className={styles["h-img-tag"]}>
            <img src="/Modal/Ad-Blocker-detect.svg" alt="" />
          </div>
          <div className={styles["h-content-div"]}>
            <p className={styles["h-content-1"]}>AdBlocker Detected</p>
            <p className={styles["h-content-2"]}>
              It looks like you{"'"}re using an ad blocker. That{"'"}s okay. Who doesn{"'"}t? But without
              advertising-income, we can{"'"}t keep making this site awesome.
            </p>
          </div>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["confirm-button"]}>I have Disabled AdBlocker</button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
