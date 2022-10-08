import "./mc.module.scss";
import WelcomeImg from "../../../assets/Question-Modal/Welcome-01.png";

const Modalmc = ({ handleClose }) => {
  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="Script-Modal" onClick={(e) => e.stopPropagation()}>
        <div className="header-wrapper">
          <div className="h-img-wrap">
            <img src={WelcomeImg} alt="" className="welcome-img" />
          </div>
          <div className="h-content-div">
            <p className="h-content-1">Welcome to our Community</p>
            <p className="h-content-2">
              We’re glad to have you onboard. Here is a quick tour for you to get familiar with some
              perks of our community.
            </p>
          </div>
          <div className="dot-wrapper">
            <div className="dot-div dot-div-active"></div>
            <div className="dot-div"></div>
            <div className="dot-div"></div>
            <div className="dot-div"></div>
          </div>
        </div>
        <div className="bottom-button">
          <button className="cancel-button">Skip</button>
          <button className="next-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
