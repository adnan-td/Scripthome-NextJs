import styles from "../scripts.module.scss";
import PaginationCon from "./paginationNum.component";

const Pagination = () => {
  return (
    <div className={styles["pagination"]}>
      <PaginationCon content="Previous" />
      <PaginationCon className={styles["paginationCon__active"]} content="1" />
      <PaginationCon content="2" />
      <PaginationCon content="3" />
      <PaginationCon content="4" />
      <PaginationCon content="5" />
      <PaginationCon content="6" />
      <PaginationCon content="Next" />
    </div>
  );
};

export default Pagination;
