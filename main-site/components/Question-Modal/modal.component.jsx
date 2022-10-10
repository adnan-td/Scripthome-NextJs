import { useState } from "react";
import Modalmc1 from "./Welcome-01/mc.component";
import Modalmc2 from "./Welcome-02/mc.component";
import Modalmc3 from "./Welcome-03/mc.component";
import Modalmc4 from "./Welcome-04/mc.component";
import Modalmc5 from "./Welcome-05/mc.component";

export default function FloatingModal({ className, children }) {
  const [show, setShow] = useState(null);
  const handleClose = () => setShow(null);
  const handleShow = () => setShow(1);

  return (
    <>
      <button onClick={handleShow} className={className}>
        {children}
      </button>
      {show === 1 ? <Modalmc1 handleClose={handleClose} next={setShow} /> : null}
      {show === 2 ? <Modalmc2 handleClose={handleClose} next={setShow} /> : null}
      {show === 3 ? <Modalmc3 handleClose={handleClose} next={setShow} /> : null}
      {show === 4 ? <Modalmc4 handleClose={handleClose} next={setShow} /> : null}
      {show === 5 ? <Modalmc5 handleClose={handleClose} next={setShow} /> : null}
    </>
  );
}
