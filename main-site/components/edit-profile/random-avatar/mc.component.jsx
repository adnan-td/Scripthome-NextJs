import { useEffect, useState } from "react";
import styles from "./mc.module.scss";

const Modalmc = ({ handleClose, newuser, setnewuser, setShow }) => {
  const [avatar, setavatar] = useState(null);
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function handleGenerate() {
    setavatar(`/default-avatars/${getRandomInt(1, 21)}.jpg`);
  }
  function handleNext() {
    setnewuser({ ...newuser, img: avatar });
    setShow("Confirm");
  }

  useEffect(() => {
    setavatar(`/default-avatars/${getRandomInt(1, 21)}.jpg`);
  }, []);

  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["sign-up-modal"]} onClick={(e) => e.stopPropagation()}>
        <div className={styles["top-content"]}>
          <div className={styles["header-content-mod"]}>
            <div className={styles["avatar-div"]}>
              <img src={avatar} alt="Avatar PNG" />
            </div>
            <p>Choose an Avatar</p>
          </div>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["cancel-button"]} onClick={handleGenerate}>
            Generate Again
          </button>
          <button className={styles["next-button"]} onClick={handleNext}>
            Confirm Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
