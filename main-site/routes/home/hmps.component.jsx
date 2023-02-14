import styles from "./home.module.scss";
import Carousel2 from "../../components/carousel/carousel.component";

export default function HomeMps({ scripts }) {
  console.log(scripts);
  return (
    <div className={styles["mps"]}>
      <div className={styles["mps-inside"]}>
        <div className={styles["mps-header"]}>
          <p>
            Most Popular{" "}
            <span>
              Scripts <img alt="loading" src="/Homepage/pattern/most-popular-scribble.svg" />
            </span>
          </p>
        </div>
        {scripts?.length >= 6 ? <Carousel2 scripts={scripts} /> : null}
      </div>
    </div>
  );
}
