import FloatingModal from "../Question-Modal/modal.component";
import styles from "./fi.module.scss";

export default function FI() {
  return (
    <FloatingModal className={styles["FI"]}>
      <img src="/message-question-square.svg" alt="loading" />
    </FloatingModal>
  );
}
