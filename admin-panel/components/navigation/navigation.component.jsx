import { useEffect, useRef, useState, useContext } from "react";
import { SearchContext } from "../../contexts/searchfield/search.context";

import stylesa from "../../app.module.scss";
import stylesb from "../../bootstrap.module.scss";
import { flushSync } from "react-dom";

const styles = (classname) => {
  if (stylesa[classname]) return stylesa[classname];
  if (stylesb[classname]) return stylesb[classname];
};

export default function Navigation({ screenwidth, setopen, isopen }) {
  const [res, setres] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const buttonref = useRef(null);
  const { searchfield, Setsearchfield } = useContext(SearchContext);

  useEffect(() => {
    if (!res && screenwidth <= 650) {
      setopen(false);
      setres(true);
      buttonref.current.click();
    }
    if (res && screenwidth > 650) {
      setres(false);
    }

    // console.log(screenwidth > 680);
  }, [res, screenwidth, setopen]);

  return (
    <nav className={styles("navbar") + " " + styles("navbar-light")}>
      <div className={styles("container-fluid") + " " + styles("container-fluid2")}>
        <button
          className={
            isopen && screenwidth < 500
              ? styles("navbar-toggler") + " " + styles("tog") + " " + styles("tog-small")
              : styles("navbar-toggler") + " " + styles("tog")
          }
          type="button"
          onClick={() => {
            setopen(!isopen);
          }}
          ref={buttonref}
          style={isopen && screenwidth < 500 ? { visibility: "visible" } : {}}
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className={styles("navbar-toggler-icon")}></span>
        </button>
        <div className={styles("nav-leftside")}>
          {screenwidth > 680 && (
            <form className={styles("d-flex")}>
              <div className={styles("search")} id="search-big">
                <input
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => {
                    Setsearchfield(e.target.value);
                  }}
                  value={searchfield}
                />
                <button href="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                  </svg>
                </button>
              </div>
            </form>
          )}
          {screenwidth <= 680 && (
            <div className={styles("dropdown")} id="search-small" style={{ position: "relative" }}>
              <button
                className={
                  styles("btn") + " " + styles("btn-light") + " " + styles("dropdown-toggle")
                }
                type="button"
                onClick={() => {
                  setIsOpen2(!isOpen2);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                </svg>
              </button>
              {isOpen2 ? (
                <ul
                  className={styles("dropdown-menu") + " " + styles("nav-search-dropdown")}
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <form className={styles("d-flex")}>
                      <div className={styles("search")}>
                        <input
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                          onChange={(e) => {
                            Setsearchfield(e.target.value);
                          }}
                          value={searchfield}
                        />
                        <button href="">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </li>
                </ul>
              ) : null}
            </div>
          )}
          <div className={styles("bell")}>
            <button href="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
              </svg>
            </button>
          </div>
          <div className={styles("dropdown")} style={{ position: "relative" }}>
            <button
              className={
                styles("btn") + " " + styles("btn-light") + " " + styles("dropdown-toggle")
              }
              type="button"
              style={{ padding: "0" }}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <div className={styles("nav-user")}>
                <span>Hello, User</span>
                <div style={{ display: "inline-block" }}>
                  <img src="/Adminpanel/img/pexels-bran-sodre-2622901.jpg" alt="loading" />
                </div>
              </div>
            </button>
            {isOpen ? (
              <ul
                className={styles("dropdown-menu") + " " + styles("dropdown-menu-shadow")}
                aria-labelledby="dropdownMenuButton3"
              >
                <li>
                  <a
                    className={styles("btn") + " " + styles("btn-light")}
                    href=" "
                    style={{ fontSize: "smaller" }}
                  >
                    <span style={{ stroke: "#2b3ac1", display: "grid", placeItems: "center" }}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 17L21 12M21 12L16 7M21 12H9M9 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9"

                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Log Out
                  </a>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}
