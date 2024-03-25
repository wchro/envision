import admin from "./firebaseAdmin";

const firestore = admin.firestore();

export const getData = (collection) => firestore.collection(collection).get();

export const testfire = async () =>
  await firestore.collection("test").doc().set({ test: "dos" });
