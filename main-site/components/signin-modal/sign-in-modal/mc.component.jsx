import styles from "./mc.module.scss";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/user/user.context";
import { signIn } from "next-auth/react";
import { hostname } from "../../../../config/hostname";

const Modalmc = ({ handleClose, handleShow }) => {
  const { status } = useContext(UserContext);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { email, password } = formFields;
  const [loading, setLoading] = useState(false);

  async function handleNext() {
    const loginDetails = {
      email: email,
      password: password,
    };

    const res = await fetch(`${hostname}/api/checkuser`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    });

    if (res.status === 200) {
      signIn("email", { redirect: false, email: email });
      setLoading(true);
    } else {
      const message = await res.json();
      setError(message.message);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  useEffect(() => {
    if (status === "loading") {
      setLoading(true);
    } else if (status === "unauthenticated") setLoading(false);

    if (status === "authenticated") {
      handleShow(0);
    }
  }, [handleShow, status]);

  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
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
              <label htmlFor="email">
                Email <span style={{ color: "red" }}>{error ? `(${error})` : ""}</span>
              </label>
              {/* <label htmlFor="">Email or Username</label> */}
              <input type="text" name="email" onChange={handleChange} />
            </form>
            <form className={styles["password-input"] + " " + styles["input-field"]}>
              <label htmlFor="password">Password</label>
              <div className={styles["password-div"]}>
                <input type="password" name="password" onChange={handleChange} />
                <img src="/Modal/sign-up/eye.svg" alt="show icon" />
              </div>
            </form>
          </div>
          <p className={styles["f-para"]}>
            Forgot your password?{" "}
            <a className={styles["f-anchor"]} href=" ">
              Click Here to reset it.
            </a>
          </p>
        </div>
        {loading ? (
          <p>Please check your email for verification link</p>
        ) : (
          <div className={styles["bottom-button"]}>
            <button className={styles["cancel-button"]} onClick={handleClose}>
              Cancel
            </button>
            <button className={styles["next-button"]} onClick={handleNext}>
              Sign in
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modalmc;
