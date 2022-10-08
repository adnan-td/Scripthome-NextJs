import "./mc.module.scss";
import MailImg from "../../../assets/Modal/sign-up/email-address-icon.svg";
import CloseIcon from "../../../assets/Modal/sign-up/x-close.svg";

const Modalmc = ({ handleClose }) => {
  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="sign-up-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-div" onClick={handleClose}>
          <img src={CloseIcon} alt="" className="close-icon" />
        </button>
        <div className="top-content">
          <img src={MailImg} alt="mail-icon" />
          <div className="header-content">
            <p>Email Address</p>
            <span>Please enter the email address for the Scripthome account.</span>
          </div>

          <form className="email-input input-field">
            <label htmlFor="">Email Address</label>
            <input type="email" title="Type your email address" />
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
