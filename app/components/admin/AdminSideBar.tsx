"use client";
import {
  BookOpenText,
  ChartNoAxesCombined,
  CornerDownLeft,
  Settings,
  User,
} from "lucide-react";

import React from "react";
import SidebarButton from "../partials/SidebarButton";
import Image from "next/image";

const items = [
  {
    title: "کاربرا",
    icon: <User color="#f97316" />,
    href: "/admin/panel",
  },
  {
    title: "مقالات",
    icon: <BookOpenText color="#f97316" />,
    href: "/admin/blogs",
  },
  {
    title: "بازگشت به اپ",
    icon: <CornerDownLeft color="#f97316" />,
    href: "/app",
  },
];

const AdminSidebar = () => {
  // const user = useUser();

  return (
    <nav className="h-screen w-1/6 bg-darkorange text-white flex flex-col items-center py-5 justify-between">
      <div className="w-full">
        <div className="flex items-center gap-3 justify-center">
          <h1 className="text-orange-400 text-bold text-xl font-bold  ">
            پنل ادمین 
          </h1>
          <Image src={"/images/ToDo.png"} alt="Logo" height={40} width={40} />
        </div>
        <ul className="flex flex-col items-start py-6 px-4 text-lg gap-2 w-full">
          
          {items.map((item) => {
            return <SidebarButton item={item} key={item.title} />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default AdminSidebar;
