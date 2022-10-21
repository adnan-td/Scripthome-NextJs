import styles from "./mc.module.scss";

const Modalmc = ({ handleClose }) => {
  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["sign-up-modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["div-wrapper-reset"]}>
          <div className={styles["top-content"]}>
            <img src="/Modal/Illustration.svg" alt="ill-icon" className={styles["ill-icon"]} />
            <div className={styles["header-content"]}>
              <p>Log in to Admin Panel</p>
              <span>Welcome back! Please enter your details.</span>
            </div>
            <form className={styles["email-input"] + " " + styles["input-field"]}>
              <label htmlFor="">Email Address</label>
              <input type="email" title="Type your email address" />
            </form>
            <form className={styles["password-input"] + " " + styles["input-field"]}>
              <label htmlFor="">Password</label>
              <div className={styles["password-div"]}>
                <input type="password" />
                <img src="/Modal/sign-up/eye.svg" alt="show icon" />
              </div>
            </form>
          </div>
          <p className={styles["f-para"]}>
            Forgot your password?{" "}
            <a className={styles["f-anchor"]} href=" ">
              Click Here to reset it.
            </a>
          </p>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["next-button"]}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
