import { User } from "../main-site/contexts/user/user.context";
import { ScreenWidth } from "../main-site/contexts/screenwidth/screenwidth.context";
import { SearchField } from "../admin-panel/contexts/searchfield/search.context";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { ScriptsAll } from "../main-site/contexts/allscripts/scripts.context";
// import Router from "next/router";
import { detectAnyAdblocker } from "just-detect-adblock";
import { useEffect, useState } from "react";
import Modalmc from "../main-site/components/Error-Modal/AdBlocker-Modal/mc.component";

function MyApp({ Component, pageProps }) {
  const [refresh, setRefresh] = useState(false);
  const [showAdblocker, setShowAdblocker] = useState(false);
  useEffect(() => {
    detectAnyAdblocker().then((detected) => {
      if (detected) {
        setShowAdblocker(true);
      } else {
        setShowAdblocker(false);
      }
    });
  }, [refresh]);

  return (
    <SessionProvider session={pageProps.session}>
      <User>
        <ScreenWidth>
          <SearchField>
            {/* <ScriptsAll> */}
            {showAdblocker ? (
              <div style={{ backgroundColor: "#000", height: "100vh", width: "100%" }}>
                <Modalmc refresh={refresh} setRefresh={setRefresh} />
              </div>
            ) : (
              <Component {...pageProps} />
            )}
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
            {/* </ScriptsAll> */}
          </SearchField>
        </ScreenWidth>
      </User>
    </SessionProvider>
  );
}

export default MyApp;
