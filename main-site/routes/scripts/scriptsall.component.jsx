import styles from "./scripts.module.scss";

import ScriptPreview from "../../components/script-preview/preview.component";
import Background from "../../components/background/background.component";
import { useEffect, useState } from "react";
import { hostname } from "../../../config/hostname";
import ReactPaginate from "react-paginate";

const ScriptsAll = () => {
  const [scripts, setScripts] = useState([]);
  useEffect(() => {
    async function getscripts() {
      const res = await fetch(`${hostname}/api/scripts`);
      if (res.status === 200) {
        const scripts = await res.json();
        setScripts(scripts);
      }
    }
    getscripts();
  }, []);

  const [displayscripts, setds] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 9;

  useEffect(() => {
    const pagesVisited = pageNumber * itemsPerPage;
    setds(
      scripts.slice(pagesVisited, pagesVisited + itemsPerPage).map((script, key) => {
        return <ScriptPreview script={script} key={key} />;
      })
    );
  }, [pageNumber, scripts]);

  const pageCount = Math.ceil(scripts.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className={styles["scriptall"]}>
      <Background />
      <div className={styles["scriptall__wrapper"]}>
        <p className={styles["scriptall__wrapper__heading"]}>All Scripts</p>
        <div className={styles["recentu-bottom"]}>{displayscripts}</div>
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={styles["pagination"]}
        pageLinkClassName={styles["paginationCon"]}
        previousLinkClassName={styles["paginationCon"]}
        nextLinkClassName={styles["paginationCon"]}
        disabledLinkClassName={styles["paginationCon"]}
        activeLinkClassName={styles["paginationCon"] + " " + styles["paginationCon__active"]}
      />
    </div>
  );
};

export default ScriptsAll;
