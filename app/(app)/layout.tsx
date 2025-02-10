import localFont from "next/font/local";
import "../globals.css";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/auth/jwt";
import { redirect } from "next/navigation";
import Sidebar from "../components/appSideBar";
import UserProvider from "../context/UserProvider";
import React from "react";
import TodoProvider from "../context/TodoProvider";

const estedadMed = localFont({
  src: "../fonts/Estedad-Medium.ttf",
});

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // if(!session) router.push('/auth/login')

  const session = cookies().get("session")?.value;
  if (!session) redirect("/auth/login");
  const user = await decrypt(session);

  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${estedadMed.className} antialiased justify-center items-center flex min-h-screen w-full`}
      >
        <UserProvider>
          <TodoProvider>
            <Sidebar user={user} />
            <main className="p-8 justify-center items-center bg-lightblue flex w-screen h-screen">
              {children}
            </main>
          </TodoProvider>
        </UserProvider>
      </body>
    </html>
  );
}
