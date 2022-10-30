import styles from "./preview.module.scss";
import Link from "next/link";
import { hostname } from "../../../config/hostname";
import axios from "axios";

const ScriptPreview = ({ script }) => {
  var slugify = require("slugify");
  async function handleView() {
    await axios(`${hostname}/api/views`, {
      method: "post",
      data: {
        method: "add",
        id: script.id,
      },
    });
  }
  return (
    <div className={styles["viewscript"]} onClick={handleView}>
      <img src={script.img} alt="loading" className={styles["sideimage"]} />
      <div className={styles["overlaytext1"]}>
        <div className={styles["cover-div"]}>
          <div className={styles["overlaycontent"]}>
            {/* max length of charachters - 38 */}
            <h3 className={styles["overlaycontent__heading"]}>{script.title}</h3>
            {/* max length of charachters - 105 */}
            <p className={styles["overlaycontent__para"]}>{script.description}</p>
          </div>
          <div className={styles["side-script-button"]}>
            <div>
              <img src="/Script/Icons/eye.svg" className={styles["view-icon"]} alt="eye-icon" />
              <span>{script.views}</span>
            </div>
            <Link href={`/scripts/${slugify(script.title, { lower: true })}`}>
              <button className={styles["get-script"]}>View Script</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptPreview;
