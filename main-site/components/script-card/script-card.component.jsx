import styles from "./script-card.module.scss";
import Link from "next/link";

export default function ScriptCard({ script }) {
  return (
    <Link href={`/scripts/${script.id}`}>
      <div className={styles["scriptcard"]}>
        <div className={styles["sc-img-c"]}>
          <img alt="loading" src="/Homepage/Image/card-img.jpg" />
        </div>
        <div className={styles["sc-content"]}>
          <div className={styles["sc-text"]}>
            <h3>{script.title}</h3>
            <p>{script.description}</p>
          </div>
          <div className={styles["sc-icons"]}>
            <p>
              <img alt="loading" src="/Script/Icons/eye.svg" /> {script.views}
            </p>
            <p className={styles["mod-sc-icons"]}>
              <img alt="loading" src="/Homepage/icons/heart-icon.svg" /> {script.likes}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
