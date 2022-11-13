import styles from "./home.module.scss";
import Background from "../../components/backgroundmod/backgroundmod.component";
import Image from "next/image";

export default function HomeFeatureSec() {
  return (
    <div className={styles["home-features"]}>
      <Background />
      <div className={styles["background-header"]}>Features</div>
      <div className={styles["hf-left"]}>
        <div className={styles["hf-top-content"]}>
          <h2 className={styles["hf-header"]}>Why to choose us?</h2>
          <p className={styles["hf-hp"]}>
            Scripthome{`'`}s mission is to provide scripts and help the players
            in making their roblox game journey pleasing to play through.
          </p>
        </div>
        <div className={styles["hf-features-wrapper"]}>
          <div className={styles["hf-features"]}>
            <div className={styles["hficon"]}>
              <Image
                width="48px"
                height="48px"
                alt="loading"
                src="/Homepage/icons/Featured icon.png"
              />
            </div>
            <div className={styles["hf-text"]}>
              <h3 className={styles["hf-subheader"]}>Premium Roblox Scripts</h3>
              <p className={styles["hf-subp"]}>
                Scripthome provides a huge collection of scripts for Roblox
                players. You can find everything from premium to free scripts on
                Scripthome.
              </p>
            </div>
          </div>
          <div className={styles["hf-features"]}>
            <div className={styles["hficon"]}>
              <Image
                width="48px"
                height="48px"
                alt="loading"
                src="/Homepage/icons/Featured icon-2.png"
              />
            </div>
            <div className={styles["hf-text"]}>
              <h3 className={styles["hf-subheader"]}>Daily New Uploads</h3>
              <p className={styles["hf-subp"]}>
                Our team are uploading new scripts everyday to keep you up to
                date for using it in your favourite games.
              </p>
            </div>
          </div>
          <div className={styles["hf-features"]}>
            <div className={styles["hficon"]}>
              <Image
                width="48px"
                height="48px"
                alt="loading"
                src="/Homepage/icons/Featured icon-3.png"
              />
            </div>
            <div className={styles["hf-text"]}>
              <h3 className={styles["hf-subheader"]}>Our Community</h3>
              <p className={styles["hf-subp"]}>
                Join the Scripthome community to get access to exclusive perks
                like getting notified whenever a new scripts uploads.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["hf-right"]}>
        <div className={styles["hf-right__img"]}>
          <Image
            layout="fill"
            alt="loading"
            src="/Homepage/featured-section/iphone-mockup.webp"
          />
        </div>
      </div>
    </div>
  );
}
