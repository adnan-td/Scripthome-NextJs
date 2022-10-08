import styles from "./preview.module.scss";

const ScriptPreview = () => {
  return (
    <div className={styles["viewscript"]}>
      <img src="/Script/Image/side-image.jpg" alt="loading" className={styles["sideimage"]} />
      <div className={styles["overlaytext1"]}>
        <div className={styles["cover-div"]}>
          <div className={styles["overlaycontent"]}>
            {/* max length of charachters - 38 */}
            <h3 className={styles["overlaycontent__heading"]}>strong simulator...</h3>
            {/* max length of charachters - 105 */}
            <p className={styles["overlaycontent__para"]}>
              use strong simulator X script now to train your charachter like never befor. We are
              the best<span>...</span>
            </p>
          </div>
          <div className={styles["side-script-button"]}>
            <div>
              <img src="/Script/Icons/eye.svg" className={styles["view-icon"]} alt="eye-icon" />
              <span>6254</span>
            </div>
            <button className={styles["get-script"]}>View Script</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptPreview;
