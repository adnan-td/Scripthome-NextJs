import { useEffect, useState } from "react";
import Link from "next/link";
import ArrowButtons from "../../components/arrowbuttons/arrowbuttons.component";

const reports = [{}, {}];
export default function Reports() {
  const [current, Setcurrent] = useState(0);
  const [shortreports, Setshortreports] = useState([]);

  const Addcurrent = () => {
    if (current + 10 > reports.length) {
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
    Setshortreports(reports.slice(current, current + 10));
  }, [current]);
  // }, [current, reports]);

  return (
    <div className="main2">
      <div className="main-header">
        <div>
          <h3>Reports</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
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
              <li className="breadcrumb-item" aria-current="page" style={{ color: "#8c8888" }}>
                Reports
              </li>
            </ol>
          </nav>
        </div>
        {/* <div className="edit-users">
          <a href=" ">
            Newest <i className="fa-solid fa-caret-right"></i>
          </a>
        </div>
        <div className="dropdown edit-users">
          <button className="dropdown-toggle" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-expanded="false">
            <span>Newest</span> <i className="fa-solid fa-caret-right"></i>
          </button>
          <ul className="dropdown-menu dropdown-menu-shadow" aria-labelledby="dropdownMenuButton4">
            <li>
              <a href=" " className="btn btn-light report-old">
                Oldest
              </a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="table-container">
        <table className="table">
          <tbody>
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
      <div className="foot">
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

function Tr({ report }) {
  const { rsName, reportedBy, review } = report;
  return (
    <tr>
      <td>
        <div style={{ minWidth: "180px" }}>
          <p className="im-1">{rsName}</p>
          {/* <p className="im-1 date-edit">21 June 2020, 12:42 AM</p> */}
          <p className="im-1 date-edit">Reported by: {reportedBy}</p>
        </div>
      </td>
      <td>
        <p className="reports-review">{review}</p>
      </td>
      <td>
        <div style={{ display: "flex" }}>
          <a href=" " className="resolve-a">
            {" "}
            Resolve{" "}
          </a>
        </div>
      </td>
    </tr>
  );
}
