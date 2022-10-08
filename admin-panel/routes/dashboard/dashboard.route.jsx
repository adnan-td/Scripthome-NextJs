import ArrowButtons from "../../components/arrowbuttons/arrowbuttons.component";
import { useEffect, useContext, useState } from "react";
import Link from "next/link";
import { SearchContext } from "../../contexts/searchfield/search.context";

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
    <div className="main2">
      <div className="main-header">
        <div>
          <h3>Dashboard</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item" aria-current="page" style={{ color: "#8c8888" }}>
                Welcome Skumminity Admin
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="table-container">
        <table className="table">
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
      <div className="foot">
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
      <td className="dashboard-scripts">
        <div className="im">
          <img src={img} alt="loading" />
        </div>
        <div>
          <p className="im-1">{title}</p>
          <p className="im-2">By {madeby}</p>
        </div>
      </td>
      <td className="align-middle">{likes} Likes</td>
      <td className="align-middle">{views} Views</td>
      <td className="align-middle">
        {active ? (
          <div className="active-script" style={{ height: "40px", width: "60%" }}>
            Active
          </div>
        ) : (
          <div className="inactive-script" style={{ height: "40px", width: "60%" }}>
            Inactive
          </div>
        )}
      </td>

      <td className="align-middle">
        <p style={{ minWidth: "96px" }}>{date}</p>
      </td>
      <td className="align-middle">
        <Link href={`/admin/scripts/editscript?id=${srno}`}>
          <a className="btn-3">
            <div className="pen-icon">
              <img src="/Adminpanel/img/Pencil.svg" alt="" />
            </div>
          </a>
        </Link>
      </td>
      <td className="align-middle">
        <a href=" " className="btn-3">
          <div className="eye-icon">
            <img src="/Adminpanel/img/Eye.svg" alt="" />
          </div>
        </a>
      </td>
    </tr>
  );
}
