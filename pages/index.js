import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "../main-site/components/animations/animatedpage";
import Navigation from "../main-site/components/navigation/navigation.component";
import Footer from "../main-site/components/footer/footer.component";
import Home from "../main-site/routes/home/home.route";
import FI from "../main-site/components/floatingicon/fi.component";
import Script from "next/script";
import { scriptqueries } from "../db/scripts.model";
import { otherqueries } from "../db/otherqueries.model";

import styles from "../styles/mainpage.module.scss";

export async function getServerSideProps(context) {
  const res = JSON.parse(JSON.stringify(await otherqueries.getStatistics()));
  const res21 = JSON.parse(JSON.stringify(await scriptqueries.get12ScriptRecent()));
  const res22 = JSON.parse(JSON.stringify(await scriptqueries.get6ScriptHighViews()));
  const res3 = JSON.parse(JSON.stringify(await otherqueries.getAdsenseDefault()));
  const statistics = res;
  return {
    props: { statistics, scripts: res21, script_hviews: res22, adsense: res3.adsense },
  };
}

export default function HomePage({ statistics, scripts, script_hviews, adsense }) {
  return (
    <div className={styles["mainsite-bg"]}>
      <Head>
        <title>ScriptHome</title>
        {/* Primary Meta Tags  */}
        <meta name="title" content="ScriptHome" />
        <meta
          name="description"
          content="Automatically optimize your Roblox experience with scripts from ScriptHome. Roblox Scripts, which are frequently updated and uploaded, where almost everyone can contribute!. Get notified for new roblox scripts by joining our server."
        />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scripthome.org/" />
        <meta property="og:title" content="ScriptHome" />
        <meta
          property="og:description"
          content="Automatically optimize your Roblox experience with scripts from ScriptHome. Roblox Scripts, which are frequently updated and uploaded, where almost everyone can contribute!. Get notified for new roblox scripts by joining our server."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/yash1014/image/upload/v1667901327/sitepreviewscripthome.jpg"
        />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://scripthome.org/" />
        <meta property="twitter:domain" content="https://scripthome.org/" />
        <meta property="twitter:title" content="ScriptHome" />
        <meta
          property="twitter:description"
          content="Automatically optimize your Roblox experience with scripts from ScriptHome. Roblox Scripts, which are frequently updated and uploaded, where almost everyone can contribute!. Get notified for new roblox scripts by joining our server."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/yash1014/image/upload/v1667901327/sitepreviewscripthome.jpg"
        />
      </Head>

      <AnimatePresence mode="wait">
        <Navigation key={1} />
        <FI />
        <AnimatedPage key={2}>
          <Home statistics={statistics} scripts={scripts} script_hviews={script_hviews} />
          <Footer />
        </AnimatedPage>
      </AnimatePresence>
      <Script src={adsense} />
    </div>
  );
}
