"use client";
import {
  ChartNoAxesCombined,
  ListTodo,
  Lock,
  Settings,
  User,
} from "lucide-react";

import React from "react";
import SidebarButton from "./partials/SidebarButton";
import Image from "next/image";

const items = [
  {
    title: "لیست کار ها",
    icon: <ListTodo color="#f97316" />,
    href: "/app",
  },
  {
    title: "پیشرفت",
    icon: <ChartNoAxesCombined color="#f97316" />,
    href: "/app/progression",
  },
  {
    title: "تنظیمات",
    icon: <Settings color="#f97316" />,
    href: "/app/settings",
  },
];

const Sidebar = ({ user }) => {
  // const user = useUser();

  return (
    <nav className="h-screen w-1/6 bg-darkblue text-white flex flex-col items-center py-5 justify-between">
      <div className="w-full">
        <div className="flex items-center gap-3 justify-center">
          <h1 className="text-orange-400 text-bold text-xl font-bold font-sans">
            Todo Iran
          </h1>
          <Image src={"/images/ToDo.png"} alt="Logo" height={40} width={40} />
        </div>
        <ul className="flex flex-col items-start py-6 px-4 text-lg gap-2 w-full">
          <SidebarButton
            item={{
              title: user.name,
              href: "/app/settings",
              icon: <User color="#f97316" />,
            }}
            key={"kirkhar"}
            user={true}
          />
          {items.map((item) => {
            return <SidebarButton item={item} key={item.title} />;
          })}
        </ul>
      </div>
      <div>
        {user.admin ? (
          <SidebarButton
            item={{
              title: "ورود به پنل ادمین",
              href: "/auth/admin",
              icon: <Lock color="#f97316" />,
            }}
            key={"kirkhar"}
            user={true}
          />
        ) : null}
      </div>
    </nav>
  );
};

export default Sidebar;
