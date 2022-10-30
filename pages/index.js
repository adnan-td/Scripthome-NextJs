import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "../main-site/components/animations/animatedpage";
import Navigation from "../main-site/components/navigation/navigation.component";
import Footer from "../main-site/components/footer/footer.component";
import Home from "../main-site/routes/home/home.route";
import FI from "../main-site/components/floatingicon/fi.component";
import axios from "axios";
import { hostname } from "../config/hostname";

import styles from "../styles/mainpage.module.scss";

export async function getServerSideProps(context) {
  const res = await axios.get(`${hostname}/api/statistics`);
  const res2 = await axios.get(`${hostname}/api/scripts`);
  const statistics = res.data;
  return {
    props: { statistics, scripts: res2.data },
  };
}

export default function HomePage({ statistics, scripts }) {
  return (
    <div className={styles["mainsite-bg"]}>
      <Head>
        <title>Scripthome</title>
      </Head>

      <AnimatePresence mode="wait">
        <Navigation key={1} />
        <FI />
        <AnimatedPage key={2}>
          <Home statistics={statistics} scripts={scripts} />
          <Footer />
        </AnimatedPage>
      </AnimatePresence>
    </div>
  );
}
