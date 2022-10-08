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
              <img src="/Script/im.svg" alt="loading" />
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
                  <img src="/script/icons/eye.svg" alt="loading" /> <span>1024 views</span>
                </div>
                <div className={styles["user-views"]}>
                  <img src="/script/icons/calendar.svg" alt="loading" /> <span>22/08/2022</span>
                </div>
              </div>
              <h2>Thief Simulator Script | Auto Rob NPC, Make Money Fast</h2>
            </div>
            <div className={styles["scripts-left-buttons"]}>
              <button className={styles["styled-button"]}>
                <span>Get Script</span>
                <img src="/script/icons/arrow-square-right.svg" alt="Get Script Button" />
              </button>
              <button className={styles["game-link"]}>
                <span>Game Link</span>
                <img src="/Script/Icons/game-link-icon.svg" alt="Game Link Button" />
              </button>
              <button className={styles["watch-video"]}>
                <span>Watch Video</span>
                <img src="/Script/Icons/youtube.svg" alt="Youtube Button" />
              </button>
              <button className={styles["report-script"]}>
                <span>Report Script</span>
                <img src="/Script/Icons/report-script-flag.svg" alt="Report Script Button" />
              </button>
            </div>
            <div className={styles["authorbox"]}>
              <div className={styles["leftauthor"]}>
                <p className={styles["madeby"]}>Made by</p>
                <br />
                <div className={styles["authorboxc1"]}>
                  <img
                    src="/script/avatars/avatar2.png"
                    alt="author1_image"
                    className={styles["authorimage1"]}
                  />
                  <div className={styles["authorboxc2"]}>
                    <h4 className={styles["contentauthor1"]}>Alkeides Prudence</h4>
                    <p className={styles["lighttext"]}>Script Developer</p>
                  </div>
                </div>
              </div>
              <div className={styles["rightauthor"]}>
                <p className={styles["uploadby"]}>Uploaded by</p>
                <br />
                <div className={styles["authorboxc1"] + " " + styles["authorboxc12"]}>
                  <img
                    src="/script/avatars/avatar.png"
                    alt="author2_image"
                    className={styles["authorimage2"]}
                  />
                  <div className={styles["authorboxc2"] + " " + styles["authorboxc3"]}>
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
                This new script for Thief Simulator allows you to make quite a good amount of money
                in no time. The script will basically loop teleport you to robbable players and
                automatically steal their money. Pretty insane, make sure to check it out!
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
                  <img src="/script/icons/arrow-square-right.svg" alt="arrow-icon" />
                  <span>Previous</span>
                </button>
                <button className={styles["styled-button"]}>
                  <span>Next</span>
                  <img src="/script/icons/arrow-square-right.svg" alt="arrow-icon" />
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
        <img alt="loading" src="/script/avatars/avatar.png" className={styles["white-border"]} />
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
