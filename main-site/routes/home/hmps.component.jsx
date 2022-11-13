import styles from "./home.module.scss";
import Carousel2 from "../../components/carousel/carousel.component";
import { useContext, useEffect, useState } from "react";
import { WidthContext } from "../../contexts/screenwidth/screenwidth.context";

export default function HomeMps({ scripts }) {
  const [shortscripts, setShortScripts] = useState([]);
  const [shortscriptspopular, setShortScriptsPopular] = useState([]);
  const screenwidth = useContext(WidthContext);
  useEffect(() => {
    function viewComparison(a, b) {
      return b.views - a.views;
    }
    async function getscripts(cancel) {
      if (cancel) return;
      scripts.sort(viewComparison);
      setShortScriptsPopular(scripts.slice(0, 6));
    }
    getscripts(scripts ? false : true);
    return () => {};
  }, [scripts]);

  useEffect(() => {
    function getshortarr(arr, num) {
      if (!arr) return [];
      return arr.slice(0, num);
    }
    setShortScripts(getshortarr(scripts, screenwidth >= 1600 ? 8 : 6));
  }, [scripts, screenwidth]);
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
        {shortscripts?.length >= 6 ? <Carousel2 scripts={shortscriptspopular} /> : null}
      </div>
    </div>
  );
}
