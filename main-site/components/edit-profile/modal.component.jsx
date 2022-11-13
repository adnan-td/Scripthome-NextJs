import { useContext, useEffect, useState } from "react";
import Options from "./select-option/mc.component";
import Epass from "./edit-password/mc.component";
import Eusername from "./edit-username/mc.component";
import Confirm from "./save-changes-confirm/mc.component";
import ImgUpload from "./upload-img/mc.component";
import RandomAvatar from "./random-avatar/mc.component";
import { UserContext } from "../../contexts/user/user.context";

export default function EditUser({ className, children }) {
  const [show, setShow] = useState(null);
  const { user } = useContext(UserContext);
  const [newUser, setNewUser] = useState(user);

  const handleClose = () => {
    setShow(null);
  };
  const handleShow = () => {
    setShow("Options");
    setNewUser(user);
  };

  useEffect(() => {
    async function SubmitForm() {
      setShow(null);
    }
    if (show === "Submit") {
      SubmitForm();
    }
  }, [show, newUser]);

  return (
    <>
      <button
        style={{ border: "none", backgroundColor: "transparent", width: "100%" }}
        onClick={handleShow}
        className={className}
      >
        {children}
      </button>
      {show === "Options" ? <Options handleClose={handleClose} setShow={setShow} /> : null}
      {show === "Epass" ? (
        <Epass
          handleClose={handleClose}
          setnewuser={setNewUser}
          newuser={newUser}
          setShow={setShow}
        />
      ) : null}
      {show === "Eusername" ? (
        <Eusername
          handleClose={handleClose}
          setnewuser={setNewUser}
          newuser={newUser}
          setShow={setShow}
        />
      ) : null}
      {show === "Upload" ? (
        <ImgUpload
          handleClose={handleClose}
          setnewuser={setNewUser}
          newuser={newUser}
          setShow={setShow}
        />
      ) : null}
      {show === "Confirm" ? (
        <Confirm
          handleClose={handleClose}
          setnewuser={setNewUser}
          newuser={newUser}
          setShow={setShow}
        />
      ) : null}
      {show === "Random-Avatar" ? (
        <RandomAvatar
          handleClose={handleClose}
          setnewuser={setNewUser}
          newuser={newUser}
          setShow={setShow}
        />
      ) : null}
    </>
  );
}
