'use client'
import { useState } from "react";
import { ChevronDown } from "lucide-react";


export default function CustomDropdown({props}) {
    const {selected, setSelected, priorities} = props;
  return (
    <div className="relative ">
      {/* Selected Item */}
      <button
      type="button"
        className="block py-2.5 px-0 w-full text-md text-orange-500 bg-transparent border-0 border-b-2 border-orange-500 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer flex justify-between items-center"
        onClick={() => document.getElementById("dropdown").classList.toggle("hidden")}
      >
        {selected.label}
        <ChevronDown size={18} className="text-orange-500" />
      </button>

      {/* Dropdown List */}
      <ul
        id="dropdown"
        className="absolute w-full mt-1 bg-darkbgsecondary text-orange-500 rounded-md shadow-lg hidden z-10"
      >
        {priorities.slice(1).map((item) => (
          <li
            key={item.value}
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => {
              setSelected(item);
              document.getElementById("dropdown").classList.add("hidden");
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
