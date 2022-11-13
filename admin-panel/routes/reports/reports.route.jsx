import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import ArrowButtons from "../../components/arrowbuttons/arrowbuttons.component";

import stylesa from "../../app.module.scss";
import stylesb from "../../bootstrap.module.scss";
import { SearchContext } from "../../contexts/searchfield/search.context";
import axios from "axios";
import { toast } from "react-toastify";

const styles = (classname) => {
  if (stylesa[classname]) return stylesa[classname];
  if (stylesb[classname]) return stylesb[classname];
};

export default function Reports({ reports }) {
  const { user } = useContext(UserContext);
  const [current, Setcurrent] = useState(0);
  const [shortreports, Setshortreports] = useState([]);
  const [filteredReports, SetfilteredReports] = useState([]);
  const { searchfield } = useContext(SearchContext);

  useEffect(() => {
    if (searchfield !== "") {
      SetfilteredReports(
        reports.filter((report) => {
          if (user?.role >= 2) {
            return (
              report.title.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) ||
              report.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
            );
          } else {
            return (
              report.user_id === user?.id &&
              (report.title.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) ||
                report.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()))
            );
          }
        })
      );
      Setcurrent(0);
    } else {
      SetfilteredReports(
        reports.filter((report) => {
          if (user?.role >= 2) {
            return true;
          } else {
            return report.user_id === user?.id;
          }
        })
      );
    }
  }, [searchfield, reports, user]);

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
          Displaying {current + shortreports.length} Out of {filteredReports.length}
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
import { UserContext } from "../../../main-site/contexts/user/user.context";

function Tr({ report }) {
  const { name: by_name, body, title: script_name } = report;
  const { user } = useContext(UserContext);
  async function handleResolve() {
    const res = await axios({
      url: `/api/reports`,
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
    Router.replace(Router.asPath);
  }
  return (
    <tr>
      <td>
        <div style={{ minWidth: "180px" }}>
          <p className={styles("im-1")}>{script_name}</p>
          <p className={styles("im-1") + " " + styles("date-edit")}>Reported by: {by_name}</p>
        </div>
      </td>
      <td>
        <p className={styles("reports-review")}>{body}</p>
      </td>
      <td>
        <div style={{ display: "flex" }}>
          {user?.role >= 2 && (
            <button className={styles("resolve-a")} onClick={handleResolve}>
              {" "}
              Resolve{" "}
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}
