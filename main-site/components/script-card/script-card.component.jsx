import styles from "./script-card.module.scss";

export default function ScriptCard() {
  return (
    <div className={styles["scriptcard"]}>
      <div className={styles["sc-img-c"]}>
        <img alt="loading" src="/Homepage/Image/card-img.jpg" />
      </div>
      <div className={styles["sc-content"]}>
        <div className={styles["sc-text"]}>
          <h3>Farm Life Tycoon | GUI...</h3>
          <p>
            This new script Farm Life Tycoon works perfectly, it auto builds and collects everything
            without you...
          </p>
        </div>
        <div className={styles["sc-icons"]}>
          <p>
            <img alt="loading" src="/Script/Icons/eye.svg" /> 130
          </p>
          <p className={styles["mod-sc-icons"]}>
            <img alt="loading" src="/Homepage/icons/heart-icon.svg" /> 2
          </p>
        </div>
      </div>
    </div>
  );
}
