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
          <Image src={CloseIcon} alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <Image src={LockImg} alt="mail-icon" />
          <div className={styles["header-content"]}>
            <p>Password Change</p>
            <span>Enter new password for your account that you want to set.</span>
          </div>

          <form className={styles["password-input input-field"]}>
            <label htmlFor="">Old Password</label>
            <div className={styles["password-div"]}>
              <input type="password" />
              <Image src={EyeShow} alt="show icon" />
            </div>
          </form>

          <form className={styles["password-input input-field"]}>
            <label htmlFor="">New Password</label>
            <div className={styles["password-div"]}>
              <input type="password" />
              <Image src={EyeShow} alt="show icon" />
            </div>
          </form>
          <form className={styles["confirm-password-input input-field"]}>
            <label htmlFor="">Confirm Password</label>
            <div className={styles["password-div"]}>
              <input type="password" />
              <Image src={EyeShow} alt="show icon" />
            </div>
          </form>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["cancel-button"]} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles["next-button"]}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
