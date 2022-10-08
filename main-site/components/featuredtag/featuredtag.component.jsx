import styles from "./featuredtag.module.scss";

const FeaturedTag = () => {
  return (
    <div className={styles["f-tag"]}>
      <img alt="loading" src="/Script/Icons/Featured-Tags.svg" />
      <div>
        <p className={styles["f-tag-no"]}>#1</p>
        <p className={styles["f-tag-content"]}>Happy</p>
      </div>
    </div>
  );
};

export default FeaturedTag;
