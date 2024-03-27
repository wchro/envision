import { UserAuth } from "../context/authContext";
import styles from "./header.module.css";

const Header = () => {
  const { user, logOut } = UserAuth();
  return (
    <header className={styles.header}>
      <a className={styles.logo} title="envision" href="/">
        envision
      </a>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="/">Home</a>
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
        {!user ? (
          <>
            <a className={styles.loginBtn} href="/login">
              Log In
            </a>
            <a className={styles.registerBtn} href="/register">
              Sign Up
            </a>
          </>
        ) : (
          <>
            <a onClick={logOut} className={styles.loginBtn} href="#">
              Log Out
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
