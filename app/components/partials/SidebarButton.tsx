import Link from "next/link";
import React from "react";

const SidebarButton = ({item, user = false}) => {
  return (
    <Link href={item.href} className="flex gap-3 w-full p-3 bg-lightblue bg-opacity-40 rounded-md items-center">
      {item.icon}
      <li className={user ? 'text-orange-500' : ''}>{item.title}</li>
    </Link>
  );
};

export default SidebarButton;
