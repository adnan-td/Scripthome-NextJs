import "./mc.module.scss";
import SearchIcon from "../../../assets/Script/Modal-Icons/search-lg-black.svg";

const Modalmc = ({ handleClose }) => {
  return (
    <div className="modal-cover" onClick={handleClose}>
      <div className="Script-Modal" onClick={(e) => e.stopPropagation()}>
        <div className="top-content">
          <div className="input-wrapper">
            <img src={SearchIcon} alt="" className="search-lg-black" />
            <input type="text" placeholder="Search" className="search-int" />
          </div>
          <div className="script-found">
            <p className="result-num">5 Scripts Found </p>
            <div className="script-div-wrapper">
              <div className="script-div">
                <div className="script-img"></div>
                <div className="content-div-script">
                  <p className="scripts-title">Ninja Training Simulator</p>
                  <p className="scripts-subheading">
                    This Ninja Training Simulator Script can do many useful functions to play the
                    game more easily like autotap, autorebirth and more.
                  </p>
                </div>
              </div>
              <div className="script-div">
                <div className="script-img"></div>
                <div className="content-div-script">
                  <p className="scripts-title">Ninja Training Simulator</p>
                  <p className="scripts-subheading">
                    This Ninja Training Simulator Script can do many useful functions to play the
                    game more easily like autotap, autorebirth and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
