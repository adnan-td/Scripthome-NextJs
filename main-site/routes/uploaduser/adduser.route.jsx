import styles from "../scripts/scripts.module.scss";

import ScriptPreview from "../../components/script-preview/preview.component";
import Background from "../../components/background/background.component";
import Pagination from "../scripts/pagination/pagination.component";

const Adduser = () => {
  const UploaderName = 'Sudhanshu Prasad';
  return (
    <div className={styles["scriptall"]}>
      <Background />
      <div className={styles["scriptall__wrapper"]}>
        <div className={styles["userdiv"]}>
          <img className={styles["userdiv__img"]} src="/Script/Avatars/avatar.png" alt="loading" />
          <div className={styles["userdiv__content"]}>
            <p className={styles["userdiv__content__name"]}>{UploaderName}</p>
            <p className={styles["userdiv__content__post"]}>Script Uploader</p>
          </div>
        </div>
        <div className={styles["home-data"]}>
        <div className={styles["ht-data__mod"]}>
          <div className={styles["ht-data"]}>
            <div className={styles["ht-data-inside"]}>
              <p className={styles["ht-data-no"]}>223</p>
              <p className={styles["ht-data-name"]}>Total scripts posted</p>
            </div>
            <div className={styles["ht-data-inside"]}>
              <p className={styles["ht-data-no"]}>35</p>
              <p className={styles["ht-data-name"]}>Total scripts this month</p>
            </div>
            <div className={styles["ht-data-inside"]}>
              <p className={styles["ht-data-no"]}>52044</p>
              <p className={styles["ht-data-name"]}>Total scripts views</p>
            </div>
            <div className={styles["ht-data-inside"]}>
              <p className={styles["ht-data-no"]}>22948</p>
              <p className={styles["ht-data-name"]}>
                Total scripts views this month
              </p>
            </div>
          </div>
        </div>
      </div>
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

export default Adduser;
