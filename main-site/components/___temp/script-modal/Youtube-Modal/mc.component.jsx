import "./mc.module.scss";
import FingIcon from "../../../assets/Script/Modal-Icons/Youtube-Modal-Icon.svg";
import CloseIcon from "../../../assets/Modal/sign-up/x-close.svg";
import YoutubeOverlay from "../../../assets/Script/Modal-Icons/Video-player.png";
import PlayButton from "../../../assets/Script/Modal-Icons/Play-button.svg";

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
              <p>Youtube Video</p>
            </div>
            <div className="youtube-box">
              <img src={PlayButton} alt="" className="y-play" />
              <img src={YoutubeOverlay} alt="" className="y-overlay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
