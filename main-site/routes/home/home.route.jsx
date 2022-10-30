import styles from "./home.module.scss";
import Link from "next/link";

import ScriptCard from "../../components/script-card/script-card.component";
import Carousel2 from "../../components/carousel/carousel.component";
import Background from "../../components/backgroundmod/backgroundmod.component";
import { useContext, useEffect, useState } from "react";
import { WidthContext } from "../../contexts/screenwidth/screenwidth.context";
// import { AllScriptContext } from "../../contexts/allscripts/scripts.context";

export default function Home({ statistics, scripts }) {
  // const { scripts } = useContext(AllScriptContext);
  const [shortscripts, setShortScripts] = useState([]);
  const [shortscriptspopular, setShortScriptsPopular] = useState([]);
  const screenwidth = useContext(WidthContext);
  useEffect(() => {
    function dateComparison(a, b) {
      const date1 = new Date(a.date);
      const date2 = new Date(b.date);
      return date2 - date1;
    }
    function viewComparison(a, b) {
      return b.views - a.views;
    }
    async function getscripts(cancel) {
      if (cancel) return;
      scripts.sort(viewComparison);
      setShortScriptsPopular(scripts.slice(0, 6));
      scripts.sort(dateComparison);
    }
    getscripts(scripts ? false : true);
    return () => {};
  }, [scripts]);

  useEffect(() => {
    function getshortarr(arr, num) {
      // const shuffled = [...arr].sort(() => 0.5 - Math.random());
      if (!arr) return [];
      return arr.slice(0, num);
    }
    setShortScripts(getshortarr(scripts, screenwidth >= 1600 ? 8 : 6));
  }, [scripts, screenwidth]);

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
          <img alt="loading" src="/Homepage/Image/banner.webp" className={styles["htimg"]} />
          <div className={styles["ht-corner"]}>
            <img alt="loading" src="/Homepage/Image/trophy.png" />
            <p>#1 Roblox Script provider</p>
          </div>
        </div>
      </div>
      <div className={styles["home-data"]}>
        <div className={styles["ht-data__mod"]}>
          <div className={styles["ht-data"]}>
            <div className={styles["ht-data-inside"]}>
              <p className={styles["ht-data-no"]}>{statistics.total_scripts}</p>
              <p className={styles["ht-data-name"]}>Total scripts posted</p>
            </div>
            <div className={styles["ht-data-inside"]}>
              <p className={styles["ht-data-no"]}>{statistics.total_scripts_month}</p>
              <p className={styles["ht-data-name"]}>Total scripts this month</p>
            </div>
            <div className={styles["ht-data-inside"]}>
              <p className={styles["ht-data-no"]}>{statistics.total_views}</p>
              <p className={styles["ht-data-name"]}>Total scripts views</p>
            </div>
            <div className={styles["ht-data-inside"]}>
              <p className={styles["ht-data-no"]}>{statistics.total_views_month}</p>
              <p className={styles["ht-data-name"]}>Total scripts views this month</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["home-features"]}>
        <Background />
        <div className={styles["background-header"]}>Features</div>
        <div className={styles["hf-left"]}>
          <div className={styles["hf-top-content"]}>
            <h3 className={styles["hf-header"]}>Why to choose us?</h3>
            <p className={styles["hf-hp"]}>
              Scripthome{`'`}s mission is to provide scripts and help the players in making their
              roblox game journey pleasing to play through.
            </p>
          </div>
          <div className={styles["hf-features-wrapper"]}>
            <div className={styles["hf-features"]}>
              <img
                alt="loading"
                className={styles["hficon"]}
                src="/Homepage/icons/Featured icon.png"
              />
              <div className={styles["hf-text"]}>
                <h4 className={styles["hf-subheader"]}>Premium Roblox Scripts</h4>
                <p className={styles["hf-subp"]}>
                  Scripthome provides a huge collection of scripts for Roblox players. You can find
                  everything from premium to free scripts on Scripthome.
                </p>
              </div>
            </div>
            <div className={styles["hf-features"]}>
              <img
                alt="loading"
                className={styles["hficon-2"]}
                src="/Homepage/icons/Featured icon-2.png"
              />
              <div className={styles["hf-text"]}>
                <h4 className={styles["hf-subheader"]}>Daily New Uploads</h4>
                <p className={styles["hf-subp"]}>
                  Our team are uploading new scripts everyday to keep you up to date for using it in
                  your favourite games.
                </p>
              </div>
            </div>
            <div className={styles["hf-features"]}>
              <img
                alt="loading"
                className={styles["hficon-3"]}
                src="/Homepage/icons/Featured icon-3.png"
              />
              <div className={styles["hf-text"]}>
                <h4 className={styles["hf-subheader"]}>Our Community</h4>
                <p className={styles["hf-subp"]}>
                  Join the Scripthome community to get access to exclusive perks like getting
                  notified whenever a new scripts uploads.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["hf-right"]}>
          <img alt="loading" src="/Homepage/featured-section/iphone-mockup.webp" />
        </div>
      </div>
      <div className={styles["mps"]}>
        <div className={styles["mps-inside"]}>
          <div className={styles["mps-header"]}>
            <p>
              Most Popular{" "}
              <span>
                Scripts <img alt="loading" src="/homepage/pattern/most-popular-scribble.svg" />
              </span>
            </p>
          </div>
          <Carousel2 scripts={shortscriptspopular} />
        </div>
      </div>
      <div className={styles["recentu"]}>
        <Background />
        <div className={styles["background-header"]}>Uploads</div>
        <div className={styles["recentu-top"]}>
          <p>Recent Uploads</p>
          <Link href="/scripts">
            <a className={styles["styled-button__mod"]}>
              <span>View all</span>
              <img src="/Script/Icons/arrow-square-right.svg" alt="" />
            </a>
          </Link>
        </div>
        <div className={styles["recentu-bottom"]}>
          {shortscripts.map((script, key) => {
            return <ScriptCard script={script} key={key} />;
          })}
        </div>
        <a className={styles["styled-button__trip"]}>
          <span>View all</span>
          <img src="/Script/Icons/arrow-square-right.svg" alt="" />
        </a>
      </div>
    </div>
  );
}
