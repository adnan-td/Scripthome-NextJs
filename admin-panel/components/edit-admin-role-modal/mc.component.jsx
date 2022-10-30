import { useState } from "react";
import styles from "./mc.module.scss";
import axios from "axios";
import { hostname } from "../../../config/hostname";

function CheckUserName(name) {
  var decimal = /^[A-Za-z]\w{4,14}$/;
  if (name.match(decimal)) {
    return true;
  } else {
    return false;
  }
}

const Modalmc = ({ handleClose, setnewuser, newuser, setShow }) => {
  const [name, setName] = useState("");

  async function existsUser(name) {
    const res = await axios({
      url: `${hostname}/api/getuserbyname/${name}`,
      method: "get",
    });
    return res.data.exists;
  }

  async function handleNext() {
    if (!CheckUserName(name)) {
      toast.error(
        "Please enter username of atleast 5 character long, containing only letters, numbers, underscores!"
      );
    } else if (await existsUser(name)) {
      toast.error("Username already exists! Please select another one!");
    } else {
      setnewuser({ ...newuser, name: name });
      setShow("Confirm");
    }
  }

  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["sign-up-modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <img src="/Edit-Profile-Modal/fingerprint-icon.svg" alt="mail-icon" />
          <div className={styles["header-content"]}>
            <p>Enter New Details</p>
            <span>Enter the following details to add the changes to the account.</span>
          </div>

          <form className={styles["username-input"] + " " + styles["input-field"]}>
            <label htmlFor="">Monetization Code</label>
            <input
              type="text"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </form>

          <form className={styles["username-input"] + " " + styles["input-field"]}>
            <label htmlFor="">Role</label>
            <select className={styles["select-field"]}>
              <option value="1">Admin</option>
              <option value="2">Verified</option>
              <option value="3">User</option>
              <option value="4">Deactivate</option>
            </select>
          </form>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["cancel-button"]} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles["next-button"]} onClick={handleNext}>
            Confirm Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
