import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "./mc.module.scss";

const Modalmc = ({ handleClose, setModal, newuser, otp, expiry, getOTP }) => {
  const [formFields, setFormFields] = useState(["", "", "", ""]);

  const converter = (text) => {
    let total = "";
    text.forEach((i) => {
      total += i;
    });
    return +total;
  };

  const handleNext = () => {
    if (converter(formFields) === (otp + 69) / 123456 && expiry > Date.now()) {
      setModal(2.5);
      toast.success("The OTP was correct!");
    } else if (expiry < Date.now()) {
      toast.error("OTP has expired! Please resend the OTP!");
    } else {
      toast.error("Please enter correct OTP");
    }
  };

  const focusToNextInput = (target) => {
    const nextElementSibling = target.nextElementSibling;
    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };
  const focusToPrevInput = (target) => {
    const previousElementSibling = target.previousElementSibling;
    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  function handleKeyDown(event) {
    if (event.code === "Backspace") {
      event.preventDefault();
      const temp = [...formFields];
      temp[event.target.name] = "";
      setFormFields(temp);
      focusToPrevInput(event.target);
    } else if (Number.isInteger(Number(event.key))) {
      event.preventDefault();
      const temp = [...formFields];
      temp[event.target.name] = event.key;
      setFormFields(temp);
      focusToNextInput(event.target);
    }
  }

  return (
    <div className={styles["modal-cover"]}>
      <div className={styles["sign-up-modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <img src="/Modal/sign-up/email-address-icon.svg" alt="mail-icon" />
          <div className={styles["header-content"]}>
            <p>Please check your mail</p>
            <span>
              We{"'"}ve sent a code to <b>{newuser.email}</b>
            </span>
          </div>
          <div className={styles["form-content"]}>
            <div className={styles["form-wrapper"]}>
              <form className={styles["input-field-2"]}>
                {[0, 1, 2, 3].map((value) => {
                  return (
                    <input
                      type="text"
                      placeholder="-"
                      name={`${value}`}
                      onKeyDown={handleKeyDown}
                      key={value}
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      maxLength="1"
                      pattern="\d{1}"
                      value={formFields[Number(value)]}
                      onChange={() => {}}
                    />
                  );
                })}
              </form>
            </div>
            <div className={styles["resend-div"]}>
              <p className={styles["re-text"]}>
                Didn{"'"}t get the code?{" "}
                <button
                  style={{ fontSize: "0.9rem" }}
                  type="button"
                  onClick={() => {
                    getOTP(newuser.email);
                    toast.success("OTP was resend! Please check your Email");
                  }}
                >
                  Click to resend.
                </button>
              </p>
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
