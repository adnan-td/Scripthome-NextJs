import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import ArrowButtons from "../../components/arrowbuttons/arrowbuttons.component";
import { SearchContext } from "../../contexts/searchfield/search.context";

import stylesa from "../../app.module.scss";
import stylesb from "../../bootstrap.module.scss";

const styles = (classname) => {
  if (stylesa[classname]) return stylesa[classname];
  if (stylesb[classname]) return stylesb[classname];
};

const scripts = [{}, {}, {}, {}, {}, {}];
export default function Scripts() {
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
      <div className={styles("main-header")} style={{ padding: "0 0.5rem" }}>
        <div>
          <h3>Scripts</h3>
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
                Scripts
              </li>
            </ol>
          </nav>
        </div>
        <div className={styles("edit-users")}>
          <Link href="/admin/scripts/addscript">
            <a>
              Add Scripts{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
              </svg>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles("group-cards")}>
        <div className={styles("container-of-cards")}>
          {shortscripts.map((item, key) => {
            return (
              <Card
                img={images[Math.floor(Math.random() * images.length)]}
                script={item}
                key={key}
                srno={current + key}
              />
            );
          })}
        </div>
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

function Card({ img, script, srno }) {
  const { title, likes, views, active } = script;
  const [isActive, SetisActive] = useState(null);
  // const {title, madeby, active, likes, views, date} = script
  useEffect(() => {
    SetisActive(active);
  }, [active]);

  return (
    <div className={styles("card")}>
      <img src={img} className={styles("card-img-top")} alt="..." />
      <div className={styles("card-body")}>
        <h5 className={styles("card-title")}>{title}</h5>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className={styles("card-text")}>
              <span style={{ color: "#fd683e" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
              </span>
              {likes} Likes
            </p>
            <p>Total Views: {views}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "0.5rem",
            }}
          >
            <Link href={`editscript?id=${srno}`}>
              <a className={styles("btn") + " " + styles("btn-primary") + " " + styles("btn-1")}>
                Edit Script
              </a>
            </Link>
            {isActive ? (
              <ButtonIA SetisActive={SetisActive} />
            ) : (
              <ButtonAI SetisActive={SetisActive} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonIA({ SetisActive }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button
        className={styles("unselected")}
        onClick={() => {
          SetisActive(false);
        }}
      >
        Inactive
      </button>
      <button className={styles("active-script")}>Active</button>
    </div>
  );
}

function ButtonAI({ SetisActive }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button className={styles("inactive-script")}>Inactive</button>
      <button
        className={styles("unselected")}
        onClick={() => {
          SetisActive(true);
        }}
      >
        Active
      </button>
    </div>
  );
}
