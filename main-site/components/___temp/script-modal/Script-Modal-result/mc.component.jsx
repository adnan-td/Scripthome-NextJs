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
          <div className={styles["script-found"]}>
            <p className={styles["result-num"]}>5 Scripts Found </p>
            <div className={styles["script-div-wrapper"]}>
              <div className={styles["script-div"]}>
                <div className={styles["script-img"]}></div>
                <div className={styles["content-div-script"]}>
                  <p className={styles["scripts-title"]}>Ninja Training Simulator</p>
                  <p className={styles["scripts-subheading"]}>
                    This Ninja Training Simulator Script can do many useful functions to play the
                    game more easily like autotap, autorebirth and more.
                  </p>
                </div>
              </div>
              <div className={styles["script-div"]}>
                <div className={styles["script-img"]}></div>
                <div className={styles["content-div-script"]}>
                  <p className={styles["scripts-title"]}>Ninja Training Simulator</p>
                  <p className={styles["scripts-subheading"]}>
                    This Ninja Training Simulator Script can do many useful functions to play the
                    game more easily like autotap, autorebirth and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
