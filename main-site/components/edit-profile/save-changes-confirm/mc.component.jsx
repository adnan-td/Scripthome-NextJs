import styles from "./mc.module.scss";
import axios from "axios";
import { hostname } from "../../../../config/hostname";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/user/user.context";

const Modalmc = ({ handleClose, newuser }) => {
  const [password, setPassword] = useState("");
  const { refresh, setRefresh } = useContext(UserContext);
  async function handleConfirm() {
    const checkpass = await axios({
      method: "post",
      url: `${hostname}/api/checkuser`,
      data: {
        email: newuser.email,
        password: password,
      },
    });
    if (checkpass.status === 200) {
      console.log(newuser);
      await axios({
        method: "put",
        url: `${hostname}/api/users/${newuser.id}`,
        data: { ...newuser, password: password },
      });
      setRefresh(!refresh);
      handleClose();
    } else {
      // toast saying pls check your password
    }
  }

  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["sign-up-modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <img src="/Edit-Profile-Modal/lock-icon.svg" alt="mail-icon" />
          <div className={styles["header-content"]}>
            <p>Confirm Changes</p>
            <span>Enter your password to confirm the changes.</span>
          </div>

          <form className={styles["password-input"] + " " + styles["input-field"]}>
            <label htmlFor="">Your Password</label>
            <div className={styles["password-div"]}>
              <input
                type="password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <img src="/Modal/sign-up/eye.svg" alt="show icon" />
            </div>
          </form>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["cancel-button"]} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles["next-button"]} onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
