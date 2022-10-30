import styles from "./mc.module.scss";
import { toast } from "react-toastify";
import { useState } from "react";
import InputPassword from "../../input/input.component";

function CheckPassword(pass) {
  var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (pass.match(decimal)) {
    return true;
  } else {
    return false;
  }
}

const Modalmc = ({ handleClose, next, newuser, setnewuser }) => {
  const [formFields, setFormFields] = useState({});
  const { password, cpassword } = formFields;

  const handleNext = async () => {
    if (password !== cpassword) {
      toast.error("Passwords do not Match!");
    } else if (!password && !cpassword) {
      toast.error("Please enter the Password!");
    } else if (!CheckPassword(password)) {
      toast.error(
        "Password should be atleast 8 characters and contain: atleast 1 lower-case letter, upper-case letter, number and special-case"
      );
    } else {
      setnewuser({ ...newuser, password: password });
      next(3);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className={styles["modal-cover"]}>
      <div className={styles["sign-up-modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <img src="/Edit-Profile-Modal/lock-icon.svg" alt="mail-icon" />
          <div className={styles["header-content"]}>
            <p>Password</p>
            <span>Enter a password for your account that you want to sign in with.</span>
          </div>
          <form className={styles["password-input"] + " " + styles["input-field"]}>
            <label htmlFor="">Password</label>
            <InputPassword
              className={styles["password-div"]}
              name="password"
              onChange={handleChange}
            />
          </form>
          <form className={styles["confirm-password-input"] + " " + styles["input-field"]}>
            <label htmlFor="">Confirm Password</label>
            <InputPassword
              className={styles["password-div"]}
              name="cpassword"
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
