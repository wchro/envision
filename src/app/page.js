"use client";

import { UserAuth } from "@/components/context/authContext";

export default function Home() {
  const { user } = UserAuth();
  return user ? "Sesion iniciada" : "No has entrado";
}
