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
    const res = await PostNewUser(newuser);
    if (res.status === 201) {
      handleClose();
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
  };

  async function PostNewUser(data) {
    const res = await axios({
      method: "post",
      url: `${hostname}/api/users`,
      data: { ...data },
    });
    return await res;
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
            <p>Congrats your account has been registered!</p>
            <span>
              Welcome to Scripthome community. Now you can login and enjoy the perks of joining our
              community.
            </span>
          </div>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["next-button"]} onClick={handleSubmit}>
            Complete Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
