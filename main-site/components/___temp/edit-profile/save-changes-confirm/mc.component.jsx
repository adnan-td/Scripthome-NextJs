import "./mc.module.scss";
import LockImg from "../../../assets/Edit-Profile-Modal/lock-icon.svg";
import EyeShow from "../../../assets/Modal/sign-up/eye.svg";
import CloseIcon from "../../../assets/Modal/sign-up/x-close.svg";

const Modalmc = ({ handleClose }) => {
  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="sign-up-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-div" onClick={handleClose}>
          <img src={CloseIcon} alt="" className="close-icon" />
        </button>
        <div className="top-content">
          <img src={LockImg} alt="mail-icon" />
          <div className="header-content">
            <p>Confirm Changes</p>
            <span>Enter your password to confirm the changes.</span>
          </div>

          <form className="password-input input-field">
            <label htmlFor="">Your Password</label>
            <div className="password-div">
              <input type="password" />
              <img src={EyeShow} alt="show icon" />
            </div>
          </form>
        </div>
        <div className="bottom-button">
          <button className="cancel-button" onClick={handleClose}>
            Cancel
          </button>
          <button className="next-button">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
