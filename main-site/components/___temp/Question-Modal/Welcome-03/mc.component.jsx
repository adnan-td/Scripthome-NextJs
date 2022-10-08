import "./mc.module.scss";
import WelcomeImg from "../../../assets/Question-Modal/Welcome-03.png";

const Modalmc = ({ handleClose }) => {
  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="Script-Modal" onClick={(e) => e.stopPropagation()}>
        <div className="header-wrapper">
          <div className="h-img-wrap">
            <img src={WelcomeImg} alt="" className="welcome-img" />
          </div>
          <div className="h-content-div">
            <p className="h-content-1">Our Discord Server</p>
            <p className="h-content-2">
              Joining our exclusive discord server gives you the ablitity to get notified when new
              videos and scripts are uploaded.
            </p>
          </div>
          <div className="dot-wrapper">
            <div className="dot-div"></div>
            <div className="dot-div"></div>
            <div className="dot-div dot-div-active"></div>
            <div className="dot-div"></div>
          </div>
        </div>
        <div className="bottom-button">
          <button className="cancel-button">Skip</button>
          <button className="next-button">Join Server</button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
