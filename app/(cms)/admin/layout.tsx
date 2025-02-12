import localFont from "next/font/local";
import "../../globals.css";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/auth/jwt";
import { redirect } from "next/navigation";
import React from "react";
import AdminSidebar from "@/app/components/admin/AdminSideBar";
import { bold } from "@/app/(root)/fonts";

const estedadMed = localFont({
  src: "../../fonts/Estedad-Medium.ttf",
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
  if(!user.admin) redirect('/')

  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${estedadMed.className} antialiased justify-center items-center flex w-full`}
      >
            <AdminSidebar  />
            <main className={`p-8 ${bold} justify-center items-center flex flex-col bg-lightorange w-screen `}>
              {children}
            </main>
      </body>
    </html>
  );
}
