import styles from "./mc.module.scss";
import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/user/user.context";
import { toast } from "react-toastify";
import InputPassword from "../../input/input.component";

const Modalmc = ({ handleClose, newuser }) => {
  const [password, setPassword] = useState("");
  const { refresh, setRefresh } = useContext(UserContext);
  async function handleConfirm() {
    const checkpass = await axios({
      method: "post",
      url: `/api/checkuser`,
      data: {
        email: newuser.email,
        password: password,
      },
    });
    if (checkpass.status === 201) {
      await axios({
        method: "put",
        url: `/api/users/${newuser.id}`,
        data: { ...newuser, password: password },
      });
      setRefresh(!refresh);
      toast.success("Profile Updated Successfully!");
      handleClose();
    } else {
      toast.error("Please check if your password is correct");
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
            <InputPassword
              className={styles["password-div"]}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
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
