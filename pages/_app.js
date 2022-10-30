import { User } from "../main-site/contexts/user/user.context";
import { ScreenWidth } from "../main-site/contexts/screenwidth/screenwidth.context";
import { SearchField } from "../admin-panel/contexts/searchfield/search.context";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScriptsAll } from "../main-site/contexts/allscripts/scripts.context";
// import { useEffect, useRef } from "react";
import Router from "next/router";
import { detectAnyAdblocker } from "just-detect-adblock";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // const fakeAdRef = useRef(null);
  // useEffect(() => {
  //   if (!fakeAdRef.current.offsetHeight) {
  //     Router.push("/adblocker");
  //   }
  // }, [fakeAdRef]);

  useEffect(() => {
    detectAnyAdblocker().then((detected) => {
      if (detected) {
        Router.push("/adblocker");
      }
    });
  }, []);

  return (
    <SessionProvider session={pageProps.session}>
      <User>
        <ScreenWidth>
          <SearchField>
            <ScriptsAll>
              <Component {...pageProps} />
              <ToastContainer
                position="bottom-right"
                autoClose={6000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
              />
              {/* <div
                ref={fakeAdRef}
                className="textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox"
                style={{ height: "2px" }}
              ></div> */}
            </ScriptsAll>
          </SearchField>
        </ScreenWidth>
      </User>
    </SessionProvider>
  );
}

export default MyApp;
