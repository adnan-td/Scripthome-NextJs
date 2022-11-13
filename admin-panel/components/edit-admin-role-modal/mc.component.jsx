import { useContext, useState } from "react";
import styles from "./mc.module.scss";
import Select from "react-select";
import { UserContext } from "../../../main-site/contexts/user/user.context";
import { toast } from "react-toastify";
import Router from "next/router";
import axios from "axios";

const Modalmc = ({ handleClose, newuser }) => {
  const [adsense, setAdsense] = useState("");
  const { user } = useContext(UserContext);
  const [role, setRole] = useState(newuser.role);

  const options = [
    { value: 2, label: "Admin", isDisabled: user.role <= 2 },
    { value: 1, label: "Verified", isDisabled: user.role <= 1 },
    { value: 0, label: "User", isDisabled: user.role <= 0 },
    { value: -1, label: "Deactivated", isDisabled: user.role <= -1 },
  ];

  async function handleNext() {
    if (newuser.id === user.id) {
      if (role !== newuser.role) {
        toast("You cannot change your own role!");
      }
      if (adsense) {
        const res = await axios({
          url: `/api/users/${newuser.id}`,
          method: "put",
          data: { ...newuser, adsense: adsense ? adsense : null },
        });
        Router.replace(Router.asPath);
        toast.success("Monetisation code has been updated!");
        handleClose();
      }
      return;
    }
    if (role !== newuser.role || adsense) {
      const res = await axios({
        url: `/api/users/${newuser.id}`,
        method: "put",
        data: { ...newuser, adsense: adsense ? adsense : null, role: role },
      });
      Router.replace(Router.asPath);
      toast.success("Profile has been updated!");
      handleClose();
    } else {
      toast("No changes found!");
    }
  }

  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["sign-up-modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <img src="/Edit-Profile-Modal/fingerprint-icon.svg" alt="mail-icon" />
          <div className={styles["header-content"]}>
            <p>Enter New Details</p>
            <span>Enter the following details to add the changes to the account.</span>
          </div>

          <form className={styles["username-input"] + " " + styles["input-field"]}>
            <label htmlFor="">Monetization Code</label>
            <input
              type="text"
              name="name"
              value={adsense}
              onChange={(e) => {
                setAdsense(e.target.value);
              }}
            />
          </form>

          <form className={styles["username-input"] + " " + styles["input-field"]}>
            <label htmlFor="">Role</label>
            <Select
              options={options}
              onChange={(option) => {
                setRole(option.value);
              }}
              value={options.filter((item) => {
                return item.value === role;
              })}
              theme={(theme) => ({
                ...theme,
                borderRadius: 8,
                colors: {
                  ...theme.colors,
                  primary: "#7839ee",
                },
              })}
            />
          </form>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["cancel-button"]} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles["next-button"]} onClick={handleNext}>
            Confirm Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
