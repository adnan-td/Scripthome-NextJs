import "./mc.module.scss";
import FingIcon from "../../../assets/Script/Modal-Icons/Report-Modal-Icon.svg";
import CloseIcon from "../../../assets/Modal/sign-up/x-close.svg";

const Modalmc = ({ handleClose }) => {
  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="Script-Modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-div" onClick={handleClose}>
          <img src={CloseIcon} alt="" className="close-icon" />
        </button>
        <div className="top-content">
          <div className="div-header-wrapper">
            <div className="header-content">
              <img src={FingIcon} alt="mail-icon" />
              <p>Report Script</p>
            </div>
            <div className="report-box">
              <label className="r-title">Reason for Reporting Script</label>
              <textarea className="r-input" />
            </div>
          </div>
        </div>
        <div className="bottom-button">
          <button className="cancel-button" onClick={handleClose}>
            Cancel
          </button>
          <button className="next-button">Report Script</button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
