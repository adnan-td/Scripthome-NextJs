/* eslint-disable @next/next/no-img-element */
import { Fragment, useState, useContext, useEffect } from "react";

import Signinmodal from "../../components/signin-modal/modal.component";
import Signupmodal from "../../components/signup-modal/modal.component";
import Search from "../searchbar/search.component";
import EditUser from "../edit-profile/modal.component";

import { WidthContext } from "../../contexts/screenwidth/screenwidth.context";
import { UserContext } from "../../contexts/user/user.context";

import styles from "./navigation.module.scss";

import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const navResponse = 790;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const screenwidth = useContext(WidthContext);
  const { user } = useContext(UserContext);
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (screenwidth > navResponse) {
      setIsOpen(false);
    }
  }, [screenwidth]);

  const HandleLogout = async () => {
    signOut();
  };

  return (
    <Fragment>
      <div className={styles["navigation"]}>
        <Link href="/">
          <a className={styles["logo-container"]}>
            <img alt="loading" src="/Logo/Logo-final.svg" />
          </a>
        </Link>

        {screenwidth < navResponse && (
          <Search
            style={{
              position: "absolute",
              right: "10px",
              top: "24px",
              margin: "0 1rem 0 0",
              display: "initial",
            }}
          />
        )}
        <div className={styles["nav-links-container-background"]}>
          <div
            className={styles["nav-links-container"]}
            style={!isOpen && screenwidth < navResponse ? { display: "none" } : { display: "flex" }}
            open={isOpen}
          >
            <Link href="/">
              <a
                className={
                  router.pathname === "/"
                    ? styles["active"] + " " + styles["nav-link"]
                    : styles["nav-link"]
                }
              >
                <img src="/Nav-Icon/home-nav.svg" alt="home-icon" />
                <span>Home</span>
              </a>
            </Link>
            <Link href="/scripts">
              <a
                className={
                  router.pathname === "/scripts"
                    ? styles["active"] + " " + styles["nav-link"]
                    : styles["nav-link"]
                }
              >
                <img src="/Nav-Icon/script-nav.svg" alt="script-icon" />
                <span>Scripts</span>
              </a>
            </Link>
            <a
              className={styles["nav-link"] + " " + styles["nav-link2"]}
              href="https://discord.gg/9N6FWkshpk"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/Nav-Icon/discord-nav.svg" alt="discord-icon" />
              <span>Discord</span>
            </a>
            <a
              className={styles["nav-link"] + " " + styles["nav-link2"]}
              href="https://www.youtube.com/channel/UC2_Ab-9puBiqcQGcwoz6Rag"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/Script/Icons/youtube.svg" alt="youtube-icon" />
              <span>Youtube</span>
            </a>
            {screenwidth > 1400 && (
              <Link href="/admin">
                <a className={styles["nav-link"]}>
                  <img src="/Nav-Icon/script-nav.svg" alt="script-icon" />
                  <span>Admin</span>
                </a>
              </Link>
            )}
            <div className={styles["nav-button-container"]}>
              <Search />
              <div className={styles["nav-button-separator"]}>
                <img src="/Nav-Icon/nav-seperator.svg" alt="" />
              </div>
              {status !== "unauthenticated" ? (
                <NavUserIcon user={user} logout={HandleLogout} />
              ) : (
                <>
                  <Signinmodal className={styles["nav-b1"]}>Log In</Signinmodal>{" "}
                  <Signupmodal className={styles["nav-b2"]}>Join Community</Signupmodal>
                </>
              )}
            </div>
          </div>
        </div>
        <button
          className={styles["nav-toggle"]}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img src="/Nav-Icon/menu.svg" alt="hamburger-menu" />
        </button>
      </div>
    </Fragment>
  );
};

export default Navigation;

function NavUserIcon({ user, logout }) {
  const [isOpen, SetisOpen] = useState(false);
  return (
    <div className={styles["nui"]}>
      <div
        className={styles["nui-icon"]}
        onClick={() => {
          SetisOpen(!isOpen);
        }}
      >
        <img alt="" src="/Script/Avatars/avatar.png" />
      </div>

      {isOpen && (
        <div className={styles["nui-dropdown"]}>
          <div className={styles["nui-header"]}>
            <div className={styles["nui-header-inner"]}>
              <img alt="" src="/Script/Avatars/avatar.png" />
              <div className={styles["nui-details"]}>
                <p className={styles["nui-p1"]}>{user.name}</p>
                <p className={styles["nui-p2"]}>{user.email}</p>
              </div>
            </div>
          </div>
          <EditUser className={styles["nui-dropdown-row"]}>
            <img alt="" src="/Nav-Icon/user-icon.svg" />
            <p>Edit profile</p>
          </EditUser>
          <button className={styles["nui-dropdown-row"]} onClick={logout}>
            <img alt="" src="/Nav-Icon/logout-icon.svg" />
            <p>Log out</p>
          </button>
        </div>
      )}
    </div>
  );
}
