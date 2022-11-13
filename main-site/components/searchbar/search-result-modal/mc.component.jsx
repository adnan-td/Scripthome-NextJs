import { useEffect, useRef } from "react";
import styles from "./mc.module.scss";
import { imghost } from "../../../../config/img_hostname";
import Link from "next/link";

const Modalmc = ({ formField, setFormField, results }) => {
  var slugify = require("slugify");
  const inputref = useRef(null);
  useEffect(() => {
    inputref.current.focus();
  }, []);
  return (
    <div className={styles["modal-cover"]}>
      <div className={styles["Script-Modal"]} onClick={(e) => e.stopPropagation()}>
        <div className={styles["top-content"]}>
          <div className={styles["input-wrapper"]}>
            <img
              src="/Script/Modal-Icons/search-lg-black.svg"
              alt=""
              className={styles["search-lg-black"]}
            />
            <input
              type="text"
              placeholder="Search"
              className={styles["search-int"]}
              ref={inputref}
              value={formField}
              onChange={(e) => {
                setFormField(e.target.value);
              }}
            />
          </div>
          <div className={styles["script-found"]}>
            <p className={styles["result-num"]}>{results.length} Scripts Found </p>
            <div className={styles["script-div-wrapper"]}>
              {results.map((result, i) => {
                return (
                  <Link href={`/scripts/${slugify(result.title, { lower: true })}`} key={i}>
                    <div className={styles["script-div"]}>
                      <div className={styles["script-img"]}>
                        <img
                          className={styles["script-img__img"]}
                          src={`${imghost}/${result.img}`}
                          alt="loading"
                        />
                      </div>
                      <div className={styles["content-div-script"]}>
                        <p className={styles["scripts-title"]}>{result.title}</p>
                        <p className={styles["scripts-subheading"]}>{result.description}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
              {/* <div className={styles["script-div"]}>
                <div className={styles["script-img"]}></div>
                <div className={styles["content-div-script"]}>
                  <p className={styles["scripts-title"]}>Ninja Training Simulator</p>
                  <p className={styles["scripts-subheading"]}>
                    This Ninja Training Simulator Script can do many useful functions to play the
                    game more easily like autotap, autorebirth and more.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalmc;
