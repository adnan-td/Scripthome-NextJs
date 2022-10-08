import { User } from "../main-site/contexts/user/user.context";
import { ScreenWidth } from "../main-site/contexts/screenwidth/screenwidth.context";
import { SearchField } from "../admin-panel/contexts/searchfield/search.context";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.scss";
import "../admin-panel/App.css";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <User>
        <ScreenWidth>
          <SearchField>
            <Component {...pageProps} />
          </SearchField>
        </ScreenWidth>
      </User>
    </SessionProvider>
  );
}

export default MyApp;
