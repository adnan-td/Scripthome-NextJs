import "./mc.module.scss";
import CloseIcon from "../../../assets/Modal/sign-up/x-close.svg";
import ImgIcon from "../../../assets/Modal/sign-up/image-icon.svg";
import CheckIcon from "../../../assets/Modal/sign-up/checkbox-icon.svg";
import ChangeIcon from "../../../assets/Edit-Profile-Modal/change-icon.svg";
import LockImg from "../../../assets/Edit-Profile-Modal/lock-icon.svg";
import UserImg from "../../../assets/Edit-Profile-Modal/username-icon.svg";

const Modalmc = ({ handleClose }) => {
  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="sign-up-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-div" onClick={handleClose}>
          <img src={CloseIcon} alt="" className="close-icon" />
        </button>
        <div className="top-content">
          <img src={ChangeIcon} alt="mail-icon" />
          <div className="header-content">
            <p>Select an option</p>
            <span>Select the attribute which you want to change</span>
          </div>

          <div className="div-wrapper-modal">
            <div className="uploading-div uping-div-active">
              <div className="d-flex-card">
                <img src={ImgIcon} className="icon-img" alt="icon-bg" />
                <div className="uping-content">
                  <p className="uping-title">Change the profile image</p>
                </div>
              </div>
              <button className="chec-icon-box">
                <img src={CheckIcon} className="close-icon-black" alt="" />
              </button>
            </div>
            <div className="uploading-div">
              <div className="d-flex-card">
                <img src={UserImg} className="icon-img" alt="icon-bg" />
                <div className="uping-content">
                  <p className="uping-title">Change username</p>
                </div>
              </div>
              <div className="uncheck-div"></div>
            </div>
            <div className="uploading-div">
              <div className="d-flex-card">
                <img src={LockImg} className="icon-img" alt="icon-bg" />
                <div className="uping-content">
                  <p className="uping-title">Change password</p>
                </div>
              </div>
              <div className="uncheck-div"></div>
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
