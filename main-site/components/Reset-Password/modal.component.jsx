import { useEffect, useState } from "react";
import Modalmc1 from "./email/mc.component";
import Modalmc2 from "./otp/mc.component";
import Modalmc3 from "./password/mc.component";
import Modalmc4 from "./finish/mc.component";
import axios from "axios";
import { hostname } from "../../../config/hostname";
import { toast } from "react-toastify";

export default function ResetPass({ className, prevclose, children }) {
  const [show, setShow] = useState(false);
  const [whichModal, setModal] = useState(1);
  const [newuser, setNewuser] = useState({});
  const [otp, setotp] = useState(null);
  const [expiry, setexpiry] = useState(null);

  async function getOTP(email) {
    const res = await axios({
      method: "post",
      data: { email: email },
      url: `${hostname}/api/resetpass`,
    });
    if (res.status === 201) {
      setotp(res.data.otp);
      setexpiry(res.data.expiry);
    } else {
      toast.error(res.data.message);
      handleClose();
    }
  }

  const handleClose = () => {
    setShow(false);
    setNewuser({});
    setModal(1);
    prevclose();
  };
  const handleShow = () => {
    prevclose();
    setShow(true);
  };

  function RenderModal(show, whichModal) {
    if (show && whichModal === 1) {
      return (
        <Modalmc1
          handleClose={handleClose}
          setModal={setModal}
          setNewuser={setNewuser}
          getOTP={getOTP}
        />
      );
    } else if (show && whichModal === 2) {
      return (
        <Modalmc2
          handleClose={handleClose}
          setModal={setModal}
          newuser={newuser}
          otp={otp}
          getOTP={getOTP}
          expiry={expiry}
        />
      );
    } else if (show && whichModal === 3) {
      return (
        <Modalmc3
          handleClose={handleClose}
          newuser={newuser}
          setnewuser={setNewuser}
          next={setModal}
        />
      );
    } else if (show && whichModal === 4) {
      return <Modalmc4 handleClose={handleClose} next={setModal} newuser={newuser} />;
    } else return;
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
