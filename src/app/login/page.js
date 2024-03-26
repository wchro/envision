"use client";
import { Redirect } from "@/utils/actions/redirect";
import styles from "./page.module.css";
import { UserAuth } from "@/components/context/authContext";
import { useEffect, useState } from "react";
import Spinner from "@/components/spinner/spinner";

export default function Login() {
  const { user, login } = UserAuth();

  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email && !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);

    const loginStatus = await login(email, password);
    if (loginStatus.code === "ok") Redirect("/");
    else setError(loginStatus.code);

    setLoading(false);
  };

  //   Logged?
  useEffect(() => {
    if (user) Redirect("/");
  }, [user]);

  return (
    <main className={styles.main}>
      <div className={styles.loginContainer}>
        <h1>Welcome back</h1>
        {error && <div className={styles.loginError}>{error}</div>}
        <form className={styles.loginForm} onSubmit={onSubmit}>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">
            {!isLoading ? (
              "Login"
            ) : (
              <div className={styles.loading}>
                <Spinner />
              </div>
            )}
          </button>
        </form>
        <a href="/register" className={styles.registerBtn}>
          Sign Up
        </a>
        <hr />
        <div className={styles.alternativeMethods}>
          <p>or sign in with</p>
          <div className={styles.alternativeOptions}>
            <button>
              <object
                className={styles.socialIcons}
                type="image/svg+xml"
                data="/static/icons/github.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
