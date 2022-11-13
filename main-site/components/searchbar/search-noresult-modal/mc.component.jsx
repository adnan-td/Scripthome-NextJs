import { useEffect, useRef } from "react";
import styles from "./mc.module.scss";
import Link from "next/link";

const Modalmc = ({ formField, setFormField }) => {
  const inputref = useRef(null);
  useEffect(() => {
    inputref.current.focus();
  }, []);
  return (
    <div className={styles["modal-cover"]}>
      <div className={styles["Script-Modal"]} onClick={(e) => e.stopPropagation()}>
        <div className={styles["top-content"]}>
          <div className={styles["input-wrapper"]}>
            <img
              src="/Script/Modal-Icons/search-lg-black.svg"
              alt=""
              className={styles["search-lg-black"]}
            />
            <input
              type="text"
              placeholder="Search"
              className={styles["search-int"]}
              ref={inputref}
              value={formField}
              onChange={(e) => {
                setFormField(e.target.value);
              }}
            />
          </div>
          <div className={styles["script-not-found"]}>
            <div className={styles["scr-content"]}>
              <p className={styles["scr-title"]}>No Scripts Found</p>
              <p className={styles["scr-sub"]}>
                <span>“{formField}</span>” did not match any uploaded scripts. Would you like to
                request the script for the Roblox game?
              </p>
            </div>
            <Link href="https://discord.com/invite/aVxZkmjhtb" target="_blank">
              <button className={styles["scr-request-btn"]}>
                <img src="/Script/Modal-Icons/plus.svg" alt="" className={styles["plus-icon"]} />
                Request Script
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
