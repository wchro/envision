import styles from "./spiner.module.css";

const Spinner = ({ color = "#f8f8f8" }) => {
  return (
    <div
      className={styles.spinner}
      style={{ borderColor: `${color} transparent transparent` }}
    ></div>
  );
};

export default Spinner;
