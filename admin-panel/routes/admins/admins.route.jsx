import Link from "next/link";
import ArrowButtons from "../../components/arrowbuttons/arrowbuttons.component";
import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../../contexts/searchfield/search.context";

import stylesa from "../../app.module.scss";
import stylesb from "../../bootstrap.module.scss";

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
          return admin.name.includes(searchfield) || admin.email.includes(searchfield);
        })
      );
      Setcurrent(0);
    } else {
      Setfilteredadmins(admins);
    }
  }, [searchfield, admins]);

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
                Admin Panel Users
              </li>
            </ol>
          </nav>
        </div>
        <div className={styles("edit-users")}>
          <Link href="/admin/admins/addadmin">
            <a>
              Add Users{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
              </svg>
            </a>
          </Link>
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
  const [dropdowntoggle, setdtoggle] = useState(false);
  let { name, email, role } = admin;
  const roleconverter = (role) => {
    if (role === 0) role = "Users";
    if (role === 1) role = "Verified";
    if (role === 2) role = "Admin";
    if (role === 3) role = "Super-Admin";
    return role;
  };
  role = roleconverter(role);
  return (
    <tr>
      <td>{srno + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <div className={role.toLocaleLowerCase()}>{role}</div>
      </td>
      <td>
        <div className={styles("dropdown")} style={{ position: "relative" }}>
          <button
            className={styles("dropdown-toggle") + " " + styles("dots")}
            type="button"
            onClick={() => {
              setdtoggle(!dropdowntoggle);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z" />
            </svg>
          </button>
          {dropdowntoggle ? (
            <ul className={styles("dropdown-menu") + " " + styles("dropdown-menu-shadow-orange")}>
              <li>
                <Link href={`/admin/admins/editadmin/${admin.id}`}>
                  <a className={styles("dropdown-item")}>
                    <span style={{ color: "green" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                      </svg>
                    </span>
                    Edit
                  </a>
                </Link>
              </li>
              <li>
                <a className={styles("dropdown-item")} href=" ">
                  <span style={{ color: "#fd683e" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                    </svg>
                  </span>
                  Deactivate
                </a>
              </li>
            </ul>
          ) : null}
        </div>
      </td>
    </tr>
  );
}
