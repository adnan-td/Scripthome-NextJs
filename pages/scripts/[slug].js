import Head from "next/head";
//
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "../../main-site/components/animations/animatedpage";
import Navigation from "../../main-site/components/navigation/navigation.component";
import Footer from "../../main-site/components/footer/footer.component";
import Scripts from "../../main-site/routes/scripts/scripts.component";
import FI from "../../main-site/components/floatingicon/fi.component";
import { hostname } from "../../config/hostname";
import axios from "axios";

import styles from "../../styles/mainpage.module.scss";
import { useEffect } from "react";

export async function getServerSideProps(context) {
  const slug = context.params.slug;
  const res = await axios(`${hostname}/api/getscriptbyslug/${slug}`, {
    method: "post",
    data: {
      method: "getscript",
    },
  });
  if (res.data.not_exists) {
    return {
      props: { exists: res.data.not_exists },
    };
  }
  const res2 = await axios({
    method: "post",
    url: `${hostname}/api/comments`,
    data: {
      method: "getcomments",
      id_script: res.data.id,
    },
  });

  return {
    props: { script: res.data, comments: res2.data, exists: false },
  };
}

const ScriptsPage = ({ script, allscripts, id, comments, exists }) => {
  useEffect(() => {
    if (exists) {
      alert("Page Not Found!");
    }
  }, [exists]);

  return (
    <div className={styles["mainsite-bg"]}>
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
        <meta property="og:image" content={script?.img} />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://scripthome.org/" />
        <meta property="twitter:domain" content="https://scripthome.org/" />
        <meta property="twitter:title" content={script?.title} />
        <meta property="twitter:description" content={script?.description} />
        <meta property="twitter:image" content={script?.img} />
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
