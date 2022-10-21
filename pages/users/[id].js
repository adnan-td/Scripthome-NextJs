import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "../../main-site/components/animations/animatedpage";
import Navigation from "../../main-site/components/navigation/navigation.component";
import Footer from "../../main-site/components/footer/footer.component";
import FI from "../../main-site/components/floatingicon/fi.component";
import { hostname } from "../../config/hostname";

import styles from "../../styles/mainpage.module.scss";
import Adduser from "../../main-site/routes/uploaduser/adduser.route";

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await fetch(`${hostname}/api/users/${id}`);
  const userdata = await res.json();
  const res2 = await fetch(`${hostname}/api/scripts/user/${id}`);
  const userscripts = await res2.json();
  return {
    props: { userscripts, userdata, id },
  };
}

const AddUserPage = ({ userscripts, userdata, id }) => {
  return (
    <div className={styles["mainsite-bg"]}>
      <Head>
        <title>Scripthome</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence mode="wait">
        <Navigation key={1} />
        <FI />
        <AnimatedPage key={2}>
          <div className={styles["place-center-t"]}>
            <Adduser userscripts={userscripts} userdata={userdata} />
            <Footer />
          </div>
        </AnimatedPage>
      </AnimatePresence>
    </div>
  );
};

export default AddUserPage;
