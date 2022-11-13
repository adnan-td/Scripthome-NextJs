import ArrowButtons from "../../components/arrowbuttons/arrowbuttons.component";
import { useEffect, useContext, useState } from "react";
import Link from "next/link";
import { SearchContext } from "../../contexts/searchfield/search.context";

import stylesa from "../../app.module.scss";
import stylesb from "../../bootstrap.module.scss";
import axios from "axios";
import { toast } from "react-toastify";

const styles = (classname) => {
  if (stylesa[classname]) return stylesa[classname];
  if (stylesb[classname]) return stylesb[classname];
};

export default function Comments({ comments }) {
  const { searchfield } = useContext(SearchContext);
  const [current, Setcurrent] = useState(0);
  const [shortcomments, Setshortcomments] = useState([]);
  const [filteredcomments, Setfilteredcomments] = useState([]);

  const Addcurrent = () => {
    if (current + 6 > filteredcomments.length) {
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
      Setfilteredcomments(
        comments.filter((comment) => {
          return (
            comment.title.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) ||
            comment.madeby.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
          );
        })
      );
      Setcurrent(0);
    } else {
      Setfilteredcomments(comments);
    }
  }, [searchfield, comments]);

  useEffect(() => {
    Setshortcomments(filteredcomments.slice(current, current + 6));
  }, [current, filteredcomments]);

  return (
    <div className={styles("main2")}>
      <div className={styles("main-header")}>
        <div>
          <h3>Comments</h3>
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
              <li className={styles("breadcrumb-item")}>
                <Link href="/admin/comments">
                  <a
                    style={{
                      listStyle: "none",
                      color: "#8c8888",
                      textDecoration: "none",
                    }}
                  >
                    Comments
                  </a>
                </Link>
              </li>
              <li
                className={styles("breadcrumb-item")}
                aria-current="page"
                style={{ color: "#8c8888" }}
              >
                View comments
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className={styles("table-container")}>
        <table className={styles("table")}>
          <tbody>
            <tr>
              <td>Users</td>
              <td>Comments</td>
              <td>Delete</td>
            </tr>
            {shortcomments.map((item, key) => {
              return <Tr comment={item} key={key} srno={current + key} />;
            })}
          </tbody>
        </table>
      </div>
      <div className={styles("foot")}>
        <p>
          Displaying {current + shortcomments.length} Out of {filteredcomments.length}
        </p>
        <div>
          <p>
            {current + 1}-{current + shortcomments.length}
          </p>
          <ArrowButtons Addcurrent={Addcurrent} Subcurrent={Subcurrent} />
        </div>
      </div>
    </div>
  );
}

import Router from "next/router";
import { UserContext } from "../../../main-site/contexts/user/user.context";

function Tr({ comment }) {
  const { user } = useContext(UserContext);
  const { name, body, user_img } = comment;

  async function handleDelete() {
    await axios({
      url: `/api/comments`,
      method: "post",
      data: {
        method: "delete",
        comment: comment,
      },
    });
    toast.success("Deleted Successfully!");
    Router.replace(Router.asPath);
  }

  return (
    <tr>
      <td className={styles("dashboard-scripts")}>
        <div className={styles("im")}>
          <img src={user_img} alt="loading" />
        </div>
        <div>
          <p className={styles("im-1")}>{name}</p>
          <p className={styles("im-2")}>Commented</p>
        </div>
      </td>

      <td className={styles("align-middle")}>
        <p style={{ minWidth: "96px" }}>{body}</p>
      </td>
      <td className={styles("align-middle")}>
        {user?.role >= 2 ? (
          <button className={styles("btn-3")} onClick={handleDelete}>
            <div className={styles("pen-icon__mod") + " " + styles("pen-icon")}>
              <img src="/Adminpanel/img/trash-03.svg" alt="" />
            </div>
          </button>
        ) : null}
      </td>
    </tr>
  );
}
