import { useContext, useState } from "react";
import styles from "./mc.module.scss";
import { UserContext } from "../../../main-site/contexts/user/user.context";
import { toast } from "react-toastify";
import axios from "axios";

const Modalmc = ({ handleClose }) => {
  const [adsense, setAdsense] = useState("");
  const { user } = useContext(UserContext);

  async function handleNext() {
    if (adsense && user.role === 3) {
      const res = await axios({
        url: `/api/def_ads`,
        method: "post",
        data: {
          adsense: adsense,
        },
      });
      toast.success("Default adsense was successfully Updated!");
      handleClose();
    } else {
      toast.error("Adsense was not updated!");
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
