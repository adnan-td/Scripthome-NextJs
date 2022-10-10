import Navigation from "../navigation/navigation.component";
import Tabs from "../tabs/tabs.component";
import { useState, useContext, useEffect } from "react";
import { WidthContext } from "../../../main-site/contexts/screenwidth/screenwidth.context";

import stylesa from "../../app.module.scss";
import stylesb from "../../bootstrap.module.scss";

const styles = (classname) => {
  if (stylesa[classname]) return stylesa[classname];
  if (stylesb[classname]) return stylesb[classname];
};

export default function MainContent({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const screenwidth = useContext(WidthContext);
  // useEffect(() => {
  //   if (screenwidth < 900) {
  //     setIsOpen(false);
  //   }
  // }, [screenwidth]);

  return (
    <div
      className={
        isOpen && screenwidth < 650
          ? styles("body-container") + " " + styles("shrink")
          : styles("body-container")
      }
    >
      <Tabs isopen={isOpen} screenwidth={screenwidth} />
      <div
        className={styles("main1")}
        style={isOpen && screenwidth < 500 ? { visibility: "hidden" } : { visibility: "visible" }}
      >
        <Navigation setopen={setIsOpen} screenwidth={screenwidth} isopen={isOpen} />
        {children}
      </div>
    </div>
  );
}
