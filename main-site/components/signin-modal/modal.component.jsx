import { useState } from "react";
import Modalmc from "./sign-in-modal/mc.component";

export default function Signinmodal({ className, children }) {
  const [show, setShow] = useState(0);
  const handleClose = () => setShow(0);
  const handleShow = () => setShow(1);

  return (
    <>
      <button onClick={handleShow} className={className}>
        {children}
      </button>
      {show === 1 ? <Modalmc handleClose={handleClose} handleShow={handleShow} /> : ""}
    </>
  );
}
