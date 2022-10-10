import styles from "./mc.module.scss";

const Modalmc = ({ handleClose }) => {
  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["Script-Modal"]} onClick={(e) => e.stopPropagation()}>
        <div className={styles["top-content"]}>
          <div className={styles["input-wrapper"]}>
            <img src="/Script/Modal-Icons/search-lg-black.svg" alt="" className={styles["search-lg-black"]} />
            <input type="text" placeholder="Search" className={styles["search-int"]} />
          </div>
          <div className={styles["script-not-found"]}>
            <div className={styles["scr-content"]}>
              <p className={styles["scr-title"]}>No Scripts Found</p>
              <p className={styles["scr-sub"]}>
                <span>“Auto aim bot</span>” did not match any uploaded scripts. Would you like to
                request the script for the Roblox game?
              </p>
            </div>
            <a href=" ">
              <button className={styles["scr-request-btn"]}>
                <img src="/Script/Modal-Icons/plus.svg" alt="" className={styles["plus-icon"]} />
                Request Script
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
