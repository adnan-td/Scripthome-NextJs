import styles from "./scripts.module.scss";

import ScriptPreview from "../../components/script-preview/preview.component";
import Background from "../../components/background/background.component";
import { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { WidthContext } from "../../contexts/screenwidth/screenwidth.context";

const ScriptsAll = ({ scripts }) => {
  const [displayscripts, setds] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const screenwidth = useContext(WidthContext);

  useEffect(() => {
    if (screenwidth > 1600) {
      setItemsPerPage(12);
    } else {
      setItemsPerPage(9);
    }
  }, [screenwidth]);

  useEffect(() => {
    if (scripts) {
      const pagesVisited = pageNumber * itemsPerPage;
      setds(
        scripts.slice(pagesVisited, pagesVisited + itemsPerPage).map((script, key) => {
          return <ScriptPreview script={script} key={key} />;
        })
      );
    }
  }, [pageNumber, scripts, itemsPerPage]);

  if (scripts) {
    var pageCount = Math.ceil(scripts.length / itemsPerPage);

    var changePage = ({ selected }) => {
      setPageNumber(selected);
    };
  }

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
