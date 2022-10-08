import "./mc.module.scss";
import UploadIcon from "../../../assets/Modal/sign-up/upload-icon.svg";
import CloseIcon from "../../../assets/Modal/sign-up/x-close.svg";
import ImgIcon from "../../../assets/Modal/sign-up/image-icon.svg";
import CheckIcon from "../../../assets/Modal/sign-up/checkbox-icon.svg";

const Modalmc = ({ handleClose }) => {
  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="sign-up-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-div" onClick={handleClose}>
          <img src={CloseIcon} alt="" className="close-icon" />
        </button>
        <div className="top-content">
          <div className="header-content">
            <p>Upload a Photograph</p>
            <span>Upload the photograph that you want for your profile.</span>
          </div>

          <div className="upload-div">
            <img src={UploadIcon} alt="" />
            <div className="up-content-div">
              <p className="up-text">
                <a className="up-action" href=" ">
                  Click to upload
                </a>{" "}
                or drag and drop
              </p>
              <p>SVG, PNG, JPG or Webp (max. 500 KB)</p>
            </div>
          </div>
          <div className="uploading-div">
            <img src={ImgIcon} className="icon-img" alt="icon-bg" />
            <div className="uping-content">
              <p className="uping-title">Dashboard.png</p>
              <p className="uping-size">700 Kb</p>
              <div className="upload-status">
                <div className="uping-prog-wrapper">
                  <div className="uping-active-bar"></div>
                  <div className="uping-inactive-bar"></div>
                </div>
                <p className="uping-percentage">100%</p>
              </div>
            </div>
            <button className="chec-icon-box">
              <img src={CheckIcon} className="close-icon-black" alt="" />
            </button>
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
