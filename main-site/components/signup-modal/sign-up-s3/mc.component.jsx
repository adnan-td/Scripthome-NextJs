import "./mc.module.scss";
import UploadIcon from "../../../assets/Modal/sign-up/upload-icon.svg";
import CloseIcon from "../../../assets/Modal/sign-up/x-close.svg";

const Modalmc = ({ handleClose, next }) => {
  const handleNext = () => {
    next(4);
  };
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
          <div className="click-random-div">
            <p>Or click next to choose randomly generated avatar</p>
          </div>
        </div>
        <div className="bottom-button">
          <button className="cancel-button" onClick={handleClose}>
            Cancel
          </button>
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
