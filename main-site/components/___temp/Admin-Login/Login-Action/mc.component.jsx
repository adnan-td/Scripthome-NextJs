import styles from "./mc.module.scss";

import EyeShow from "../../../assets/Modal/sign-up/eye.svg";

const Modalmc = ({ handleClose }) => {
  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className="sign-up-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-div" onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className="close-icon" />
        </button>
        <div className="div-wrapper-reset">
          <div className="top-content">
            <img src="/Modal/Illustration.svg" alt="ill-icon" className="ill-icon" />
            <div className="header-content">
              <p>Log in to your account</p>
              <span>Welcome back! Please enter your details.</span>
            </div>
            <form className="email-input input-field">
              <label htmlFor="">Email Address</label>
              <input type="email" title="Type your email address" />
            </form>
            <form className="password-input input-field">
              <label htmlFor="">Password</label>
              <div className="password-div">
                <input type="password" />
                <img src="/Modal/sign-up/eye.svg" alt="show icon" />
              </div>
            </form>
          </div>
          <p className="f-para">
            Forgot your password?{" "}
            <a className="f-anchor" href=" ">
              Click Here to reset it.
            </a>
          </p>
        </div>
        <div className="bottom-button">
          <button className="next-button">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
