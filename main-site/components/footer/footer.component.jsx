import styles from "./footer.module.scss";
import Signinmodal from "../../components/signin-modal/modal.component";
import Signupmodal from "../../components/signup-modal/modal.component";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__top"]}>
        <div className={styles["footer__top__left"]}>
          <img className={styles["footer__top__left__img"]} src="/Logo/Logo-text.svg" alt="Logo" />
          <p className={styles["footer__top__left__para"]}>
            The following scripts uploaded on our site are for educational use only.
          </p>
        </div>
        <div className={styles["footer__top__right"]}>
          <div className={styles["footer__top__right__col"]}>
            <p className={styles["footer__top__right__col__head"]}>site</p>
            <div className={styles["footer__top__right__col__link"]}>
              <Link href="/">
                <a className={styles["footer__top__right__col__link__item"]}>Home</a>
              </Link>
              <Link href="/scripts">
                <a className={styles["footer__top__right__col__link__item"]}>Scripts</a>
              </Link>
            </div>
          </div>
          <div className={styles["footer__top__right__col"]}>
            <p className={styles["footer__top__right__col__head"]}>Account</p>
            <div className={styles["footer__top__right__col__link"]}>
              <Signinmodal className={styles["footer__top__right__col__link__item"]}>
                Log in
              </Signinmodal>
              <Signupmodal className={styles["footer__top__right__col__link__item"]}>
                Sign Up
              </Signupmodal>
            </div>
          </div>
          <div className={styles["footer__top__right__col"]}>
            <p className={styles["footer__top__right__col__head"]}>Social</p>
            <div className={styles["footer__top__right__col__link"]}>
              <a
                href="https://discord.gg/aVxZkmjhtb"
                target="_blank"
                rel="noreferrer"
                className={styles["footer__top__right__col__link__item"]}
              >
                Discord
              </a>
              <a
                href="https://www.youtube.com/channel/UC2_Ab-9puBiqcQGcwoz6Rag"
                target="_blank"
                rel="noreferrer"
                className={styles["footer__top__right__col__link__item"]}
              >
                Youtube
              </a>
            </div>
          </div>
          <div className={styles["footer__top__right__col"]}>
            <p className={styles["footer__top__right__col__head"]}>Legal</p>
            <div className={styles["footer__top__right__col__link"]}>
              <Link href="/terms">
                <a className={styles["footer__top__right__col__link__item"]}>Terms</a>
              </Link>
              <Link href="/privacy">
                <a className={styles["footer__top__right__col__link__item"]}>Privacy</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["footer__bottom"]}>
        <div className={styles["footer__bottom__wrapper"]}>
          <p className={styles["footer__bottom__wrapper__text"]}>
            &copy; Scripthome. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
