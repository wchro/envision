"use client";

import styles from "./page.module.css";
import { UserAuth } from "@/components/context/authContext";
import Loader from "@/components/loader/loader";
import ProfileSettings from "@/components/settings/ProfileSettings/ProfileSettings";
import { Redirect } from "@/utils/actions/redirect";
import { useEffect } from "react";

export default function CompleteRegisters() {
  const { user } = UserAuth();

  useEffect(() => {
    const userTimeout = setTimeout(() => {
      if (!user) Redirect("/");
    }, 10000);
    return () => clearTimeout(userTimeout);
  }, [user]);

  if (user) {
    return (
      <main className={styles.completeRegister}>
        <ProfileSettings user={user} />
      </main>
    );
  } else {
    return <Loader />;
  }
}
