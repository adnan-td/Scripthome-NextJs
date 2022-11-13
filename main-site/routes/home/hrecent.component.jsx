import styles from "./home.module.scss";
import ScriptCard from "../../components/script-card/script-card.component";
import Background from "../../components/backgroundmod/backgroundmod.component";
import { useContext, useEffect, useState } from "react";
import { WidthContext } from "../../contexts/screenwidth/screenwidth.context";
import Link from "next/link";

export default function HomeRecent({ scripts }) {
  const [shortscripts, setShortScripts] = useState([]);
  const screenwidth = useContext(WidthContext);

  function dateComparison(a, b) {
    const date1 = new Date(a.date);
    const date2 = new Date(b.date);
    return date2 - date1;
  }

  useEffect(() => {
    function getshortarr(arr, num) {
      if (!arr) return [];
      return arr.sort(dateComparison).slice(0, num);
    }
    setShortScripts(getshortarr(scripts, screenwidth >= 1600 ? 8 : 6));
  }, [scripts, screenwidth]);
  return (
    <div className={styles["recentu"]}>
      <Background />
      <div className={styles["background-header"]}>Uploads</div>
      <div className={styles["recentu-top"]}>
        <p>Recent Uploads</p>
        <Link href="/scripts">
          <a className={styles["styled-button__mod"]}>
            <span>View all</span>
            <img src="/Script/Icons/arrow-square-right.svg" alt="loading" />
          </a>
        </Link>
      </div>
      <div className={styles["recentu-bottom"]}>
        {shortscripts.map((script, key) => {
          return <ScriptCard script={script} key={key} />;
        })}
      </div>
      <Link href="/scripts">
        <a className={styles["styled-button__trip"]}>
          <span>View all</span>
          <img src="/Script/Icons/arrow-square-right.svg" alt="loading" />
        </a>
      </Link>
    </div>
  );
}
