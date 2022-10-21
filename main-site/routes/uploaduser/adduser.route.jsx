import styles from "../scripts/scripts.module.scss";

import ScriptPreview from "../../components/script-preview/preview.component";
import Background from "../../components/background/background.component";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

const Adduser = ({ userscripts, userdata }) => {
  const [displayscripts, setds] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 9;

  useEffect(() => {
    const pagesVisited = pageNumber * itemsPerPage;
    setds(
      userscripts.slice(pagesVisited, pagesVisited + itemsPerPage).map((script, key) => {
        return <ScriptPreview script={script} key={key} />;
      })
    );
  }, [pageNumber, userscripts]);

  const pageCount = Math.ceil(userscripts.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className={styles["scriptall"]}>
      <Background />
      <div className={styles["scriptall__wrapper"]}>
        <div className={styles["userdiv"]}>
          <img className={styles["userdiv__img"]} src="/Script/Avatars/avatar.png" alt="loading" />
          <div className={styles["userdiv__content"]}>
            <p className={styles["userdiv__content__name"]}>{userdata.name}</p>
            <p className={styles["userdiv__content__post"]}>Script Uploader</p>
          </div>
        </div>
        <div className={styles["home-data"]}>
          <div className={styles["ht-data__mod"]}>
            <div className={styles["ht-data"]}>
              <div className={styles["ht-data-inside"]}>
                <p className={styles["ht-data-no"]}>{userscripts.length}</p>
                <p className={styles["ht-data-name"]}>Total scripts posted</p>
              </div>
              <div className={styles["ht-data-inside"]}>
                <p className={styles["ht-data-no"]}>35</p>
                <p className={styles["ht-data-name"]}>Total scripts this month</p>
              </div>
              <div className={styles["ht-data-inside"]}>
                <p className={styles["ht-data-no"]}>52044</p>
                <p className={styles["ht-data-name"]}>Total scripts views</p>
              </div>
              <div className={styles["ht-data-inside"]}>
                <p className={styles["ht-data-no"]}>22948</p>
                <p className={styles["ht-data-name"]}>Total scripts views this month</p>
              </div>
            </div>
          </div>
        </div>
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

export default Adduser;
