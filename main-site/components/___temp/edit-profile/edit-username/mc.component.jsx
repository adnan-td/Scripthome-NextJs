import "./mc.module.scss";
import FingIcon from "../../../assets/Edit-Profile-Modal/fingerprint-icon.svg";
import CloseIcon from "../../../assets/Modal/sign-up/x-close.svg";

const Modalmc = ({ handleClose }) => {
  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="sign-up-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-div" onClick={handleClose}>
          <img src={CloseIcon} alt="" className="close-icon" />
        </button>
        <div className="top-content">
          <img src={FingIcon} alt="mail-icon" />
          <div className="header-content">
            <p>Enter New Username</p>
            <span>Enter your new username to change your old username.</span>
          </div>

          <form className="username-input input-field">
            <label htmlFor="">New Username</label>
            <input type="text" />
          </form>
        </div>
        <div className="bottom-button">
          <button className="cancel-button" onClick={handleClose}>
            Cancel
          </button>
          <button className="next-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
