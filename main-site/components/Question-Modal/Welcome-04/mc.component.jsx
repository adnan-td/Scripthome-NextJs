import styles from "./mc.module.scss";
import Image from "next/image";

const Modalmc = ({ handleClose, next }) => {
  const handleNext = () => {
    next(5);
  };
  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div
        className={styles["Script-Modal"]}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles["header-wrapper"]}>
          <div className={styles["h-img-wrap"]}>
            {/* <img src="/Question-Modal/Welcome-04.jpg" alt="" className={styles["welcome-img"]} /> */}
            <Image
              layout="fill"
              src="/Question-Modal/Welcome-04.jpg"
              alt="welcomeimg"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,L7EC-w0LPYRYI$t^N$twPaRXm[S#"
            />
          </div>
          <div className={styles["h-content-div"]}>
            <p className={styles["h-content-1"]}>Earn with Us</p>
            <p className={styles["h-content-2"]}>
              Earn Money by partnering with us. Join our server to get more
              details on how you can earn with us.
            </p>
          </div>
          <div className={styles["dot-wrapper"]}>
            <div className={styles["dot-div"]}></div>
            <div className={styles["dot-div"]}></div>
            <div className={styles["dot-div"]}></div>
            <div
              className={styles["dot-div"] + " " + styles["dot-div-active"]}
            ></div>
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
            <button className={styles["next-button"]}>Earn Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
