import { useState } from "react";
import Modalmc1 from "./sign-in-modal/mc.component";
import Modalmc2 from "./sign-in-success/mc.component";

export default function Signinmodal({ className, children }) {
  const [show, setShow] = useState(0);
  const handleClose = () => setShow(0);
  const handleShow = (x) => setShow(x);
  const handleClick = () => setShow(1);

  return (
    <>
      <button onClick={handleClick} className={className}>
        {children}
      </button>
      {show === 1 ? <Modalmc1 handleClose={handleClose} handleShow={handleShow} /> : ""}
      {show === 2 ? <Modalmc2 handleClose={handleClose} handleShow={handleShow} /> : ""}
    </>
  );
}
