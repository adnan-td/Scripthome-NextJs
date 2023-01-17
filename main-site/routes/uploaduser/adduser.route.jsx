/* eslint-disable react-hooks/exhaustive-deps */
import styles from "../scripts/scripts.module.scss";

import ScriptPreview from "../../components/script-preview/preview.component";
import Background from "../../components/background/background.component";
import ReactPaginate from "react-paginate";
import { useContext, useEffect, useState } from "react";
import { WidthContext } from "../../contexts/screenwidth/screenwidth.context";

const Adduser = ({ userscripts, userdata }) => {
  const [displayscripts, setds] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [statistics, setStatistics] = useState({
    thisMonthScript: 0,
    thisMonthViews: 0,
    totalViews: 0,
  });

  const screenwidth = useContext(WidthContext);

  useEffect(() => {
    if (screenwidth > 1600) {
      setItemsPerPage(12);
    } else {
      setItemsPerPage(9);
    }
  }, [screenwidth]);

  useEffect(() => {
    const pagesVisited = pageNumber * itemsPerPage;
    setds(
      userscripts.slice(pagesVisited, pagesVisited + itemsPerPage).map((script, key) => {
        return <ScriptPreview script={script} key={key} />;
      })
    );
  }, [pageNumber, userscripts]);

  function updateStatistics() {
    var a = 0; // no of scripts
    var b = 0; // no of views this month
    var c = 0; // total no of views
    for (let i in userscripts) {
      const currentdate = new Date();
      const script = userscripts[i];
      const d1 = new Date(script.date);
      const d2 = new Date(currentdate.setMonth(currentdate.getMonth() - 1));
      if (d1 > d2) {
        a++;
        b += script.views;
        c += script.views;
      } else {
        c += script.views;
      }
    }
    return { a, b, c };
  }

  useEffect(() => {
    const { a, b, c } = updateStatistics();
    setStatistics({
      thisMonthScript: a,
      thisMonthViews: b,
      totalViews: c,
    });
  }, [userscripts]);

  const pageCount = Math.ceil(userscripts.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className={styles["scriptall"]}>
      <Background />
      <div className={styles["scriptall__wrapper"]}>
        <div className={styles["userdiv"]}>
          <img className={styles["userdiv__img"]} src={userdata?.img} alt="loading" />
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
                <p className={styles["ht-data-no"]}>{statistics.thisMonthScript}</p>
                <p className={styles["ht-data-name"]}>Total scripts this month</p>
              </div>
              <div className={styles["ht-data-inside"]}>
                <p className={styles["ht-data-no"]}>{statistics.totalViews}</p>
                <p className={styles["ht-data-name"]}>Total scripts views</p>
              </div>
              <div className={styles["ht-data-inside"]}>
                <p className={styles["ht-data-no"]}>{statistics.thisMonthViews}</p>
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
