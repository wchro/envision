"use client";

import Banner from "@/components/banners/banner";
import styles from "./page.module.css";
import { UserAuth } from "@/components/context/authContext";

export default function Home() {
  const { user } = UserAuth();
  return (
    <main>
      <div className={styles.topBanner}>
        <Banner
          shortText={"Empower Your Influence"}
          text={
            "Partner with influencers and brands for unmatched opportunities"
          }
          image={"/static/images/top-banner-image.jpg"}
        />
      </div>
    </main>
  );
}
