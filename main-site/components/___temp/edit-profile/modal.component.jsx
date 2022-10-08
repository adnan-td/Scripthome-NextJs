import { useState } from "react";
import Modalmc from "./sign-up-s4-100/mc.component";
import "./modal.module.scss";

export default function Signupmodal({ className, children }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className={className}>
        {children}
      </button>
      {show ? <Modalmc handleClose={handleClose} /> : ""}
    </>
  );
}
