import styles from "./preview.module.scss";
import Link from "next/link";

const ScriptPreview = ({ script }) => {
  return (
    <div className={styles["viewscript"]}>
      <img src="/Script/Image/side-image.jpg" alt="loading" className={styles["sideimage"]} />
      <div className={styles["overlaytext1"]}>
        <div className={styles["cover-div"]}>
          <div className={styles["overlaycontent"]}>
            {/* max length of charachters - 38 */}
            <h3 className={styles["overlaycontent__heading"]}>{script.title}...</h3>
            {/* max length of charachters - 105 */}
            <p className={styles["overlaycontent__para"]}>
              {script.description}
              <span>...</span>
            </p>
          </div>
          <div className={styles["side-script-button"]}>
            <div>
              <img src="/Script/Icons/eye.svg" className={styles["view-icon"]} alt="eye-icon" />
              <span>{script.views}</span>
            </div>
            <Link href={`/scripts/${script.id}`}>
              <button className={styles["get-script"]}>View Script</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptPreview;
