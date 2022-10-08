import "./mc.module.scss";
import AvatarImg from "../../../assets/Modal/sign-up/Avatar/Asian-Man.png";

const Modalmc = ({ handleClose }) => {
  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="sign-up-modal" onClick={(e) => e.stopPropagation()}>
        <div className="top-content">
          <div className="header-content-mod">
            <div className="avatar-div">
              <img src={AvatarImg} alt="Avatar PNG" />
            </div>
            <p>Choose an Avatar</p>
          </div>
        </div>
        <div className="bottom-button">
          <button className="cancel-button">Generate Again</button>
          <button className="next-button">Confirm Selection</button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
