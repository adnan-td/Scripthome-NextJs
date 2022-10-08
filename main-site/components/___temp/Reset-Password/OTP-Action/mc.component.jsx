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
            <p>Please check your mail</p>
            <span>
              We've sent a code to <b>spuniverse@gmail.com</b>
            </span>
          </div>
          <div className="form-content">
            <div className="form-wrapper">
              <form className="input-field-2">
                <input type="text" placeholder="-" />
              </form>
              <form className="input-field-2">
                <input type="text" placeholder="-" />
              </form>
              <form className="input-field-2">
                <input type="text" placeholder="-" />
              </form>
              <form className="input-field-2">
                <input type="text" placeholder="-" />
              </form>
            </div>
            <div className="resend-div">
              <p className="re-text">
                Didn't get the code? <a href="sudhanshuprasd.com">Click to resend.</a>
              </p>
            </div>
          </div>
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
