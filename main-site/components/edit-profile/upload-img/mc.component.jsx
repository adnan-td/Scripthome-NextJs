import { useRef } from "react";
import styles from "./mc.module.scss";
import axios from "axios";
import { imghost } from "../../../../config/img_hostname";
import { toast } from "react-toastify";

const Modalmc = ({ handleClose, setnewuser, newuser, setShow }) => {
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const onClickHandler = () => {
    fileInputRef.current.click();
  };

  const onChangeHandler = (event) => {
    if (event.target.files.length !== 1) {
      return;
    }

    const formData = new FormData();

    Array.from(event.target.files).forEach((file) => {
      formData.append(event.target.name, file);
    });

    const onChange = async (formData) => {
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      try {
        const response = await axios.post(`${imghost}/request`, formData, config);

        setnewuser({ ...newuser, img: `${imghost}/${response.data.img}` });
        toast.success("Image was Successfully Uploaded!");
        setShow("Confirm");
      } catch (e) {
        console.log(e);

        toast.error("Sorry something happened! Please make sure file size is under 100 Kb");
      }
    };
    onChange(formData);

    formRef.current.reset();
  };

  const handleNext = () => {
    setShow("Random-Avatar");
  };
  return (
    <div className={styles["modal-cover"]} onClick={handleClose}>
      <div className={styles["sign-up-modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/Modal/sign-up/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <div className={styles["header-content"]}>
            <p>Upload a Photograph</p>
            <span>Upload the photograph that you want for your profile.</span>
          </div>

          <form className={styles["upload-div"]} ref={formRef} onClick={onClickHandler}>
            <img src="/Modal/sign-up/upload-icon.svg" alt="" />
            <div className={styles["up-content-div"]}>
              <p className={styles["up-text"]}>
                <button type="button" className={styles["up-action"]}>
                  Click to upload
                </button>{" "}
                or drag and drop
              </p>
              <p>SVG, PNG, JPG or Webp (max. 100 KB)</p>
            </div>
            <input
              multiple={false}
              name="uploadimg"
              onChange={onChangeHandler}
              ref={fileInputRef}
              style={{ display: "none" }}
              type="file"
            />
          </form>
          <div className={styles["click-random-div"]}>
            <p>Or click to choose randomly generated avatar</p>
          </div>
        </div>
        <div className={styles["bottom-button"]}>
          <button className={styles["cancel-button"]} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles["next-button"]} onClick={handleNext}>
            Choose Random
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
