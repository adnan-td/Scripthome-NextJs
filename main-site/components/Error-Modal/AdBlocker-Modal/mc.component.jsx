import styles from "./mc.module.scss";
import Router from "next/router";

const Modalmc = ({ refresh, setRefresh }) => {
  const handleClick = () => {
    setRefresh(!refresh);
    Router.reload();
  };
  return (
    <div className={styles["modal-cover"]}>
      <div className={styles["Script-Modal"]}>
        <div className={styles["header-wrapper-mod"]}>
          <div className={styles["h-img-tag"]}>
            <img src="/Modal/Ad-Blocker-detect.svg" alt="" />
          </div>
          <div className={styles["h-content-div"]}>
            <p className={styles["h-content-1"]}>AdBlocker Detected</p>
            <p className={styles["h-content-2"]}>
              It looks like you{"'"}re using an ad blocker. That{"'"}s okay. Who doesn{"'"}t? But
              without advertising-income, we can{"'"}t keep making this site awesome.
            </p>
          </div>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["confirm-button"]} onClick={handleClick}>
            I have Disabled AdBlocker
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
