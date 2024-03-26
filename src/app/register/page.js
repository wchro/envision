"use client";
import { UserAuth } from "@/components/context/authContext";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { Redirect } from "@/utils/actions/redirect";
export default function Register() {
  const { register } = UserAuth();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const password2 = formData.get("password2");

    if (password === password2) {
      const status_code = await register(email, password);
      if (status_code.code === "ok") Redirect("/");
      else alert(status_code.code);
    } else alert("Contrasenas incorrectas");
  };
  return (
    <main className={styles.main}>
      <div className={styles.leftSection}>
        <div className={styles.registerContainer}>
          <h1 className={styles.title}>Sign up</h1>
          <form className={styles.registerForm} onSubmit={onSubmit}>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input
              type="password"
              name="password2"
              placeholder="Verify password"
            />
            <button type="submit">Register</button>
          </form>
          <hr />
          <div className={styles.alternativeMethods}>
            <p>or sign up with</p>
            <div className={styles.alternativeOptions}>
              <button onClick={(e) => e.preventDefault()}>
                <object
                  className={styles.socialIcons}
                  type="image/svg+xml"
                  data="/static/icons/github.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.rightContainer}>
          <h2 className={styles.title}>Reasons to join</h2>
          <ul className={styles.reasons}>
            <li className={styles.reason}>
              <object
                className={styles.reasonIcon}
                type="image/svg+xml"
                data="/static/icons/lock.svg"
              ></object>
              <div>
                <h3>Exclusive Opportunities</h3>
                <p>
                  Discover tailored events and collaborations, available only to
                  registered members
                </p>
              </div>
            </li>
            <li className={styles.reason}>
              <object
                className={styles.reasonIcon}
                type="image/svg+xml"
                data="/static/icons/star.svg"
              ></object>
              <div>
                <h3>Connect with Top Brands</h3>
                <p>
                  Forge valuable connections with leading brands in your niche,
                  enhancing your visibility and credibility
                </p>
              </div>
            </li>
            <li className={styles.reason}>
              <object
                className={styles.reasonIcon}
                type="image/svg+xml"
                data="/static/icons/target.svg"
              ></object>
              <div>
                <h3>Maximize Your Influence</h3>
                <p>
                  Amplify your reach and influence by partnering with brands and
                  fellow influencers on our platform
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}