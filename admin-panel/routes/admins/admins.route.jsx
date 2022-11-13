/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import ArrowButtons from "../../components/arrowbuttons/arrowbuttons.component";
import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../contexts/searchfield/search.context";
import Edit from "../../components/edit-admin-role-modal/mc.component.jsx";

import stylesa from "../../app.module.scss";
import stylesb from "../../bootstrap.module.scss";
import { UserContext } from "../../../main-site/contexts/user/user.context";

const styles = (classname) => {
  if (stylesa[classname]) return stylesa[classname];
  if (stylesb[classname]) return stylesb[classname];
};

export default function Admins({ admins }) {
  const { searchfield } = useContext(SearchContext);
  const [current, Setcurrent] = useState(0);
  const [shortadmins, Setshortadmins] = useState([]);
  const [filteredadmins, Setfilteredadmins] = useState([]);
  const [temp, setTemp] = useState(null);
  const { user } = useContext(UserContext);

  const Addcurrent = () => {
    if (current + 10 > filteredadmins.length) {
      return;
    }
    Setcurrent(current + 10);
  };

  const Subcurrent = () => {
    if (current - 10 < 0) {
      return;
    }
    Setcurrent(current - 10);
  };

  useEffect(() => {
    let data = localStorage.getItem("current-admins-page-temp");
    data = Number(data);
    if (data !== 0) {
      setTemp(data);
    }
    if (temp !== null) {
      Setcurrent(temp);
    }
  }, [temp]);

  useEffect(() => {
    localStorage.setItem("current-admins-page-temp", JSON.stringify(current));
  }, [current]);

  useEffect(() => {
    if (searchfield !== "") {
      Setfilteredadmins(
        admins.filter((admin) => {
          return (
            admin.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) ||
            admin.email.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) ||
            admin.role < user.role
          );
        })
      );
      Setcurrent(0);
    } else {
      Setfilteredadmins(
        admins.filter((admin) => {
          return admin?.role <= user?.role;
        })
      );
    }
  }, [searchfield, admins, user]);

  useEffect(() => {
    Setshortadmins(filteredadmins.slice(current, current + 10));
  }, [current, searchfield, filteredadmins]);

  return (
    <div className={styles("main2")}>
      <div className={styles("main-header")}>
        <div>
          <h3>All Users</h3>
          <nav aria-label="breadcrumb">
            <ol className={styles("breadcrumb")}>
              <li className={styles("breadcrumb-item")}>
                <Link href="/admin/dashboard">
                  <a
                    style={{
                      listStyle: "none",
                      color: "#8c8888",
                      textDecoration: "none",
                    }}
                  >
                    Dashboard
                  </a>
                </Link>
              </li>
              <li
                className={styles("breadcrumb-item")}
                aria-current="page"
                style={{ color: "#8c8888" }}
              >
                All Users
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className={styles("table-container")}>
        <table className={styles("table")}>
          <tbody>
            <tr>
              <td>Sr.No.</td>
              <td>Name</td>
              <td>Email</td>
              <td>Role</td>
              <td></td>
            </tr>
            {shortadmins.map((item, key) => {
              return <Tr key={key} admin={item} srno={current + key} />;
            })}
          </tbody>
        </table>
      </div>
      <div className={styles("foot")}>
        <p>
          Displaying {shortadmins.length} Out of {filteredadmins.length}
        </p>
        <div>
          <p>
            {current + 1}-{current + shortadmins.length}
          </p>
          <ArrowButtons Addcurrent={Addcurrent} Subcurrent={Subcurrent} />
        </div>
      </div>
    </div>
  );
}

function Tr({ srno, admin }) {
  const { user } = useContext(UserContext);
  let { name, email, role } = admin;
  const roleconverter = (role) => {
    if (role === -1) role = "Deactivated";
    if (role === 0) role = "Users";
    if (role === 1) role = "Verified";
    if (role === 2) role = "Admin";
    if (role === 3) role = "Super-Admin";
    return role;
  };
  return (
    <tr>
      <td>{srno + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <div className={styles(roleconverter(role).toLocaleLowerCase())}>{roleconverter(role)}</div>
      </td>
      <td>
        {user?.role > role && user?.role >= 2 ? (
          <div>
            <EditUser className={styles("dropdown-item-mod")} user={admin}>
              Edit
            </EditUser>
          </div>
        ) : null}
      </td>
    </tr>
  );
}

function EditUser({ className, user, children }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <button
        style={{ border: "none", backgroundColor: "transparent" }}
        onClick={handleShow}
        className={className}
      >
        {children}
      </button>
      {show ? <Edit handleClose={handleClose} newuser={user} /> : null}
    </>
  );
}
