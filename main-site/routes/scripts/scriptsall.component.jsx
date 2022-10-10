import styles from "./scripts.module.scss";

import ScriptPreview from "../../components/script-preview/preview.component";
import Background from "../../components/background/background.component";
import Pagination from "./pagination/pagination.component";

const ScriptsAll = () => {
  return (
    <div className={styles["scriptall"]}>
      <Background />
      <div className={styles["scriptall__wrapper"]}>
        <p className={styles["scriptall__wrapper__heading"]}>All Scripts</p>
        <div className={styles["recentu-bottom"]}>
          <ScriptPreview />
          <ScriptPreview />
          <ScriptPreview />
          <ScriptPreview />
          <ScriptPreview />
          <ScriptPreview />
          <ScriptPreview />
          <ScriptPreview />
          <ScriptPreview />
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default ScriptsAll;
