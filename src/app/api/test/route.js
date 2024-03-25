// import { createUser } from "@/utils/firebase/firebaseUtils";
import { getData, testfire } from "@/utils/firebase/firestore";

export async function GET() {
  // await createUser("wchro@icloud.com", "Envision123", "creator");
  // const data = await getData();
  const x = await testfire();
  return Response.json({ hello: "fa" });
}

export async function POST() {
  return Response.json({ method: "POST" });
}
