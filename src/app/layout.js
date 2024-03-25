"use client";

import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { AuthContextProvider } from "@/components/context/authContext";

const josefin = Josefin_Sans({ subsets: ["latin"] });

const metadata = {
  title: "Envision - Talent Management",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <AuthContextProvider>
          <Header />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
