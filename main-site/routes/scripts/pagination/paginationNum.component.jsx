import styles from "../scripts.module.scss";

const PaginationCon = (props) => {
  const classpage = styles["paginationCon"] + " " + props.className;
  return (
    <div className={classpage}>
      <p>{props.content}</p>
    </div>
  );
};

export default PaginationCon;
