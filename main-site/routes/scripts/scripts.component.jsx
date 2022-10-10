import styles from "./scripts.module.scss";

import ScriptPreview from "../../components/script-preview/preview.component";
import Tabs from "../../components/tabs/tabs.component";
import Panel from "../../components/tabs/panel.component";
import Background from "../../components/background/background.component";
import FeaturedTag from "../../components/featuredtag/featuredtag.component";

const Scripts = () => {
  return (
    <div className={styles["scripts-main"]}>
      <Background />
      <div className={styles["scripts-left"]}>
        <div className={styles["scripts-left-content"]}>
          <div className={styles["script-top-div"]}>
            <a href=" " className={styles["scripts-like"]}>
              {/* <img src="/Script/im.svg" alt="loading" /> */}
              <svg
                className={styles["heart__like"]}
                id="mysvg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1 9.48C1 5.97111 3.65774 2 7.88889 2C9.71593 2 11.0661 2.7105 12 3.51082C12.9339 2.7105 14.2841 2 16.1111 2C20.3423 2 23 5.97111 23 9.48C23 11.3254 22.2854 13.0297 21.293 14.5091C20.2998 15.9897 18.9924 17.2999 17.7111 18.3798C16.4261 19.4629 15.1397 20.3372 14.1636 20.9411C13.6749 21.2435 13.2596 21.4807 12.9558 21.6447C12.8047 21.7263 12.6762 21.7924 12.5771 21.8404C12.5289 21.8637 12.4787 21.8871 12.4319 21.9068C12.4098 21.9161 12.3759 21.9299 12.3368 21.9431C12.3177 21.9496 12.2854 21.9601 12.2456 21.9699C12.2202 21.9762 12.1237 22 12 22C11.8763 22 11.7805 21.9763 11.7551 21.9701C11.7153 21.9602 11.6823 21.9496 11.6632 21.9431C11.6241 21.9299 11.5902 21.9161 11.5681 21.9068C11.5213 21.8871 11.4711 21.8637 11.4229 21.8404C11.3238 21.7924 11.1953 21.7263 11.0442 21.6447C10.7404 21.4807 10.3251 21.2435 9.83637 20.9411C8.86027 20.3372 7.57395 19.4629 6.28889 18.3798C5.00758 17.2999 3.70022 15.9897 2.70703 14.5091C1.71464 13.0297 1 11.3254 1 9.48Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Like</span>
            </a>
            <div className={styles["scripts-img"]}>
              <img src="/Script/Image/Main-image.jpg" alt="loading" />
            </div>
          </div>
          <div className={styles["top-content-div"]}>
            <div className={styles["view_title_div"]}>
              <div className={styles["top_div_part"]}>
                <div className={styles["user-views"]}>
                  <img src="/script/icons/eye.svg" alt="loading" />{" "}
                  <span>1024 views</span>
                </div>
                <div className={styles["user-views"]}>
                  <img src="/script/icons/calendar.svg" alt="loading" />{" "}
                  <span>22/08/2022</span>
                </div>
              </div>
              <h2>Thief Simulator Script | Auto Rob NPC, Make Money Fast</h2>
            </div>
            <div className={styles["scripts-left-buttons"]}>
              <button className={styles["styled-button"]}>
                <span>Get Script</span>
                <img
                  src="/script/icons/arrow-square-right.svg"
                  alt="Get Script Button"
                />
              </button>
              <button className={styles["game-link"]}>
                <span>Join Game</span>
                <img
                  src="/Script/Icons/game-link-icon.svg"
                  alt="Game Link Button"
                />
              </button>
              <button className={styles["watch-video"]}>
                <span>Watch Video</span>
                <img src="/Script/Icons/youtube.svg" alt="Youtube Button" />
              </button>
              <button className={styles["report-script"]}>
                <span>Report Script</span>
                <img
                  src="/Script/Icons/report-script-flag.svg"
                  alt="Report Script Button"
                />
              </button>
            </div>
            <div className={styles["authorbox"]}>
              <div className={styles["leftauthor"]}>
                <p className={styles["madeby"]}>Made by</p>
                <div className={styles["authorboxc1"]}>
                  <img
                    src="/script/avatars/avatar2.png"
                    alt="author1_image"
                    className={styles["authorimage1"]}
                  />
                  <div className={styles["authorboxc2"]}>
                    <h4 className={styles["contentauthor1"]}>
                      Alkeides Prudence
                    </h4>
                    <p className={styles["lighttext"]}>Script Developer</p>
                  </div>
                </div>
              </div>
              <div className={styles["rightauthor"]}>
                <p className={styles["uploadby"]}>Uploaded by</p>
                <div
                  className={
                    styles["authorboxc1"] + " " + styles["authorboxc12"]
                  }
                >
                  <img
                    src="/script/avatars/avatar.png"
                    alt="author2_image"
                    className={styles["authorimage2"]}
                  />
                  <div
                    className={
                      styles["authorboxc2"] + " " + styles["authorboxc3"]
                    }
                  >
                    <h4 className={styles["contentauthor1"]}>Issac Goma</h4>
                    <p className={styles["lighttext"]}>25+ Scripts Uploaded</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Tabs>
            <Panel title="Description">
              <p className={styles["panel1"]}>
                This new script for Thief Simulator allows you to make quite a
                good amount of money in no time. The script will basically loop
                teleport you to robbable players and automatically steal their
                money. Pretty insane, make sure to check it out!
              </p>
            </Panel>
            <Panel title="Features">
              <div className={styles["featured-tags"]}>
                <p className={styles["ft-header"]}>Featured Tags</p>
                <div className={styles["ft-icon-wrapper"]}>
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                </div>
              </div>
              <hr
                style={{
                  margin: "2rem 0",
                  border: "1px solid rgba(105, 65, 198, 0.3)",
                }}
              />
              <div className={styles["featured-tags"]}>
                <p className={styles["ft-header"]}>Tags</p>
                <div className={styles["ft-icon-wrapper"]}>
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                </div>
              </div>
            </Panel>
            <Panel title="Comments">
              <div className={styles["post-comment"]}>
                <img
                  alt="loading"
                  src="/script/avatars/avatar.png"
                  className={styles["white-border"]}
                />
                <div>
                  <p>Post a comment</p>
                  <img
                    alt="loading"
                    src="/Script/Icons/comment-button.svg"
                    className={styles["arrow-img"]}
                  />
                </div>
              </div>
              <div className={styles["sp-comments"]}>
                <SpComment />
                <SpComment />
                <SpComment />
                <SpComment />
              </div>
              <div className={styles["sp-buttons"]}>
                <button className={styles["previous-button"]}>
                  <img
                    src="/script/icons/arrow-square-right.svg"
                    alt="arrow-icon"
                  />
                  <span>Previous</span>
                </button>
                <button className={styles["styled-button"]}>
                  <span>Next</span>
                  <img
                    src="/script/icons/arrow-square-right.svg"
                    alt="arrow-icon"
                  />
                </button>
              </div>
            </Panel>
          </Tabs>
        </div>
      </div>
      <div className={styles["scripts-right"]}>
        <h2>Most Popular Scripts</h2>
        <div className={styles["script-cards"]}>
          <ScriptPreview />
          <ScriptPreview />
          <ScriptPreview />
          <ScriptPreview />
          <ScriptPreview />
          <ScriptPreview />
        </div>
      </div>
    </div>
  );
};

export default Scripts;

const SpComment = () => {
  return (
    <>
      <hr
        style={{
          margin: "5px 0",
          border: "1px solid rgba(105, 65, 198, 0.3)",
          width: "100%",
        }}
      />
      <div className={styles["sp-comment"]}>
        <img
          alt="loading"
          src="/script/avatars/avatar.png"
          className={styles["white-border"]}
        />
        <div>
          <p className={styles["sp-c-content"]}>
            Where to grow your business as a photographer: site or social media?
          </p>
          <p className={styles["sp-c-name"]}>EstherHoward</p>
        </div>
      </div>
    </>
  );
};
