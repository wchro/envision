import { getFirestore, setDoc, getDoc, doc } from "firebase/firestore";

import { fireApp } from "./core/firebase";

const db = getFirestore(fireApp);

export async function insertData(collection, fireDoc, data) {
  if (fireDoc)
    await setDoc(doc(db, collection, fireDoc), data, { merge: true });
  else await setDoc(doc(db, collection), data, { merge: true });
}

export async function queryData(collection, fireDoc) {
  if (fireDoc) {
    const data = await getDoc(doc(db, collection, fireDoc));
    if (!data.exists) return false;
    return data.data();
  }
}
