import { useContext, useState } from "react";
import styles from "./mc.module.scss";
import { toast } from "react-toastify";
import axios from "axios";
import { UserContext } from "../../../contexts/user/user.context";
import InputPassword from "../../input/input.component";

function CheckPassword(pass) {
  var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (pass.match(decimal)) {
    return true;
  } else {
    return false;
  }
}

const Modalmc = ({ handleClose, newuser }) => {
  const { user, refresh, setRefresh } = useContext(UserContext);
  const [formFields, setFormFields] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const { old_password, new_password, confirm_password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  async function checkoldpass(pass, email) {
    const checkpass = await axios({
      method: "post",
      url: `/api/checkuser`,
      data: {
        email: email,
        password: pass,
      },
    });
    if (checkpass.status === 201) {
      return true;
    } else {
      return false;
    }
  }

  async function handleNext() {
    if (new_password !== confirm_password && new_password) {
      toast.error("Passwords do not Match!");
    } else if (!new_password) {
      toast.error("Please enter the Password!");
    } else if (!CheckPassword(new_password)) {
      toast.error(
        "Password should be atleast 8 characters and contain: atleast 1 lower-case letter, upper-case letter, number and special-case"
      );
    } else if (!(await checkoldpass(old_password, user.email))) {
      toast.error("Please enter the correct Password!");
    } else {
      await axios({
        method: "put",
        url: `/api/users/${user.id}`,
        data: { new_password: new_password, password: old_password },
      });
      setRefresh(!refresh);
      toast.success("Password Updated Successfully!");
      handleClose();
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
            <p>Password Change</p>
            <span>Enter new password for your account that you want to set.</span>
          </div>

          <form className={styles["password-input"] + " " + styles["input-field"]}>
            <label htmlFor="">Old Password</label>
            <InputPassword
              className={styles["password-div"]}
              name="old_password"
              onChange={handleChange}
            />
          </form>

          <form className={styles["password-input"] + " " + styles["input-field"]}>
            <label htmlFor="">New Password</label>
            <InputPassword
              className={styles["password-div"]}
              name="new_password"
              onChange={handleChange}
            />
          </form>
          <form className={styles["confirm-password-input"] + " " + styles["input-field"]}>
            <label htmlFor="">Confirm Password</label>
            <InputPassword
              className={styles["password-div"]}
              name="confirm_password"
              onChange={handleChange}
            />
          </form>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["cancel-button"]} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles["next-button"]} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
