import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { firebaseConfig } from "./firebaseConfig";

export const fireApp = initializeApp(firebaseConfig);

export const auth = getAuth(fireApp);

export const storage = getStorage(fireApp, "gs://envision-3adb3.appspot.com");
