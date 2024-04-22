import { User } from "@/utils/classes/users";
import admin from "@/utils/firebase/core/firebaseAdmin";

const getUsers = async (type) => {
  const firestore = admin.firestore();
  const fireauth = admin.auth();

  const usersData = await firestore
    .collection("users")
    .where("type", "==", type)
    .orderBy("collaborations", "desc")
    .limit(6)
    .get();

  return await Promise.all(
    usersData.docs.map(async (doc) => {
      const userData = doc.data();

      return new User(
        doc.id,
        userData.displayName,
        userData.photoURL,
        userData.verified,
        userData.type,
        userData.collaborations
      );
    })
  );
};

export async function GET() {
  const creators = await getUsers("creator");
  const brands = await getUsers("brand");

  //   const profiles = users.map((user) => user.uid));
  return Response.json({ creators: creators, brands: brands });
}
