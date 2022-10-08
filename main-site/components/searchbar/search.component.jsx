import styles from "./search.module.scss";
import { useState } from "react";

const Search = ({ style }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchField, SetSearchField] = useState("");

  return (
    <>
      <div className={styles["search-box-container"]} style={{ ...style }}>
        <button onClick={handleShow}>
          <img src="/Nav-Icon/search-icon-nav.svg" alt="search-icon" />
        </button>
      </div>
      {((show) => {
        if (show) {
          return (
            <div className={styles["search-box-cover"]} onClick={handleClose}>
              <div className={styles["search-box"]} onClick={(e) => e.stopPropagation()}>
                <div className={styles["magnify"]}>
                  <img src="/Script/Modal-Icons/Search-Modal-Icon.svg" alt="search-icon" />
                </div>
                <div className={styles["inp-d"]}>
                  <input
                    placeholder="Search Scripts"
                    type="search"
                    onChange={(event) => {
                      SetSearchField(event.target.value.toLocaleLowerCase());
                    }}
                    value={searchField}
                  />
                </div>
              </div>
            </div>
          );
        }
      })(show)}
    </>
  );
};

export default Search;
