import { useState } from "react";
import styles from "./featuredtag.module.scss";

const FeaturedTag = ({ tags }) => {
  const [taglist, setTL] = useState([]);
  useState(() => {
    setTL(tags.split(";"));
  }, [tags]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function handleGenerate() {
    return `/tag-icons/${getRandomInt(1, 20)}.png`;
  }

  return (
    <>
      {taglist.map((item, key) => {
        return (
          <div className={styles["f-tag"]} key={key}>
            <img alt="loading" src={handleGenerate()} />
            <div>
              <p className={styles["f-tag-no"]}>#{key + 1}</p>
              <p className={styles["f-tag-content"]}>{item}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FeaturedTag;
