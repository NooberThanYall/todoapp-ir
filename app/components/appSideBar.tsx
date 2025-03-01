"use client";
import {
  CalendarCheck,
  ChartNoAxesCombined,
  ListTodo,
  Lock,
  Settings,
  User,
} from "lucide-react";

import React from "react";
import SidebarButton from "./partials/SidebarButton";
import Image from "next/image";
import { sweety } from "../(root)/fonts";

const items = [
  {
    title: "لیست کار ها",
    icon: <ListTodo className="text-orange-400" size={22} />,
    href: "/app",
  },
  {
    title: "روتین ها",
    icon: <CalendarCheck className="text-orange-400" size={22} />,
    href: "/app/routines",
  },
  {
    title: "پیشرفت",
    icon: <ChartNoAxesCombined className="text-orange-400" size={22} />,
    href: "/app/progression",
  },
];

const Sidebar = ({ user }) => {
  return (
    <nav className="md:flex hidden h-screen w-64 bg-darkbgsidebar backdrop-blur-md shadow-lg   flex-col items-center py-6 px-4">
      <div className="flex items-center gap-3 justify-center">
        <Image src={"/images/ToDo.png"} alt="Logo" height={40} width={40} />
        <h1 className={`${sweety.className} text-orange-400 text-2xl font-bold`}>Todo Iran</h1>
      </div>
      <div className="w-full mt-10 flex flex-col gap-4">
        <SidebarButton
          item={{
            title: user.name,
            href: "/app/settings",
            icon: <User className="text-icon" size={22} />,
          }}
          user={true}
        />
        {items.map((item) => (
          <SidebarButton item={item} key={item.title} />
        ))}
      </div>
      {user.admin ? (
        <div className="mt-auto w-full">
          <SidebarButton
            item={{
              title: "ورود به پنل ادمین",
              href: "/auth/admin",
              icon: <Lock className="text-orange-400" size={22} />,
            }}
            user={true}
          />
        </div>
      ) : (
        <div className="mt-auto w-full">
          <SidebarButton
            item={{
              title: "تنظیمات",
              href: "/app/settings",
              icon: <Settings className="text-orange-400" size={22} />,
            }}
            user={true}
          />
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
