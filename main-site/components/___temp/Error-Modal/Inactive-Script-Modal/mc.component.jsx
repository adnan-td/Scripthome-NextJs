import styles from "./mc.module.scss";

const Modalmc = ({ handleClose }) => {
  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["Script-Modal"]} onClick={(e) => e.stopPropagation()}>
        <div className={styles["header-wrapper-mod"]}>
          <div className={styles["h-img-tag"]}>
            <img src="/Modal/Patched-Icon.svg" alt="" />
          </div>
          <div className={styles["h-content-div"]}>
            <p className={styles["h-content-1"]}>Script Patched</p>
            <p className={styles["h-content-2"]}>
              The following script has been patched by the developers. You can find more special
              scripts on the website.
            </p>
          </div>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["confirm-button"]}>Return to Home</button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
