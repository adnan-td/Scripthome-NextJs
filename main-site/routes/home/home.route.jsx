import styles from "./home.module.scss";
import Link from "next/link";

import Background from "../../components/backgroundmod/backgroundmod.component";
// import { AllScriptContext } from "../../contexts/allscripts/scripts.context";
import Image from "next/image";
import dynamic from "next/dynamic";

export default function Home({ statistics, scripts, script_hviews }) {
  // Dynamic Imports
  const HomeData = dynamic(() => import("./hdata.component"));
  const HomeFeatureSec = dynamic(() => import("./hfeature.component"));
  const HomeMps = dynamic(() => import("./hmps.component"));
  const HomeRecent = dynamic(() => import("./hrecent.component"));

  return (
    <div className={styles["home"]}>
      <Background />
      <div className={styles["home-top"]}>
        <div className={styles["home-top-content"]}>
          <h1>
            Automatically optimize your{" "}
            <span className={styles["home__span__mod"]}>
              Roblox experience
              <div className={styles["home__span__mod__rec"]}></div>
            </span>{" "}
            with scripts from
            <span className={styles["home__span"]}>
              ScriptHome
              <img alt="loading" src="/Homepage/pattern/hero-section-underline.svg" />
            </span>
          </h1>

          <div className={styles["home-top-buttons"]}>
            <Link href="/scripts">
              <a className={styles["styled-button"]}>
                <span>View Scripts</span>
                <img src="/Script/Icons/arrow-square-right.svg" alt="arrow-icon" />
              </a>
            </Link>
            <a
              href="https://krnl.place/"
              target="_blank"
              rel="noreferrer"
              className={styles["secondary-button"]}
            >
              <span>Download Executor</span>
              <img src="/Homepage/icons/download-cloud-02.svg" alt="download-icon" />
            </a>
          </div>
        </div>
        <div className={styles["ht-img-container"]}>
          <div className={styles["htimg"]}>
            <Image
              layout="fill"
              objectFit="cover"
              alt="loading"
              src="/Homepage/Image/banner.webp"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,L29j#i{4@*Ez06E9?RQp?n?rB$%X"
            />
          </div>
          <div className={styles["ht-corner"]}>
            <div className={styles["ht-corner__img"]}>
              <Image layout="fill" alt="loading" src="/Homepage/Image/trophy.webp" />
            </div>
            <p>#1 Roblox Script provider</p>
          </div>
        </div>
      </div>
      <HomeData statistics={statistics} />
      <HomeFeatureSec />
      <HomeMps scripts={script_hviews} />
      <HomeRecent scripts={scripts} />
    </div>
  );
}
