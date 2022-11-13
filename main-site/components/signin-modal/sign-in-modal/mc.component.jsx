import styles from "./mc.module.scss";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import axios from "axios";
import ResetPass from "../../Reset-Password/modal.component";
import InputPassword from "../../input/input.component";

const Modalmc = ({ handleClose, handleShow }) => {
  const [visibility, setv] = useState(true);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formFields;

  async function handleNext() {
    const loginDetails = {
      email: email,
      password: password,
    };
    const res = await axios({
      method: "post",
      url: `/api/checkuser`,
      data: { ...loginDetails },
    });

    if (res.status === 201) {
      signIn("email", { redirect: false, email: email });
      handleShow(2);
    } else {
      const message = res.data.message;
      toast.error(message);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleHide = () => {
    setv(!visibility);
  };

  return (
    <div
      className={styles["modal-cover"]}
      onClick={handleClose}
      style={visibility ? { visibility: "visible" } : { visibility: "hidden" }}
    >
      <div className={styles["sign-in-modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["div-wrapper-reset"]}>
          <div className={styles["top-content"]}>
            <img src="/Modal/sign-in/icon-guard.svg" alt="mail-icon" />
            <div className={styles["header-content"]}>
              <p>Please enter your credentials</p>
              <span>Enter your email address and password to sign in.</span>
            </div>

            <form className={styles["username-input"] + " " + styles["input-field"]}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" onChange={handleChange} />
            </form>
            <form className={styles["password-input"] + " " + styles["input-field"]}>
              <label htmlFor="password">Password</label>
              <InputPassword
                className={styles["password-div"]}
                name="password"
                onChange={handleChange}
              />
            </form>
          </div>
          <p className={styles["f-para"]}>
            Forgot your password?{" "}
            <ResetPass type="button" className={styles["f-anchor"]} prevclose={handleHide}>
              Click Here to reset it.
            </ResetPass>
          </p>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["cancel-button"]} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles["next-button"]} onClick={handleNext}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
