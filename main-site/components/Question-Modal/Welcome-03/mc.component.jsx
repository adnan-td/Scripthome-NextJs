import styles from "./mc.module.scss";
import Image from "next/image";

const Modalmc = ({ handleClose, next }) => {
  const handleNext = () => {
    next(4);
  };
  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div
        className={styles["Script-Modal"]}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles["header-wrapper"]}>
          <div className={styles["h-img-wrap"]}>
            {/* <img src="/Question-Modal/Welcome-03.jpg" alt="" className={styles["welcome-img"]} /> */}
            <Image
              layout="fill"
              src="/Question-Modal/Welcome-03.jpg"
              alt="welcomeimg"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,LlP;re*C^N$$t$OYw]s+xtniNIX7"
            />
          </div>
          <div className={styles["h-content-div"]}>
            <p className={styles["h-content-1"]}>Our Discord Server</p>
            <p className={styles["h-content-2"]}>
              Joining our exclusive discord server gives you the ablitity to get
              notified when new videos and scripts are uploaded.
            </p>
          </div>
          <div className={styles["dot-wrapper"]}>
            <div className={styles["dot-div"]}></div>
            <div className={styles["dot-div"]}></div>
            <div
              className={styles["dot-div"] + " " + styles["dot-div-active"]}
            ></div>
            <div className={styles["dot-div"]}></div>
            <div className={styles["dot-div"]}></div>
          </div>
        </div>
        <div className={styles["bottom-button"]}>
          <a className={styles["anchorlink"]} onClick={handleNext}>
            <button className={styles["cancel-button"]}>Skip</button>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/aVxZkmjhtb"
            className={styles["anchorlink"]}
          >
            <button className={styles["next-button"]}>Join Server</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
