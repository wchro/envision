import { useState } from "react";
import styles from "./tabs.module.css";

const ProfilesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={styles.tabs}>
      <h1 className={styles.tabsTitle}>Popular</h1>
      <div className={styles.tabsContainer}>
        <div className={styles.tabsMenu}>
          <button
            className={activeTab === 0 ? styles.active : ""}
            onClick={() => setActiveTab(0)}
          >
            creators
          </button>
          <button
            className={activeTab === 1 ? styles.active : ""}
            onClick={() => setActiveTab(1)}
          >
            brands
          </button>
        </div>
        <div className={styles.tabsContent}>
          <a href="#">
            <div className={styles.profileCard}>
              <h2>John Smith</h2>
              <div className={styles.profileImage}>
                <img src="/static/images/default.jpg" />
              </div>
            </div>
          </a>
          <a href="#">
            <div className={styles.profileCard}>
              <h2>John Smith</h2>
              <div className={styles.profileImage}>
                <img src="/static/images/default.jpg" />
              </div>
            </div>
          </a>
          <a href="#">
            <div className={styles.profileCard}>
              <h2>John Smith</h2>
              <div className={styles.profileImage}>
                <img src="/static/images/default.jpg" />
              </div>
            </div>
          </a>
          <a href="#">
            <div className={styles.profileCard}>
              <h2>John Smith</h2>
              <div className={styles.profileImage}>
                <img src="/static/images/default.jpg" />
              </div>
            </div>
          </a>
          <a href="#">
            <div className={styles.profileCard}>
              <h2>John Smith</h2>
              <div className={styles.profileImage}>
                <img src="/static/images/default.jpg" />
              </div>
            </div>
          </a>
          <a href="#">
            <div className={styles.profileCard}>
              <h2>John Smith</h2>
              <div className={styles.profileImage}>
                <img src="/static/images/default.jpg" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilesTabs;
