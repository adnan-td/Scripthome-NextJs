import "./mc.module.scss";
import SearchIcon from "../../../assets/Script/Modal-Icons/search-lg-black.svg";
import PlusIcon from "../../../assets/Script/Modal-Icons/plus.svg";

const Modalmc = ({ handleClose }) => {
  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="Script-Modal" onClick={(e) => e.stopPropagation()}>
        <div className="top-content">
          <div className="input-wrapper">
            <img src={SearchIcon} alt="" className="search-lg-black" />
            <input type="text" placeholder="Search" className="search-int" />
          </div>
          <div className="script-not-found">
            <div className="scr-content">
              <p className="scr-title">No Scripts Found</p>
              <p className="scr-sub">
                "<span>“Auto aim bot</span>” did not match any uploaded scripts. Would you like to
                request the script for the Roblox game?
              </p>
            </div>
            <a href=" ">
              <button className="scr-request-btn">
                <img src={PlusIcon} alt="" className="plus-icon" />
                Request Script
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
