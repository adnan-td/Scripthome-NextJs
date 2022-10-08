import "./mc.module.scss";
import ImgIcon from "../../../assets/Modal/Ad-Blocker-detect.svg";

const Modalmc = ({ handleClose }) => {
  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="Script-Modal" onClick={(e) => e.stopPropagation()}>
        <div className="header-wrapper-mod">
          <div className="h-img-tag">
            <img src={ImgIcon} alt="" />
          </div>
          <div className="h-content-div">
            <p className="h-content-1">AdBlocker Detected</p>
            <p className="h-content-2">
              It looks like you're using an ad blocker. That's okay. Who doesn't? But without
              advertising-income, we can't keep making this site awesome.
            </p>
          </div>
        </div>
        <div className="bottom-button">
          <button className="confirm-button">I have Disabled AdBlocker</button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
