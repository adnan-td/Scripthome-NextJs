import styles from "./mc.module.scss";
import { useState } from "react";

const Modalmc = ({ handleClose, setModal, setNewuser, getOTP }) => {
  const [formFields, setFormFields] = useState({
    email: "",
  });
  const { email } = formFields;

  async function handleNext() {
    if (email) {
      setNewuser(formFields);
      getOTP(email);
      setModal(2);
    }
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
            <p>Verify Email</p>
            <span>Please enter the email for your account.</span>
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
