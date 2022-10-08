import styles from "./mc.module.scss";
import { useState } from "react";

const Modalmc = ({ handleClose, next }) => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    user: "on",
  });
  const [error, setError] = useState("");
  const { name, email, password, cpassword, user } = formFields;

  async function handleNext() {
    if (password !== cpassword) {
      setError("Password does not match");
    } else {
      setError("");
      const newUser = {
        name: name,
        email: email,
        password: password,
        user: user,
      };
      const res = await PostNewUser(newUser);
      if (res.status === 200) {
        // next(2);
        handleClose();
        setError("Done for now");
      } else {
        setError("Error Occured");
      }
    }
  }

  async function PostNewUser(data) {
    const response = await fetch(`/api/users`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return await response;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["sign-up-modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <img src="/Modal/sign-up/email-address-icon.svg" alt="mail-icon" />
          <div className={styles["header-content"]}>
            <p>Email Address</p>
            <span>Please enter a email for verifying your account.</span>
          </div>

          <div className={styles["username-input"] + " " + styles["input-field"]}>
            <label htmlFor="name">Username</label>
            <input type="text" name="name" onChange={handleChange} />
          </div>
          <div className={styles["email-input"] + " " + styles["input-field"]}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              title="Type your email address"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className={styles["password-input"] + " " + styles["input-field"]}>
            <label htmlFor="password">Password</label>
            <div className={styles["password-div"]}>
              <input type="password" name="password" onChange={handleChange} />
              <img src="/Modal/sign-up/eye.svg" alt="show icon" />
            </div>
          </div>
          <div className={styles["confirm-password-input"] + " " + styles["input-field"]}>
            <label htmlFor="">
              Confirm Password <span style={{ color: "red" }}>{error ? `(${error})` : ""}</span>
            </label>
            <div className={styles["password-div"]}>
              <input type="password" name="cpassword" onChange={handleChange} />
              <img src="/Modal/sign-up/eye.svg" alt="show icon" />
            </div>
          </div>
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
