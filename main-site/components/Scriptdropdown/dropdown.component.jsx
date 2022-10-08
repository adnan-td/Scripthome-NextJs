import { useState } from "react";
import styles from "./dropdown.module.scss";

export default function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Description", "Features", "Comments"];
  return (
    <div className={styles["dropdown"]}>
      <div className={styles["dropdown-btn"]} onClick={(e) => setIsActive(!isActive)}>
        {options[selected]}
        <img src=" " alt="loading" />
      </div>
      {isActive && (
        <div className={styles["dropdown-content"]}>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={(e) => {
                setSelected(index);
                setIsActive(false);
              }}
              className={styles["dropdown-item"]}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
