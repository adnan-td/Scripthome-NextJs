import styles from "./scripts.module.scss";

import ScriptPreview from "../../components/script-preview/preview.component";
import Background from "../../components/background/background.component";
import { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { WidthContext } from "../../contexts/screenwidth/screenwidth.context";
import { AllScriptContext } from "../../../main-site/contexts/allscripts/scripts.context";

const ScriptsAll = () => {
  const [displayscripts, setds] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [pageCount, setPageCount] = useState(null);
  const screenwidth = useContext(WidthContext);

  useEffect(() => {
    async function setIt() {
      setPageCount(Math.ceil((await AllScriptContext.getScriptsAllLength()) / itemsPerPage));
    }
    setIt();
  }, [itemsPerPage]);

  useEffect(() => {
    if (screenwidth > 1600) {
      setItemsPerPage(12);
    } else {
      setItemsPerPage(9);
    }
  }, [screenwidth]);

  useEffect(() => {
    async function setIt() {
      const pagesVisited = pageNumber * itemsPerPage;
      setds(
        (await AllScriptContext.getScriptsPaginated(itemsPerPage, pagesVisited)).map(
          (script, key) => {
            return <ScriptPreview script={script} key={key} />;
          }
        )
      );
    }
    setIt();
  }, [pageNumber, itemsPerPage]);

  // var pageCount = Math.ceil(scripts.length / itemsPerPage);
  var changePage = ({ selected }) => {
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
