import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "../../main-site/components/animations/animatedpage";
import Navigation from "../../main-site/components/navigation/navigation.component";
import Footer from "../../main-site/components/footer/footer.component";
import FI from "../../main-site/components/floatingicon/fi.component";
import Adduser from "../../main-site/routes/uploaduser/adduser.route";
import { useContext, useEffect, useState } from "react";
import { AllScriptContext } from "../../main-site/contexts/allscripts/scripts.context";
import Script from "next/script";
import { otherqueries } from "../../db/otherqueries.model";
import { userqueries } from "../../db/users.model";

import styles from "../../styles/mainpage.module.scss";

export async function getServerSideProps(context) {
  const slug = context.params.slug;
  const res2 = JSON.parse(JSON.stringify(await otherqueries.getAdsenseDefault()));
  const res = await GetUserByName(slug);
  if (res.exists) {
    const userdata = res.user;
    const exists = true;
    return {
      props: { userdata, exists, adsense: res2.adsense },
    };
  } else {
    const exists = false;
    return {
      props: { exists, adsense: res2.adsense },
    };
  }
}

async function GetUserByName(name) {
  let user = JSON.parse(JSON.stringify(await userqueries.getUserbyName(name)));
  if (user) {
    return { exists: true, user: user };
  } else {
    return { exists: false };
  }
}

const AddUserPage = ({ userdata, exists, adsense }) => {
  const [userscripts, setUS] = useState([]);
  const { scripts } = useContext(AllScriptContext);
  useEffect(() => {
    if (!exists) {
      alert("User does not exist!");
    } else {
      setUS(
        scripts.filter((script) => {
          return script.user_id === userdata.id;
        })
      );
    }
  }, [exists, scripts, userdata]);

  return (
    <div className={styles["mainsite-bg"]}>
      <Script src={adsense} />
      <Head>
        <title>Scripthome | {userdata.name}</title>
        {/* Primary Meta Tags  */}
        <meta name="title" content={userdata.name} />
        <meta
          name="description"
          content="This is the page where you can have access to all of the scripts uploaded by our users and admins."
        />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scripthome.org/users" />
        <meta property="og:title" content={userdata.name} />
        <meta
          property="og:description"
          content="This is the page where you can have access to all of the scripts uploaded by our users and admins."
        />
        <meta property="og:image" content={userdata.img} />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://scripthome.org/users" />
        <meta property="twitter:domain" content="https://scripthome.org/users" />
        <meta property="twitter:title" content={userdata.name} />
        <meta
          property="twitter:description"
          content="This is the page where you can have access to all of the scripts uploaded by our users and admins."
        />
        <meta property="twitter:image" content={userdata.img} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {exists ? (
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
      ) : null}
    </div>
  );
};

export default AddUserPage;
