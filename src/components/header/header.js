import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logo} title="envision" href="/">
        envision
      </a>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Creators</a>
          </li>
          <li>
            <a href="#">Brands</a>
          </li>
        </ul>
      </nav>
      <div className={styles.rightSection}>
        <a className={styles.loginBtn} href="#">
          Log In
        </a>
        <a className={styles.registerBtn} href="/register">
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Header;
