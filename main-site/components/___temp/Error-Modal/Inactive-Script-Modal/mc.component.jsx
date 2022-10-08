import "./mc.module.scss";
import ImgIcon from "../../../assets/Modal/Patched-Icon.svg";

const Modalmc = ({ handleClose }) => {
  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="Script-Modal" onClick={(e) => e.stopPropagation()}>
        <div className="header-wrapper-mod">
          <div className="h-img-tag">
            <img src={ImgIcon} alt="" />
          </div>
          <div className="h-content-div">
            <p className="h-content-1">Script Patched</p>
            <p className="h-content-2">
              The following script has been patched by the developers. You can find more special
              scripts on the website.
            </p>
          </div>
        </div>
        <div className="bottom-button">
          <button className="confirm-button">Return to Home</button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
