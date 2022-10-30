import styles from "./mc.module.scss";
import axios from "axios";
import { hostname } from "../../../../config/hostname";
import { toast } from "react-toastify";

const Modalmc = ({ handleClose, newuser }) => {
  const handleclose = () => {
    handleSubmit();
    handleClose();
  };

  const handleSubmit = async () => {
    const user = await GetUserbyEmail(newuser.email);
    if (user) {
      const result = await UpdateUser(user);
      if (result) {
        handleClose();
      }
    }
  };

  async function GetUserbyEmail(email) {
    const res = await axios({
      method: "get",
      url: `${hostname}/api/checkuser/${email}`,
    });
    if (res.status === 200) {
      return (await res).data;
    } else {
      toast.error(res.data.message);
      return null;
    }
  }

  async function UpdateUser(user) {
    const res = await axios({
      method: "put",
      url: `${hostname}/api/users/${user.id}`,
      data: { password: user.password, new_password: newuser.password },
    });
    if (res.status === 201) {
      toast.success("Password reset was successfull!");
      return true;
    } else {
      toast.error(res.data.message);
      return false;
    }
  }

  return (
    <div className={styles["modal-cover"]} onClick={handleclose}>
      <div className={styles["sign-up-modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleclose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <img
          src="/Modal/sign-up/Avatar/Avatar-group.png"
          className={styles["avatar-grp"]}
          alt="avatar group"
        />
        <div className={styles["top-content"]}>
          <div className={styles["header-content"]}>
            <p>Your password has been reset! You can log back into your account.</p>
          </div>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["next-button"]} onClick={handleSubmit}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
