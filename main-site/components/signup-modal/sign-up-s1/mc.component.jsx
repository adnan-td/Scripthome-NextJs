import styles from "./mc.module.scss";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { hostname } from "../../../../config/hostname";

function CheckUserName(name) {
  var decimal = /^[A-Za-z]\w{4,14}$/;
  if (name.match(decimal)) {
    return true;
  } else {
    return false;
  }
}

function CheckUserEmail(email) {
  var decimal =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (email.match(decimal)) {
    return true;
  } else {
    return false;
  }
}

const Modalmc = ({ handleClose, setModal, setNewuser, newuser, getOTP }) => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    user: "on",
  });
  const { name, email, user } = formFields;

  async function existsUser(name) {
    const res = await axios({
      url: `${hostname}/api/getuserbyname/${name}`,
      method: "get",
    });
    return res.data.exists;
  }

  async function handleNext() {
    if (!CheckUserName(name)) {
      toast.error(
        "Please enter username of atleast 5 character long, containing only letters, numbers, underscores!"
      );
    } else if (!CheckUserEmail(email)) {
      toast.error("Please enter a valid email address!");
    } else if (await existsUser(name)) {
      toast.error("Username already exists! Please select another one!");
    } else {
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
            <p>Personal Details</p>
            <span>Please enter an email and username for your account.</span>
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
