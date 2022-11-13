import { useState } from "react";
import Modalmc from "./Inactive-Script-Modal/mc.component";

export default function InactiveScriptModal({ className, children }) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return <>{show ? <Modalmc handleClose={handleClose} /> : null}</>;
}
