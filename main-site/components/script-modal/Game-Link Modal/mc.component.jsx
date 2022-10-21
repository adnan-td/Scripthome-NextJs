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
  const gamelink = 'roblox.com/games/4036494886/10X-Gun-Simulator';
  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["Script-Modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <div className={styles["div-header-wrapper"]}>
            <div className={styles["header-content-mod"]}>
              <img src="/Script/Modal-Icons/Game-Link-Icon.svg" alt="mail-icon" />
              <div className={styles["header-content-mod__text"]}>
                <p className={styles["header-content-mod__text__title"]}>Having Trouble Joining?</p>
                <p className={styles["header-content-mod__text__sub"]}>Here is the link to the Game page, Use this if roblox doesn{"'"}t open automatically.</p>
              </div>
            </div>
            <div className={styles["gamediv"]}>
              <p className={styles["gamediv__label"]}>Game Link</p>
              <div className={styles["gamediv__wrapper"]}>
                <div className={styles["gamediv__wrapper__content"]}>
                  <p className={styles["gamediv__wrapper__content__link"]}>{gamelink}</p>
                </div>
                <button className={styles["gamediv__wrapper__button"]}>
                <img className={styles["gamediv__wrapper__button__img"]} src="/Script/Modal-Icons/copy-01.svg" alt="copy-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["bottom-button"]}>
        <a className={styles["anchorlink"]} onClick={handleClose}>
          <button className={styles["cancel-button"]}>
            Cancel
          </button>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={gamelink}
            className={styles["anchorlink"]}
          >
          <button className={styles["next-button-mod-game"]}>Go to Game</button>
          </a>
        </div>
      </div>
    </div>
  );
};
