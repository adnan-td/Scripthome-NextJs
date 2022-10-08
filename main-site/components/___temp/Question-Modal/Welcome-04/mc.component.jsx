import "./mc.module.scss";
import WelcomeImg from "../../../assets/Question-Modal/Welcome-04.png";

const Modalmc = ({ handleClose }) => {
  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="Script-Modal" onClick={(e) => e.stopPropagation()}>
        <div className="header-wrapper">
          <div className="h-img-wrap">
            <img src={WelcomeImg} alt="" className="welcome-img" />
          </div>
          <div className="h-content-div">
            <p className="h-content-1">Our Daily Uploads</p>
            <p className="h-content-2">
              On Scripthome we daily upload scripts for the most popular games.
            </p>
          </div>
          <div className="dot-wrapper">
            <div className="dot-div"></div>
            <div className="dot-div"></div>
            <div className="dot-div"></div>
            <div className="dot-div dot-div-active"></div>
          </div>
        </div>
        <div className="bottom-button">
          <button className="next-button" onClick={handleClose}>
            Complete Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
