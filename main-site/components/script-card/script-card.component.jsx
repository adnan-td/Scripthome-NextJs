import styles from "./script-card.module.scss";
import Link from "next/link";
import axios from "axios";
import { imghost } from "../../../config/img_hostname";
import Image from "next/image";

export default function ScriptCard({ script }) {
  var slugify = require("slugify");
  async function handleView() {
    await axios(`/api/views`, {
      method: "post",
      data: {
        method: "add",
        id: script.id,
      },
    });
  }

  return (
    <Link href={`/scripts/${slugify(script.title, { lower: true })}`}>
      <div className={styles["scriptcard"]} onClick={handleView}>
        <div className={styles["sc-img-c"]}>
          <Image
            layout="fill"
            objectFit="cover"
            alt="loading"
            src={`${imghost}/${script?.img}`}
            className={styles["sc-img-c__img"]}
          />
        </div>
        <div className={styles["sc-content"]}>
          <div className={styles["sc-text"]}>
            <h3>{script.title}</h3>
            <p>{script.description}</p>
          </div>
          <div className={styles["sc-icons"]}>
            <p>
              <img alt="loading" src="/Script/Icons/eye.svg" /> {script.views}
            </p>
            <p className={styles["mod-sc-icons"]}>
              <img alt="loading" src="/Homepage/icons/heart-icon.svg" /> {script.likes}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
