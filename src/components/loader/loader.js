import Spinner from "../spinner/spinner";
import styles from "./loader.module.css";
const Loader = () => {
  return (
    <main className={styles.loader}>
      <div className={styles.spinner}>
        <Spinner color="var(--main-color)" />
      </div>
    </main>
  );
};

export default Loader;
