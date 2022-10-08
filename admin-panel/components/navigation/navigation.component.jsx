import { useEffect, useRef, useState, useContext } from "react";
import { SearchContext } from "../../contexts/searchfield/search.context";

export default function Navigation({ screenwidth, setopen, isopen }) {
  const [res, setres] = useState(true);
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
  }, [res, screenwidth, setopen]);

  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <button
          className={
            isopen && screenwidth < 500 ? "navbar-toggler tog tog-small" : "navbar-toggler tog"
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav-leftside">
          {screenwidth > 680 && (
            <form className="d-flex">
              <div className="search" id="search-big">
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
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
          )}
          {screenwidth <= 680 && (
            <div className="dropdown" id="search-small">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                <li>
                  <form className="d-flex">
                    <div className="search">
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
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          )}
          <div className="bell">
            <button href="">
              <i className="fa-solid fa-bell"></i>
            </button>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              id="dropdownMenuButton3"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ padding: "0" }}
            >
              <div className="nav-user">
                <span>Hello, User</span>
                <div style={{ display: "inline-block" }}>
                  <img src="/Adminpanel/img/pexels-bran-sodre-2622901.jpg" alt="loading" />
                </div>
              </div>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-shadow"
              aria-labelledby="dropdownMenuButton3"
            >
              <li>
                <a className="btn btn-light" href=" " style={{ fontSize: "smaller" }}>
                  <span style={{ color: "#2b3ac1" }}>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  </span>
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
