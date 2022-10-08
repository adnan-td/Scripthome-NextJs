import Navigation from "../navigation/navigation.component";
import Tabs from "../tabs/tabs.component";
import { useState, useContext, useEffect } from "react";
import { WidthContext } from "../../../main-site/contexts/screenwidth/screenwidth.context";

export default function MainContent({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const screenwidth = useContext(WidthContext);
  // useEffect(() => {
  //   if (screenwidth < 900) {
  //     setIsOpen(false);
  //   }
  // }, [screenwidth]);

  return (
    <div className={isOpen && screenwidth < 650 ? "body-container shrink" : "body-container"}>
      <Tabs isopen={isOpen} screenwidth={screenwidth} />
      <div
        className="main1"
        style={isOpen && screenwidth < 500 ? { visibility: "hidden" } : { visibility: "visible" }}
      >
        <Navigation setopen={setIsOpen} screenwidth={screenwidth} isopen={isOpen} />
        {children}
      </div>
    </div>
  );
}
