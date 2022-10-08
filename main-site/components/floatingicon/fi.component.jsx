import styles from "./fi.module.scss";

export default function FI() {
  return (
    <button className={styles["FI"]}>
      <img src="/message-question-square.svg" alt="loading" />
    </button>
  );
}
