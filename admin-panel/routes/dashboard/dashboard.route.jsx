import ArrowButtons from "../../components/arrowbuttons/arrowbuttons.component";
import { useEffect, useContext, useState } from "react";
import Link from "next/link";
import { SearchContext } from "../../contexts/searchfield/search.context";

import stylesa from "../../app.module.scss";
import stylesb from "../../bootstrap.module.scss";

const styles = (classname) => {
  if (stylesa[classname]) return stylesa[classname];
  if (stylesb[classname]) return stylesb[classname];
};

const scripts = [{}, {}];
export default function Dashboard() {
  const { searchfield } = useContext(SearchContext);
  const [current, Setcurrent] = useState(0);
  const [shortscripts, Setshortscripts] = useState([]);
  const [filteredscripts, Setfilteredscripts] = useState([]);
  const images = [];
  for (let i = 1; i < 7; i++) {
    images.push(`/Adminpanel/img/img${i}.jpg`);
  }

  const Addcurrent = () => {
    if (current + 6 > filteredscripts.length) {
      return;
    }
    Setcurrent(current + 6);
  };

  const Subcurrent = () => {
    if (current - 6 < 0) {
      return;
    }
    Setcurrent(current - 6);
  };

  useEffect(() => {
    if (searchfield !== "") {
      Setfilteredscripts(
        scripts.filter((script) => {
          return script.title.includes(searchfield) || script.madeby.includes(searchfield);
        })
      );
      Setcurrent(0);
    } else {
      Setfilteredscripts(scripts);
    }
  }, [searchfield]);
  // }, [searchfield, scripts]);

  useEffect(() => {
    Setshortscripts(filteredscripts.slice(current, current + 6));
  }, [current, filteredscripts]);

  return (
    <div className={styles("main2")}>
      <div className={styles("main-header")}>
        <div>
          <h3>Dashboard</h3>
          <nav aria-label="breadcrumb">
            <ol className={styles("breadcrumb")}>
              <li
                className={styles("breadcrumb-item")}
                aria-current="page"
                style={{ color: "#8c8888" }}
              >
                Welcome Skumminity Admin
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className={styles("table-container")}>
        <table className={styles("table")}>
          <tbody>
            <tr>
              <td>Scripts</td>
              <td>Likes</td>
              <td>Views</td>
              <td>Status</td>
              <td>Date</td>
              <td>Edit</td>
              <td>Preview</td>
            </tr>
            {/* <Tr img={img1} />
            <Tr img={img2} />
            <Tr img={img3} />
            <Tr img={img1} />
            <Tr img={img2} />
            <Tr img={img3} /> */}
            {shortscripts.map((item, key) => {
              return (
                <Tr
                  img={images[Math.floor(Math.random() * images.length)]}
                  script={item}
                  key={key}
                  srno={current + key}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={styles("foot")}>
        <p>
          Displaying {current + shortscripts.length} Out of {filteredscripts.length}
        </p>
        <div>
          <p>
            {current + 1}-{current + shortscripts.length}
          </p>
          <ArrowButtons Addcurrent={Addcurrent} Subcurrent={Subcurrent} />
        </div>
      </div>
    </div>
  );
}

function Tr({ img, script, srno }) {
  const { title, madeby, active, likes, views, date } = script;

  return (
    <tr>
      <td className={styles("dashboard-scripts")}>
        <div className={styles("im")}>
          <img src={img} alt="loading" />
        </div>
        <div>
          <p className={styles("im-1")}>{title}</p>
          <p className={styles("im-2")}>By {madeby}</p>
        </div>
      </td>
      <td className={styles("align-middle")}>{likes} Likes</td>
      <td className={styles("align-middle")}>{views} Views</td>
      <td className={styles("align-middle")}>
        {active ? (
          <div className={styles("active-script")} style={{ height: "40px", width: "60%" }}>
            Active
          </div>
        ) : (
          <div className={styles("inactive-script")} style={{ height: "40px", width: "60%" }}>
            Inactive
          </div>
        )}
      </td>

      <td className={styles("align-middle")}>
        <p style={{ minWidth: "96px" }}>{date}</p>
      </td>
      <td className={styles("align-middle")}>
        <Link href={`/admin/scripts/editscript?id=${srno}`}>
          <a className={styles("btn-3")}>
            <div className={styles("pen-icon")}>
              <img src="/Adminpanel/img/Pencil.svg" alt="" />
            </div>
          </a>
        </Link>
      </td>
      <td className={styles("align-middle")}>
        <a href=" " className={styles("btn-3")}>
          <div className={styles("eye-icon")}>
            <img src="/Adminpanel/img/Eye.svg" alt="" />
          </div>
        </a>
      </td>
    </tr>
  );
}
