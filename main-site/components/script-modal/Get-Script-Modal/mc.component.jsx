import styles from "./mc.module.scss";
import { useState } from "react";

export default function GetScriptModal({ className, children }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className={className}>
        {children}
      </button>
      {show ? <Modalmc handleClose={handleClose} /> : ""}
    </>
  );
}

const Modalmc = ({ handleClose }) => {
  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["Script-Modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <div className={styles["div-header-wrapper"]}>
            <div className={styles["header-content"]}>
              <img src="/Modal-Icons/Script-Modal-Icon.svg" alt="mail-icon" />
              <p>Script</p>
            </div>
            <div className={styles["script-box"]}>
              <div className={styles["script-number"]}>
                <p className={styles["s-line-num"]}>1</p>
                <p className={styles["s-line-num"]}>2</p>
                <p className={styles["s-line-num"]}>3</p>
                <p className={styles["s-line-num"]}>4</p>
                <p className={styles["s-line-num"]}>5</p>
                <p className={styles["s-line-num"]}>6</p>
                <p className={styles["s-line-num"]}>7</p>
                <p className={styles["s-line-num"]}>8</p>
                <p className={styles["s-line-num"]}>9</p>
                <p className={styles["s-line-num"]}>10</p>
                <p className={styles["s-line-num"]}>11</p>
                <p className={styles["s-line-num"]}>12</p>
                <p className={styles["s-line-num"]}>13</p>
                <p className={styles["s-line-num"]}>14</p>
                <p className={styles["s-line-num"]}>15</p>
                <p className={styles["s-line-num"]}>16</p>
              </div>
              <div className={styles["right-script-text"]}>
                <p className={styles["script-text"]}>
                  <span>--</span>Powered by Scripthome.com<span>--</span>
                </p>
                <p className={styles["script-text"]}>_G.bruh = true</p>
                <p className={styles["script-text"]}>while _G.bruh do </p>
                <p className={styles["script-text"]}> wait()</p>
                <p className={styles["script-text"]}> .</p>
                <p className={styles["script-text"]}>
                  for _,v in next, game.Workspace:GetDescendants() do
                </p>
                <p className={styles["script-text"]}>if v.Name == {`"outerOrb"`} then</p>
                <p className={styles["script-text"]}>
                  {" "}
                  v.CFrame = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
                </p>
                <p className={styles["script-text"]}> elseif v.Name == {`"outerGem"`} then</p>
                <p className={styles["script-text"]}>
                  {" "}
                  v.CFrame = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
                </p>
                <p className={styles["script-text"]}>
                  {" "}
                  v.CFrame = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
                </p>
                <p className={styles["script-text"]}>
                  {" "}
                  v.CFrame = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
                </p>
                <p className={styles["script-text"]}>
                  {" "}
                  v.CFrame = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
                </p>
                <p className={styles["script-text"]}>
                  {" "}
                  v.CFrame = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
                </p>
                <p className={styles["script-text"]}>
                  {" "}
                  v.CFrame = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
                </p>
                <p className={styles["script-text"]}>
                  {" "}
                  v.CFrame = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["cancel-button"]} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles["next-button"]}>Copy Script</button>
        </div>
      </div>
    </div>
  );
};
