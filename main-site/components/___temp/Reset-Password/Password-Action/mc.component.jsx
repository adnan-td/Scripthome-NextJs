import "./mc.module.scss";

const Modalmc = ({ handleClose }) => {
  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["sign-up-modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <img src="/Edit-Profile-Modal/lock-icon.svg" alt="mail-icon" />
          <div className={styles["header-content"]}>
            <p>Confirm Password Change</p>
            <span>Enter a new password for your scripthome account.</span>
          </div>

          <form className={styles["password-input" + " " + styles["input-field"]]}>
            <label htmlFor="">New Password</label>
            <div className={styles["password-div"]}>
              <input type="password" />
              <img src="/Modal/sign-up/eye.svg" alt="show icon" />
            </div>
          </form>
          <form className={styles["password-input" + " " + styles["input-field"]]}>
            <label htmlFor="">Confirm Password</label>
            <div className={styles["password-div"]}>
              <input type="password" />
              <img src="/Modal/sign-up/eye.svg" alt="show icon" />
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
