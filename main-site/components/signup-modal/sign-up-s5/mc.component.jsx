import "./mc.module.scss";
import AvatarGrp from "../../../assets/Modal/sign-up/Avatar/Avatar-group.png";
import CloseIcon from "../../../assets/Modal/sign-up/x-close.svg";

const Modalmc = ({ handleClose, next }) => {
  const handleNext = () => {
    next(1);
  };
  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="sign-up-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-div" onClick={handleClose}>
          <img src={CloseIcon} alt="" className="close-icon" />
        </button>
        <img src={AvatarGrp} className="avatar-grp" alt="avatar group" />
        <div className="top-content">
          <div className="header-content">
            <p>Congrats you account has been registered!</p>
            <span>Welcome to Scripthome community. Enjoy the perks of joining our community.</span>
          </div>
        </div>
        <div className="bottom-button" onClick={handleNext}>
          <button className="next-button" onClick={handleClose}>
            Complete Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
