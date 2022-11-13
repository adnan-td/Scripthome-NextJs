import styles from "./home.module.scss";

export default function HomeData({ statistics }) {
  return (
    <div className={styles["home-data"]}>
      <div className={styles["ht-data__mod"]}>
        <div className={styles["ht-data"]}>
          <div className={styles["ht-data-inside"]}>
            <p className={styles["ht-data-no"]}>{statistics.total_scripts}</p>
            <p className={styles["ht-data-name"]}>Total scripts posted</p>
          </div>
          <div className={styles["ht-data-inside"]}>
            <p className={styles["ht-data-no"]}>
              {statistics.total_scripts_month}
            </p>
            <p className={styles["ht-data-name"]}>Total scripts this month</p>
          </div>
          <div className={styles["ht-data-inside"]}>
            <p className={styles["ht-data-no"]}>{statistics.total_views}</p>
            <p className={styles["ht-data-name"]}>Total scripts views</p>
          </div>
          <div className={styles["ht-data-inside"]}>
            <p className={styles["ht-data-no"]}>
              {statistics.total_views_month}
            </p>
            <p className={styles["ht-data-name"]}>
              Total scripts views this month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
