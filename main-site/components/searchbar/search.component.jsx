import styles from "./search.module.scss";
import NotFound from "./search-noresult-modal/mc.component";
import Found from "./search-result-modal/mc.component";
import { useEffect, useRef, useState } from "react";
import { AllScriptContext } from "../../contexts/allscripts/scripts.context";

const Search = ({ style }) => {
  const [show, setShow] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchField, SetSearchField] = useState("");
  const [found, setFound] = useState(true);
  const [result, setResult] = useState([]);
  const [scripts, setScripts] = useState([]);
  const inputrefmain = useRef(null);

  async function setIt() {
    setScripts(await AllScriptContext.getScriptsAll());
  }

  useEffect(() => {
    if (searchField.length > 0 && scripts.length == 0) {
      setIt();
    }
  }, [searchField, scripts]);

  useEffect(() => {
    if (!showBottom) {
      inputrefmain?.current?.focus();
    }
  }, [showBottom]);

  useEffect(() => {
    if (!searchField) {
      setShowBottom(false);
      setFound(false);
      // inputrefmain.current.focus();
    } else {
      setShowBottom(true);
      const result = scripts.filter((script) => {
        return script.title.toLocaleLowerCase().includes(searchField);
      });
      if (result.length === 0) {
        setFound(false);
      } else {
        setResult(result);
        setFound(true);
      }
    }
  }, [searchField, scripts]);

  const handleChange = (event) => {
    SetSearchField(event.target.value.toLocaleLowerCase());
  };

  return (
    <>
      <div className={styles["search-box-container"]} style={{ ...style }}>
        <button onClick={handleShow} className={styles["search-button"]}>
          <img src="/Nav-Icon/search-icon-nav.svg" alt="search-icon" />
        </button>
      </div>
      {((show) => {
        if (show) {
          return (
            <div className={styles["search-box-cover"]} onClick={handleClose}>
              {!showBottom ? (
                <div className={styles["search-box"]} onClick={(e) => e.stopPropagation()}>
                  <div className={styles["magnify"]}>
                    <img src="/Script/Modal-Icons/Search-Modal-Icon.svg" alt="search-icon" />
                  </div>
                  <div className={styles["inp-d"]}>
                    <input
                      placeholder="Search Scripts"
                      type="search"
                      ref={inputrefmain}
                      onChange={handleChange}
                      value={searchField}
                    />
                  </div>
                </div>
              ) : (
                <FoundorNotfound
                  found={found}
                  formField={searchField}
                  setFormField={SetSearchField}
                  results={result}
                />
              )}
            </div>
          );
        }
      })(show)}
    </>
  );
};

const FoundorNotfound = ({ found, results, formField, setFormField }) => {
  if (found) {
    return <Found results={results} formField={formField} setFormField={setFormField} />;
  } else {
    return <NotFound formField={formField} setFormField={setFormField} />;
  }
};

export default Search;
