import { useState } from "react";
import Modalmc1 from "./sign-up-s1/mc.component";
// import Modalmc2 from "./sign-up-s2/mc.component";
// import Modalmc3 from "./sign-up-s3/mc.component";
// import Modalmc4 from "./sign-up-s4/mc.component";
// import Modalmc5 from "./sign-up-s5/mc.component";

export default function Signupmodal({ className, children }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [whichModal, setModal] = useState(1);

  function RenderModal(show, whichModal) {
    if (show && whichModal === 1) {
      return <Modalmc1 handleClose={handleClose} next={setModal} />;
    }
    // } else if (show && whichModal === 2) {
    //   return <Modalmc2 handleClose={handleClose} next={setModal} />;
    // } else if (show && whichModal === 3) {
    //   return <Modalmc3 handleClose={handleClose} next={setModal} />;
    // } else if (show && whichModal === 4) {
    //   return <Modalmc4 handleClose={handleClose} next={setModal} />;
    // } else if (show && whichModal === 5) {
    //   return <Modalmc5 handleClose={handleClose} next={setModal} />;
    // } else return;
  }

  return (
    <>
      <button onClick={handleShow} className={className}>
        {children}
      </button>
      {RenderModal(show, whichModal)}
    </>
  );
}
