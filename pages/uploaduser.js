import Head from "next/head";
//
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "../main-site/components/animations/animatedpage";
import Navigation from "../main-site/components/navigation/navigation.component";
import Footer from "../main-site/components/footer/footer.component";
import FI from "../main-site/components/floatingicon/fi.component";

import styles from "../styles/mainpage.module.scss";
import Adduser from "../main-site/routes/uploaduser/adduser.route";

const AddUserPage = () => {
  return (
    <div className={styles["mainsite-bg"]}>
      <Head>
        <title>Scripthome | user</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence mode="wait">
        <Navigation key={1} />
        <FI />
        <AnimatedPage key={2}>
          <div className={styles["place-center-t"]}>
            <Adduser />
            <Footer />
          </div>
        </AnimatedPage>
      </AnimatePresence>
    </div>
  );
};

export default AddUserPage;
