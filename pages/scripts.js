import Head from "next/head";
//
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "../main-site/components/animations/animatedpage";
import Navigation from "../main-site/components/navigation/navigation.component";
import Footer from "../main-site/components/footer/footer.component";
import FI from "../main-site/components/floatingicon/fi.component";
import ScriptsAll from "../main-site/routes/scripts/scriptsall.component";
// import axios from "axios";
// import { hostname } from "../config/hostname";

import styles from "../styles/mainpage.module.scss";
import { useContext } from "react";
import { AllScriptContext } from "../main-site/contexts/allscripts/scripts.context";

// export async function getServerSideProps(context) {
//   const res = await axios.get(`${hostname}/api/scripts`);
//   return {
//     props: { scripts: res.data },
//   };
// }

const ScriptsPage = () => {
  const { scripts } = useContext(AllScriptContext);
  return (
    <div className={styles["mainsite-bg"]}>
      <Head>
        <title>ScriptHome</title>
      </Head>
      <AnimatePresence mode="wait">
        <Navigation key={1} />
        <FI />
        <AnimatedPage key={2}>
          <div className={styles["place-center-t"]}>
            <ScriptsAll scripts={scripts} />
            <Footer />
          </div>
        </AnimatedPage>
      </AnimatePresence>
    </div>
  );
};

export default ScriptsPage;
