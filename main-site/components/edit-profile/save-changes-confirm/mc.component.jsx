import styles from "./mc.module.scss";
import LockImg from "../../../../public/Edit-Profile-Modal/lock-icon.svg";
import EyeShow from "../../../../public/Modal/sign-up/eye.svg";
import CloseIcon from "../../../../public/Modal/sign-up/x-close.svg";
import Image from "next/image";

const Modalmc = ({ handleClose }) => {
  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["sign-up-modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src={CloseIcon} alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <img src={LockImg} alt="mail-icon" />
          <div className={styles["header-content"]}>
            <p>Confirm Changes</p>
            <span>Enter your password to confirm the changes.</span>
          </div>

          <form className={styles["password-input input-field"]}>
            <label htmlFor="">Your Password</label>
            <div className={styles["password-div"]}>
              <input type="password" />
              <img src={EyeShow} alt="show icon" />
            </div>
          </form>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["cancel-button"]} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles["next-button"]}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
