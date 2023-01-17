import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "../main-site/components/animations/animatedpage";
import Navigation from "../main-site/components/navigation/navigation.component";
import Footer from "../main-site/components/footer/footer.component";
import FI from "../main-site/components/floatingicon/fi.component";
import ScriptsAll from "../main-site/routes/scripts/scriptsall.component";
import Script from "next/script";
import { otherqueries } from "../db/otherqueries.model";

import styles from "../styles/mainpage.module.scss";

export async function getServerSideProps(context) {
  const res = JSON.parse(JSON.stringify(await otherqueries.getAdsenseDefault()));
  return {
    props: { adsense: res.adsense },
  };
}

const ScriptsPage = ({ adsense }) => {
  return (
    <div className={styles["mainsite-bg"]}>
      <Head>
        <title>ScriptHome Scripts</title>
        {/* Primary Meta Tags  */}
        <meta name="title" content="ScriptHome Scripts" />
        <meta
          name="description"
          content="Automatically optimize your Roblox experience with scripts from ScriptHome. Roblox Scripts, which are frequently updated and uploaded, where almost everyone can contribute!. Get notified for new roblox scripts by joining our server."
        />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scripthome.org/scripts" />
        <meta property="og:title" content="ScriptHome Scripts" />
        <meta
          property="og:description"
          content="Automatically optimize your Roblox experience with scripts from ScriptHome. Roblox Scripts, which are frequently updated and uploaded, where almost everyone can contribute!. Get notified for new roblox scripts by joining our server."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/yash1014/image/upload/v1667905605/scripthomescripts.jpg"
        />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://scripthome.org/scripts" />
        <meta property="twitter:domain" content="https://scripthome.org/scripts" />
        <meta property="twitter:title" content="ScriptHome Scripts" />
        <meta
          property="twitter:description"
          content="Automatically optimize your Roblox experience with scripts from ScriptHome. Roblox Scripts, which are frequently updated and uploaded, where almost everyone can contribute!. Get notified for new roblox scripts by joining our server."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/yash1014/image/upload/v1667905605/scripthomescripts.jpg"
        />
      </Head>
      <AnimatePresence mode="wait">
        <Navigation key={1} />
        <FI />
        <AnimatedPage key={2}>
          <div className={styles["place-center-t"]}>
            <ScriptsAll />
            <Footer />
          </div>
        </AnimatedPage>
      </AnimatePresence>
      <Script src={adsense} />
    </div>
  );
};

export default ScriptsPage;
