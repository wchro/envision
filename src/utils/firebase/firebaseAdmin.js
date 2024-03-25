import admin from "firebase-admin";

import { firebaseAdminConfig } from "./firebaseConfig";

try {
  admin.initializeApp({
    credential: admin.credential.cert(firebaseAdminConfig),
  });
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error("Firebase admin initialization error", error.stack);
  }
}

export default admin;
