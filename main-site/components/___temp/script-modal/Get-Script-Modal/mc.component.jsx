import "./mc.module.scss";
import FingIcon from "../../../assets/Script/Modal-Icons/Script-Modal-Icon.svg";
import CloseIcon from "../../../assets/Modal/sign-up/x-close.svg";

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
              <p>Script</p>
            </div>
            <div className="script-box">
              <div className="script-number">
                <p className="s-line-num">1</p>
                <p className="s-line-num">2</p>
                <p className="s-line-num">3</p>
                <p className="s-line-num">4</p>
                <p className="s-line-num">5</p>
                <p className="s-line-num">6</p>
                <p className="s-line-num">7</p>
                <p className="s-line-num">8</p>
                <p className="s-line-num">9</p>
                <p className="s-line-num">10</p>
                <p className="s-line-num">11</p>
                <p className="s-line-num">12</p>
                <p className="s-line-num">13</p>
                <p className="s-line-num">14</p>
                <p className="s-line-num">15</p>
                <p className="s-line-num">16</p>
              </div>
              <div className="right-script-text">
                <p className="script-text">
                  <span>--</span>Powered by Scripthome.com<span>--</span>
                </p>
                <p className="script-text">_G.bruh = true</p>
                <p className="script-text">while _G.bruh do </p>
                <p className="script-text"> wait()</p>
                <p className="script-text"> .</p>
                <p className="script-text">for _,v in next, game.Workspace:GetDescendants() do</p>
                <p className="script-text">if v.Name == "outerOrb" then</p>
                <p className="script-text">
                  {" "}
                  v.CFrame = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
                </p>
                <p className="script-text"> elseif v.Name == "outerGem" then</p>
                <p className="script-text">
                  {" "}
                  v.CFrame = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
                </p>
                <p className="script-text">
                  {" "}
                  v.CFrame = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
                </p>
                <p className="script-text">
                  {" "}
                  v.CFrame = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
                </p>
                <p className="script-text">
                  {" "}
                  v.CFrame = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
                </p>
                <p className="script-text">
                  {" "}
                  v.CFrame = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
                </p>
                <p className="script-text">
                  {" "}
                  v.CFrame = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
                </p>
                <p className="script-text">
                  {" "}
                  v.CFrame = game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-button">
          <button className="cancel-button" onClick={handleClose}>
            Cancel
          </button>
          <button className="next-button">Copy Script</button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
