// import Link from "next/link";
// import React from "react";

// const SidebarButton = ({item, user = false}) => {
//   return (
//     <Link href={item.href} className="flex gap-3 p-3 text-[17px] w-full rounded-md items-center">
//       {item.icon}
//       <li className={user ? 'text-orange-500' : ''}>{item.title}</li>
//     </Link>
//   );
// };

// export default SidebarButton;
import Link from "next/link";
import React from "react";

const SidebarButton = ({ item, user = false }) => {
  return (
    <Link
      href={item.href}
      className=" gap-3 p-3 w-full rounded-xl transition-all duration-300 hover:bg-sidebaractivebg/20 hover:scale-105 flex items-center"
    >
      {item.icon}
      <span className={user ? "text-icon font-bold" : ""}>{item.title}</span>
    </Link>
  );
};

export default SidebarButton;
