import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <img alt="loading" src="/Logo/Logo-final.svg" />
      <p>&copy; Scripthome. All rights reserved.</p>
    </div>
  );
};

export default Footer;
