import Link from "next/link";
import { useRouter } from "next/router";

import stylesa from "../../app.module.scss";
import stylesb from "../../bootstrap.module.scss";

const styles = (classname) => {
  if (stylesa[classname]) return stylesa[classname];
  if (stylesb[classname]) return stylesb[classname];
  return null;
};

const Tabs = ({ isopen, screenwidth }) => {
  const router = useRouter();
  return (
    <>
      <div className={isopen ? styles("tabs") + " " + styles("show") : styles("tabs")}>
        <div
          className={isopen && screenwidth < 500 ? styles("side-bar") : styles("")}
          id="sb"
          style={{ width: "100%" }}
        >
          <Link href="/admin/dashboard">
            <a style={{ textDecoration: "none", cursor: "pointer" }}>
              <h3>Scripthome</h3>
            </a>
          </Link>
          <ul className={styles("nav") + " " + styles("flex-column")}>
            <li className={styles("nav-item")}>
              <Link href="/admin/dashboard">
                <a
                  className={
                    router.pathname.includes("/admin/dashboard")
                      ? styles("nav-link") + " " + styles("active")
                      : styles("nav-link")
                  }
                >
                  Dashboard
                </a>
              </Link>
              <Link href="/admin/scripts">
                <a
                  className={
                    router.pathname.includes("/admin/scripts")
                      ? styles("nav-link") + " " + styles("active")
                      : styles("nav-link")
                  }
                >
                  Scripts
                </a>
              </Link>
              <Link href="/admin/reports">
                <a
                  className={
                    router.pathname.includes("/admin/reports")
                      ? styles("nav-link") + " " + styles("active")
                      : styles("nav-link")
                  }
                >
                  Reports
                </a>
              </Link>
              <Link href="/admin/admins">
                <a
                  className={
                    router.pathname.includes("/admin/admins")
                      ? styles("nav-link") + " " + styles("active")
                      : styles("nav-link")
                  }
                >
                  Admins
                </a>
              </Link>
              <Link href="/admin/comments">
                <a
                  className={
                    router.pathname.includes("/admin/comments")
                      ? styles("nav-link") + " " + styles("active")
                      : styles("nav-link")
                  }
                >
                  Comments
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tabs;
