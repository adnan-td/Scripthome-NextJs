import Link from "next/link";
import { useRouter } from "next/router";

const Tabs = ({ isopen, screenwidth }) => {
  const router = useRouter();
  return (
    <>
      <div className="collapse tabs show" id="navbarToggleExternalContent">
        <div className={isopen && screenwidth < 500 ? "side-bar" : ""} id="sb">
          <Link href="/admin/dashboard">
            <a style={{ textDecoration: "none", cursor: "pointer" }}>
              <h3>Skumminity</h3>
            </a>
          </Link>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link href="/admin/dashboard">
                <a
                  className={
                    router.pathname.includes("/admin/dashboard") ? "nav-link active" : "nav-link"
                  }
                >
                  Dashboard
                </a>
              </Link>
              <Link href="/admin/scripts">
                <a
                  className={
                    router.pathname.includes("/admin/scripts") ? "nav-link active" : "nav-link"
                  }
                >
                  Scripts
                </a>
              </Link>
              <Link href="/admin/reports">
                <a
                  className={
                    router.pathname.includes("/admin/reports") ? "nav-link active" : "nav-link"
                  }
                >
                  Reports
                </a>
              </Link>
              <Link href="/admin/admins">
                <a
                  className={
                    router.pathname.includes("/admin/admins") ? "nav-link active" : "nav-link"
                  }
                >
                  Admins
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
