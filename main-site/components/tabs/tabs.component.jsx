import { useContext, useEffect, useState } from "react";
import Dropdown from "../Scriptdropdown/dropdown.component";
import styles from "./tabs.module.scss";
import { WidthContext } from "../../contexts/screenwidth/screenwidth.context";

const Tabs = ({ children }) => {
  const [state, setState] = useState({ selected: 0 });
  const [selected, setSelected] = useState(0);
  const screenwidth = useContext(WidthContext);

  function handleChange(index) {
    setState({ selected: index });
  }

  useEffect(() => {
    handleChange(selected);
  }, [selected]);

  useEffect(() => {
    setSelected(state.selected);
  }, [state]);

  return (
    <div className={styles["tabs-container"]}>
      {screenwidth > 500 && (
        <ul className={styles["tabs-ul"]}>
          {children.map((elem, index) => {
            let style = index === state.selected ? "selected" : "";
            return (
              <li
                key={index}
                className={styles["tabs-li"] + " " + styles[style]}
                onClick={() => handleChange(index)}
              >
                {elem.props.title}
              </li>
            );
          })}
        </ul>
      )}
      {screenwidth <= 500 && <Dropdown selected={selected} setSelected={setSelected} />}
      <div className={styles["tab"]}>{children[state.selected]}</div>
    </div>
  );
};

export default Tabs;
