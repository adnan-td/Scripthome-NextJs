import { useEffect, useRef, useState, useContext } from "react";
import { SearchContext } from "../../contexts/searchfield/search.context";
import { UserContext } from "../../../main-site/contexts/user/user.context";
import EditUser from "../../../main-site/components/edit-profile/modal.component";
import EditAdsense from "../edit-default-adsense/mc.component";
import { signOut, useSession } from "next-auth/react";

import stylesa from "../../app.module.scss";
import stylesb from "../../bootstrap.module.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { imghost } from "../../../config/img_hostname";

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
  const { user } = useContext(UserContext);

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

  const HandleLogout = async () => {
    signOut();
  };

  async function handleRemoveUF() {
    const res = await axios.get(`/api/getimglist`);
    if (res.data) {
      await axios.post(`${imghost}/request/remove-unused`, {
        imglist: res.data.imglist,
      });
      toast.success("Successfully deleted unused files!");
    } else {
      toast.error("Something happened!");
    }
  }

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
                <span>Hello, {user?.name}</span>
                <div style={{ display: "inline-block" }}>
                  <img src={user?.img} alt="loading" />
                </div>
              </div>
            </button>
            {isOpen ? (
              <ul
                className={styles("dropdown-menu") + " " + styles("dropdown-menu-shadow")}
                aria-labelledby="dropdownMenuButton3"
              >
                <li style={{ minWidth: "max-content", maxWidth: "100%" }}>
                  <EditUser>
                    <a>
                      <span style={{ display: "grid", placeItems: "center" }}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.12"
                            d="M4.55809 16.1491C4.70537 15.7662 4.77901 15.5747 4.90531 15.487C5.01569 15.4104 5.15228 15.3814 5.28427 15.4066C5.43531 15.4354 5.58036 15.5805 5.87046 15.8706L8.12955 18.1297C8.41965 18.4198 8.56469 18.5648 8.59354 18.7159C8.61874 18.8478 8.58976 18.9844 8.51312 19.0948C8.42542 19.2211 8.23396 19.2948 7.85104 19.442L2.5 21.5001L4.55809 16.1491Z"
                            fill="#12B76A"
                          />
                          <path
                            d="M2.5 21.5001L8.04927 19.3657C8.40421 19.2292 8.58168 19.161 8.74772 19.0718C8.8952 18.9927 9.0358 18.9013 9.16804 18.7987C9.31692 18.6831 9.45137 18.5487 9.72028 18.2798L21 7.00006C22.1046 5.89549 22.1046 4.10463 21 3.00006C19.8955 1.89549 18.1046 1.89549 17 3.00006L5.72028 14.2798C5.45138 14.5487 5.31692 14.6831 5.20139 14.832C5.09877 14.9643 5.0074 15.1049 4.92823 15.2523C4.83911 15.4184 4.77085 15.5959 4.63433 15.9508L2.5 21.5001ZM2.5 21.5001L4.55812 16.149C4.7054 15.7661 4.77903 15.5746 4.90534 15.4869C5.01572 15.4103 5.1523 15.3813 5.2843 15.4065C5.43533 15.4354 5.58038 15.5804 5.87048 15.8705L8.12957 18.1296C8.41967 18.4197 8.56472 18.5648 8.59356 18.7158C8.61877 18.8478 8.58979 18.9844 8.51314 19.0947C8.42545 19.2211 8.23399 19.2947 7.85107 19.442L2.5 21.5001Z"
                            stroke="#12B76A"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      Edit Profile
                    </a>
                  </EditUser>
                </li>
                {user.role === 3 && (
                  <>
                    <li style={{ minWidth: "max-content", maxWidth: "100%" }}>
                      <EditDefaultAdsense>
                        <a>
                          <span style={{ display: "grid", placeItems: "center" }}>
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="16" cy="16" r="14" fill="#036CB5" />
                              <path
                                d="M15.9524 6C17.5128 6 18.9973 6.36301 20.3295 7.01236C20.5384 7.10807 20.7487 7.22262 20.9569 7.33728L20.0435 8.1589L18.6741 6.72611L16.3145 8.82729L14.925 7.31794L10.586 11.2342L13.364 14.3099L12.2795 15.2648L15.0202 18.3405L13.9356 19.295L17.8561 23.6697L20.1764 21.5301L22.1945 23.823C21.7946 24.1287 21.3569 24.435 20.8817 24.702C19.4351 25.5233 17.7602 26 15.9716 26C10.4715 26 6.00006 21.5117 6.00006 15.9914C5.98064 10.5084 10.4528 6 15.9524 6ZM14.1252 15.3797L16.5041 13.24L18.6359 15.6278L16.2566 17.7673L14.1252 15.3797ZM15.8194 19.506L18.1789 17.3474L20.3295 19.7351L17.9505 21.8748L15.8194 19.506ZM12.4326 11.3109L14.8107 9.17125L16.9421 11.5591L14.5631 13.6986L12.4326 11.3109ZM16.7896 10.1644L18.5595 8.5598L20.1584 10.3365L18.3885 11.96L16.7896 10.1644ZM19.9489 17.519L21.7183 15.9144L23.3171 17.7096L21.5471 19.3152L19.9489 17.519ZM21.5092 21.1299L23.2792 19.5249L24.8768 21.3015L23.1074 22.9248L21.5092 21.1299ZM22.2324 12.877L23.4121 11.8071L24.4775 12.992L23.298 14.0614L22.2324 12.877ZM20.71 9.34294L21.8898 8.25431L22.9559 9.45759L21.7752 10.5274L20.71 9.34294ZM23.7356 16.4114L24.9153 15.3416L26 16.526L24.8015 17.5955L23.7356 16.4114ZM18.4264 13.756L20.1964 12.1513L21.7946 13.9275L20.0253 15.5325L18.4264 13.756Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          Change Default Adsense
                        </a>
                      </EditDefaultAdsense>
                    </li>
                    <li style={{ minWidth: "max-content", maxWidth: "100%" }}>
                      <a
                        className={styles("btn") + " " + styles("btn-light")}
                        style={{ fontSize: "smaller" }}
                        onClick={handleRemoveUF}
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
                              d="M16.5 2.5L21.5 7.5M21.5 2.5L16.5 7.5M12.5 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H17C17.93 21 18.395 21 18.7765 20.8978C19.8117 20.6204 20.6204 19.8117 20.8978 18.7765C21 18.395 21 17.93 21 17M10.5 8.5C10.5 9.60457 9.60457 10.5 8.5 10.5C7.39543 10.5 6.5 9.60457 6.5 8.5C6.5 7.39543 7.39543 6.5 8.5 6.5C9.60457 6.5 10.5 7.39543 10.5 8.5ZM14.99 11.9181L6.53115 19.608C6.05536 20.0406 5.81747 20.2568 5.79643 20.4442C5.77819 20.6066 5.84045 20.7676 5.96319 20.8755C6.10478 21 6.42628 21 7.06929 21H16.456C17.8951 21 18.6147 21 19.1799 20.7582C19.8894 20.4547 20.4547 19.8894 20.7582 19.1799C21 18.6147 21 17.8951 21 16.456C21 15.9717 21 15.7296 20.9471 15.5042C20.8805 15.2208 20.753 14.9554 20.5733 14.7264C20.4303 14.5442 20.2412 14.3929 19.8631 14.0905L17.0658 11.8527C16.6874 11.5499 16.4982 11.3985 16.2898 11.3451C16.1061 11.298 15.9129 11.3041 15.7325 11.3627C15.5279 11.4291 15.3486 11.5921 14.99 11.9181Z"
                              stroke="#D92D20"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        Remove Unused Images
                      </a>
                    </li>
                  </>
                )}
                <li style={{ minWidth: "max-content", maxWidth: "100%" }}>
                  <a
                    className={styles("btn") + " " + styles("btn-light")}
                    style={{ fontSize: "smaller" }}
                    onClick={HandleLogout}
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

function EditDefaultAdsense({ className, user, children }) {
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
      {show ? <EditAdsense handleClose={handleClose} /> : null}
    </>
  );
}
