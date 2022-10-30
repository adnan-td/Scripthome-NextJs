import styles from "./scripts.module.scss";

import ScriptPreview from "../../components/script-preview/preview.component";
import Tabs from "../../components/tabs/tabs.component";
import Panel from "../../components/tabs/panel.component";
import Background from "../../components/background/background.component";
import FeaturedTag from "../../components/featuredtag/featuredtag.component";
import GetScriptModal from "../../components/script-modal/Get-Script-Modal/mc.component";
import WatchVideoModal from "../../components/script-modal/Youtube-Modal/mc.component";
import ReportScriptModal from "../../components/script-modal/Report-Script-Modal/mc.component";
import GameLinkModal from "../../components/script-modal/Game-Link Modal/mc.component";
import Link from "next/link";
import axios from "axios";
import { hostname } from "../../../config/hostname";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../contexts/user/user.context";
import { toast } from "react-toastify";
import { AllScriptContext } from "../../contexts/allscripts/scripts.context";

const Scripts = ({ script, comments }) => {
  var slugify = require("slugify");
  const { scripts: allscripts } = useContext(AllScriptContext);
  const [scriptuser, setsu] = useState({});
  const [shortscripts, setss] = useState([]);
  const [inputActive, setIA] = useState(false);
  const [inputBody, setInput] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const { user, status } = useContext(UserContext);
  const inputRef = useRef(null);
  function viewsComparison(a, b) {
    const views1 = a.views;
    const views2 = b.views;
    return views2 - views1;
  }

  useEffect(() => {
    async function getLike() {
      const res = await axios({
        method: "post",
        url: `${hostname}/api/likes`,
        data: {
          method: "get",
          id_user: user?.id,
          id_script: script.id,
        },
      });
      setIsLiked(res.data?.isLiked);
    }
    if (!user) {
      setIsLiked(false);
    } else {
      getLike();
    }
  }, [user, script]);

  useEffect(() => {
    allscripts.sort(viewsComparison);
    setss(allscripts.slice(0, 6));
  }, [allscripts]);

  useEffect(() => {
    async function getscriptusername(id) {
      const res = await axios({
        method: "get",
        url: `${hostname}/api/users/${id}`,
      });
      setsu(res.data);
    }
    getscriptusername(script.user_id);
  }, [script.user_id]);

  async function handleLikeButton() {
    if (isLiked) {
      await handleRemoveLike();
    } else {
      handleLike();
    }
  }

  async function handleLike() {
    if (!user) {
      setIsLiked(false);
      toast.error("Please login to Like!");
    } else {
      await axios({
        method: "post",
        url: `${hostname}/api/likes`,
        data: {
          method: "add",
          id_user: user?.id,
          id_script: script.id,
        },
      });
      setIsLiked(true);
      script.likes += 1;
    }
  }

  async function handleRemoveLike() {
    if (!user) {
      setIsLiked(false);
      toast.error("Please login to Like!");
    } else {
      await axios({
        method: "post",
        url: `${hostname}/api/likes`,
        data: {
          method: "remove",
          id_user: user?.id,
          id_script: script.id,
        },
      });
      setIsLiked(false);
      script.likes -= 1;
    }
  }

  async function handleSubmitComment() {
    if (inputBody.length < 5) {
      toast.error("Comment is too short!");
    } else if (status === "authenticated") {
      await axios({
        method: "post",
        url: `${hostname}/api/comments`,
        data: {
          method: "add",
          comment: {
            body: inputBody,
            comment_by: user.id,
            script_id: script.id,
          },
        },
      });
      toast.success("Comment posted Successfully!");
      comments.push({
        body: inputBody,
        img: user.img,
        name: user.name,
        role: user.role,
      });
      setInput("");
    } else {
      toast.error("Please login for posting comments!");
    }
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIA(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(inputRef);

  return (
    <div className={styles["scripts-main"]}>
      <Background />
      <div className={styles["scripts-left"]}>
        <div className={styles["scripts-left-content"]}>
          <div className={styles["script-top-div"]}>
            <button
              className={
                isLiked
                  ? styles["scripts-like"] + " " + styles["scripts-like__active"]
                  : styles["scripts-like"]
              }
              onClick={handleLikeButton}
            >
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 9.48C1 5.97111 3.65774 2 7.88889 2C9.71593 2 11.0661 2.7105 12 3.51082C12.9339 2.7105 14.2841 2 16.1111 2C20.3423 2 23 5.97111 23 9.48C23 11.3254 22.2854 13.0297 21.293 14.5091C20.2998 15.9897 18.9924 17.2999 17.7111 18.3798C16.4261 19.4629 15.1397 20.3372 14.1636 20.9411C13.6749 21.2435 13.2596 21.4807 12.9558 21.6447C12.8047 21.7263 12.6762 21.7924 12.5771 21.8404C12.5289 21.8637 12.4787 21.8871 12.4319 21.9068C12.4098 21.9161 12.3759 21.9299 12.3368 21.9431C12.3177 21.9496 12.2854 21.9601 12.2456 21.9699C12.2202 21.9762 12.1237 22 12 22C11.8763 22 11.7805 21.9763 11.7551 21.9701C11.7153 21.9602 11.6823 21.9496 11.6632 21.9431C11.6241 21.9299 11.5902 21.9161 11.5681 21.9068C11.5213 21.8871 11.4711 21.8637 11.4229 21.8404C11.3238 21.7924 11.1953 21.7263 11.0442 21.6447C10.7404 21.4807 10.3251 21.2435 9.83637 20.9411C8.86027 20.3372 7.57395 19.4629 6.28889 18.3798C5.00758 17.2999 3.70022 15.9897 2.70703 14.5091C1.71464 13.0297 1 11.3254 1 9.48Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className={["script-like-span"]}>
                {isLiked ? <p className={styles["script-like-para"]}>{script.likes}</p> : "Like"}
              </p>
            </button>
            <div className={styles["scripts-img"]}>
              <img src={script.img} alt="loading" />
            </div>
          </div>
          <div className={styles["top-content-div"]}>
            <div className={styles["view_title_div"]}>
              <div className={styles["top_div_part"]}>
                <div className={styles["user-views"]}>
                  <img src="/script/icons/eye.svg" alt="loading" />{" "}
                  <span>{script.views} views</span>
                </div>
                <div className={styles["user-views"]}>
                  <img src="/script/icons/calendar.svg" alt="loading" />{" "}
                  <span>{new Date(script.date).toDateString()}</span>
                </div>
              </div>
              <h2>{script.title}</h2>
            </div>
            <div className={styles["scripts-left-buttons"]}>
              <GetScriptModal
                className={styles["styled-button"] + " " + styles["button__style"]}
                code={script.script_code}
              >
                <span className={styles["button__style__span"]}>Get Script</span>
                <img src="/script/icons/arrow-square-right.svg" alt="Get Script Button" />
              </GetScriptModal>
              <GameLinkModal
                className={styles["game-link"] + " " + styles["button__style"]}
                link={script.gameLink}
              >
                <span className={styles["button__style__span"]}>Join Game</span>
                <img src="/Script/Icons/game-link-icon.svg" alt="Game Link Button" />
              </GameLinkModal>
              <WatchVideoModal
                className={styles["watch-video"] + " " + styles["button__style"]}
                link={script.youtubeLink}
              >
                <span className={styles["button__style__span"]}>Watch Video</span>
                <img src="/Script/Icons/youtube.svg" alt="Youtube Button" />
              </WatchVideoModal>
              <ReportScriptModal
                className={styles["report-script"] + " " + styles["button__style"]}
                script_id={script.id}
                reported_by={user?.id}
                status={status}
              >
                <span className={styles["button__style__span"]}>Report Script</span>
                <img src="/Script/Icons/report-script-flag.svg" alt="Report Script Button" />
              </ReportScriptModal>
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
                    <h4 className={styles["contentauthor1"]}>{script.madeby}</h4>
                    <p className={styles["lighttext"]}>Script Developer</p>
                  </div>
                </div>
              </div>

              <div className={styles["rightauthor"]}>
                <p className={styles["uploadby"]}>Uploaded by</p>
                <Link
                  href={`/users/${slugify(scriptuser.name ? scriptuser.name : "null", {
                    lower: true,
                  })}`}
                >
                  <div
                    className={styles["authorboxc1"] + " " + styles["authorboxc12"]}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={scriptuser.img}
                      alt="author2_image"
                      className={styles["authorimage2"]}
                    />
                    <div className={styles["authorboxc2"] + " " + styles["authorboxc3"]}>
                      <h4 className={styles["contentauthor1"]}>{scriptuser.name}</h4>
                      <p className={styles["lighttext"]}>25+ Scripts Uploaded</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Tabs>
            <Panel title="Description">
              <p className={styles["panel1"]}>{script.description}</p>
            </Panel>
            <Panel title="Features">
              <div className={styles["featured-tags"]}>
                <p className={styles["ft-header"]}>Featured Tags</p>
                <div className={styles["ft-icon-wrapper"]}>
                  <FeaturedTag tags={script.features} />
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
                  <FeaturedTag tags={script.tags} />
                </div>
              </div>
            </Panel>
            <Panel title="Comments">
              <div
                className={
                  inputActive
                    ? styles["post-comment"] + " " + styles["post-comment--active"]
                    : styles["post-comment"]
                }
                ref={inputRef}
              >
                <img
                  alt="loading"
                  src="/script/avatars/avatar.png"
                  className={styles["white-border"]}
                />
                <div className={styles["post-comment__div"]}>
                  <input
                    className={styles["post-comment__div__input"]}
                    placeholder="Post a comment"
                    name="comment"
                    onClick={() => {
                      setIA(!inputActive);
                    }}
                    onChange={(e) => {
                      setInput(e.target.value);
                    }}
                    value={inputBody}
                  ></input>
                  <button
                    className={styles["post-comment__div__button"]}
                    onClick={handleSubmitComment}
                  >
                    <img
                      alt="loading"
                      src="/Script/Icons/comment-button.svg"
                      className={styles["arrow-img"]}
                    />
                  </button>
                </div>
              </div>
              <SpComments comments={comments} />
            </Panel>
          </Tabs>
        </div>
      </div>
      <div className={styles["scripts-right"]}>
        <h2>Most Popular Scripts</h2>
        <div className={styles["script-cards"]}>
          {shortscripts.map((script, key) => {
            return <ScriptPreview script={script} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Scripts;

const SpComments = ({ comments }) => {
  const [cur, setcur] = useState(0);
  const range = 5;
  return (
    <>
      <div className={styles["sp-comments"]}>
        {comments.map((comment, id) => {
          if (id >= cur && id < cur + range) {
            return <SpComment comment={comment} key={id} />;
          }
        })}
      </div>
      <div className={styles["sp-buttons"]}>
        <button
          className={styles["previous-button"]}
          onClick={() => {
            if (cur - range < 0) return;
            else setcur(cur - range);
          }}
        >
          <img src="/script/icons/arrow-square-right.svg" alt="arrow-icon" />
          <span>Previous</span>
        </button>
        <button
          className={styles["styled-button"]}
          onClick={() => {
            if (cur + range >= comments.length) return;
            else setcur(cur + range);
          }}
        >
          <span>Next</span>
          <img src="/script/icons/arrow-square-right.svg" alt="arrow-icon" />
        </button>
      </div>
    </>
  );
};

function SpComment({ comment }) {
  var slugify = require("slugify");
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
        <Link href={`/users/${slugify(comment.name, { lower: true })}`}>
          <img
            alt="loading"
            src={comment.img}
            className={styles["white-border"]}
            style={{ cursor: "pointer" }}
          />
        </Link>
        <div className={styles["sp-comment__wrapper"]}>
          <p className={styles["sp-c-content"]}>{comment.body}</p>
          <div className={styles["sp-comment__wrapper__2"]}>
            <p className={styles["sp-c-name"]}>{comment.name}</p>
            {comment.role === 1 && (
              <div
                id="verified-user"
                className={styles["sp-c-tag"] + " " + styles["verified-user"]}
              >
                <img src="/Script/verified.svg" alt="" />
                Verified
              </div>
            )}

            {comment.role === 2 && (
              <div
                id="verified-user"
                className={styles["sp-c-tag"] + " " + styles["verified-user"]}
              >
                <img src="/Script/admin.svg" alt="" />
                Admin
              </div>
            )}

            {comment.role === 3 && (
              <div
                id="verified-user"
                className={styles["sp-c-tag"] + " " + styles["verified-user"]}
              >
                <img src="/Script/superadmin.svg" alt="" />
                Owner
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
