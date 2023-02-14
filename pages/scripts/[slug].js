import Head from "next/head";
//
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "../../main-site/components/animations/animatedpage";
import Navigation from "../../main-site/components/navigation/navigation.component";
import Footer from "../../main-site/components/footer/footer.component";
import Scripts from "../../main-site/routes/scripts/scripts.component";
import FI from "../../main-site/components/floatingicon/fi.component";
import { imghost } from "../../config/img_hostname";
import axios from "axios";
import Script from "next/script";
import { scriptqueries } from "../../db/scripts.model";
import { otherqueries } from "../../db/otherqueries.model";

import styles from "../../styles/mainpage.module.scss";
import { useEffect } from "react";

export async function getServerSideProps(context) {
  const slug = context.params.slug;
  const res = await GetScriptBySlug(slug);
  if (res.not_exists) {
    return {
      props: { exists: res.not_exists },
    };
  }
  const res2 = await GetCommentsByScript(res.id);

  return {
    props: { script: res, comments: res2, exists: false },
  };
}

async function GetScriptBySlug(slug) {
  var slugify = require("slugify");
  let scripts = JSON.parse(JSON.stringify(await scriptqueries.getAllScripts(slug)));
  const script = scripts.find((script) => {
    return (
      slug ===
      slugify(script.title, {
        lower: true,
      })
    );
  });

  if (script) {
    const adsense = JSON.parse(
      JSON.stringify(await scriptqueries.getScriptAdsense(script.user_id))
    );
    const def_ads = JSON.parse(JSON.stringify(await otherqueries.getAdsenseDefault()));
    return { ...script, adsense: adsense, def_ads: def_ads.adsense };
  } else {
    return { not_exists: true };
  }
}

async function GetCommentsByScript(id) {
  return JSON.parse(JSON.stringify(await otherqueries.getComments(id)));
}

const ScriptsPage = ({ script, allscripts, id, comments, exists }) => {
  useEffect(() => {
    if (exists) {
      alert("Page Not Found!");
    }
  }, [exists]);

  return (
    <div className={styles["mainsite-bg"]}>
      <Script src={script?.adsense ? script?.adsense : script?.def_ads} />
      <Head>
        <title>{script?.title}</title>
        {/* Primary Meta Tags  */}
        <meta name="title" content={script?.title} />
        <meta name="description" content={script?.description} />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scripthome.org/" />
        <meta property="og:title" content={script?.title} />
        <meta property="og:description" content={script?.description} />
        <meta property="og:image" content={`${imghost}/${script.img}`} />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://scripthome.org/" />
        <meta property="twitter:domain" content="https://scripthome.org/" />
        <meta property="twitter:title" content={script?.title} />
        <meta property="twitter:description" content={script?.description} />
        <meta property="twitter:image" content={`${imghost}/${script?.img}`} />
      </Head>

      {!exists ? (
        <AnimatePresence mode="wait">
          <Navigation key={1} />
          <FI />
          <AnimatedPage key={2}>
            <Scripts script={script} allscripts={allscripts} comments={comments} />
            <Footer />
          </AnimatedPage>
        </AnimatePresence>
      ) : null}
    </div>
  );
};

export default ScriptsPage;
