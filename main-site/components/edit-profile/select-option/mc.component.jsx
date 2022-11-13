import styles from "./mc.module.scss";
import { useState } from "react";

const Modalmc = ({ handleClose, setShow }) => {
  const [selected, setSelected] = useState(0);
  const handleNext = () => {
    if (selected === 0) setShow("Upload");
    if (selected === 1) setShow("Eusername");
    if (selected === 2) setShow("Epass");
  };

  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["sign-up-modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <img src="/Edit-Profile-Modal/change-icon.svg" alt="mail-icon" />
          <div className={styles["header-content"]}>
            <p>Select an option</p>
            <span>Select the attribute which you want to change</span>
          </div>

          <div className={styles["div-wrapper-modal"]}>
            <Rows
              img="/Modal/sign-up/image-icon.svg"
              selected={selected === 0}
              text="Change the profile image"
              onClick={() => {
                setSelected(0);
              }}
            />
            <Rows
              img="/Edit-Profile-Modal/username-icon.svg"
              selected={selected === 1}
              text="Change username"
              onClick={() => {
                setSelected(1);
              }}
            />
            <Rows
              img="/Edit-Profile-Modal/lock-icon.svg"
              selected={selected === 2}
              text="Change password"
              onClick={() => {
                setSelected(2);
              }}
            />
          </div>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["cancel-button"]} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles["next-button"]} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;

function Rows({ img, selected, text, onClick }) {
  return (
    <div
      className={
        selected
          ? styles["uploading-div"] + " " + styles["uping-div-active"]
          : styles["uploading-div"]
      }
      onClick={onClick}
    >
      <div className={styles["d-flex-card"]}>
        <img src={img} className={styles["icon-img"]} alt="icon-bg" />
        <div className={styles["uping-content"]}>
          <p className={styles["uping-title"]}>{text}</p>
        </div>
      </div>
      {!selected ? (
        <div className={styles["uncheck-div"]}></div>
      ) : (
        <button className={styles["chec-icon-box"]}>
          <img
            src="/Modal/sign-up/checkbox-icon.svg"
            className={styles["close-icon-black"]}
            alt=""
          />
        </button>
      )}
    </div>
  );
}
