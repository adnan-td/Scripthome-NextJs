import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import ArrowButtons from "../../components/arrowbuttons/arrowbuttons.component";

import stylesa from "../../app.module.scss";
import stylesb from "../../bootstrap.module.scss";
import { SearchContext } from "../../contexts/searchfield/search.context";
import axios from "axios";
import { toast } from "react-toastify";
import { hostname } from "../../../config/hostname";

const styles = (classname) => {
  if (stylesa[classname]) return stylesa[classname];
  if (stylesb[classname]) return stylesb[classname];
};

export default function Reports({ reports }) {
  const [current, Setcurrent] = useState(0);
  const [shortreports, Setshortreports] = useState([]);
  const [filteredReports, SetfilteredReports] = useState([]);
  const { searchfield } = useContext(SearchContext);

  useEffect(() => {
    if (searchfield !== "") {
      SetfilteredReports(
        reports.filter((report) => {
          console.log(report);
          return (
            report.title.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) ||
            report.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
          );
        })
      );
      Setcurrent(0);
    } else {
      SetfilteredReports(reports);
    }
  }, [searchfield, reports]);

  const Addcurrent = () => {
    if (current + 10 > filteredReports.length) {
      return;
    }
    Setcurrent(current + 10);
  };

  const Subcurrent = () => {
    if (current - 10 < 0) {
      return;
    }
    Setcurrent(current - 10);
  };

  useEffect(() => {
    Setshortreports(filteredReports.slice(current, current + 10));
  }, [current, filteredReports]);
  // }, [current, reports]);

  return (
    <div className={styles("main2")}>
      <div className={styles("main-header")}>
        <div>
          <h3>Reports</h3>
          <nav aria-label="breadcrumb">
            <ol className={styles("breadcrumb")}>
              <li className={styles("breadcrumb-item")}>
                <Link href="/admin/dashboard">
                  <a
                    style={{
                      listStyle: "none",
                      color: "#8c8888",
                      textDecoration: "none",
                    }}
                  >
                    Dashboard
                  </a>
                </Link>
              </li>
              <li
                className={styles("breadcrumb-item")}
                aria-current="page"
                style={{ color: "#8c8888" }}
              >
                Reports
              </li>
            </ol>
          </nav>
        </div>
        {/* <div className={styles("edit-users")}>
          <a href=" ">
            Newest <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
          </a>
        </div>
        <div className={styles("dropdown edit-users")}>
          <button className={styles("dropdown-toggle")} type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-expanded="false">
            <span>Newest</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
          </button>
          <ul className={styles("dropdown-menu dropdown-menu-shadow")} aria-labelledby="dropdownMenuButton4">
            <li>
              <a href=" " className={styles("btn btn-light report-old")}>
                Oldest
              </a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className={styles("table-container")}>
        <table className={styles("table")}>
          <tbody style={{ width: "100%" }}>
            <tr>
              <td>Reported Scripts</td>
              <td>Review</td>
              <td>Update</td>
            </tr>
            {shortreports.map((item, key) => {
              return <Tr report={item} key={key} />;
            })}
          </tbody>
        </table>
      </div>
      <div className={styles("foot")}>
        <p>
          Displaying {current + shortreports.length} Out of {reports.length}
        </p>
        <div>
          <p>
            {current + 1}-{current + shortreports.length}
          </p>
          <ArrowButtons Addcurrent={Addcurrent} Subcurrent={Subcurrent} />
        </div>
      </div>
    </div>
  );
}

import Router from "next/router";

function Tr({ report }) {
  const { name: by_name, body, title: script_name } = report;
  async function handleResolve() {
    const res = await axios({
      url: `${hostname}/api/reports`,
      method: "post",
      data: {
        method: "update",
        report: {
          id: report.id,
          resolved: 1,
        },
      },
    });
    toast.success("Report resolved successfully!");
    setTimeout(() => {
      Router.reload(window.location.pathname);
    }, 1000);
  }
  return (
    <tr>
      <td>
        <div style={{ minWidth: "180px" }}>
          <p className={styles("im-1")}>{script_name}</p>
          {/* <p className={styles("im-1")} date-edit">21 June 2020, 12:42 AM</p> */}
          <p className={styles("im-1") + " " + styles("date-edit")}>Reported by: {by_name}</p>
        </div>
      </td>
      <td>
        <p className={styles("reports-review")}>{body}</p>
      </td>
      <td>
        <div style={{ display: "flex" }}>
          <button className={styles("resolve-a")} onClick={handleResolve}>
            {" "}
            Resolve{" "}
          </button>
        </div>
      </td>
    </tr>
  );
}
