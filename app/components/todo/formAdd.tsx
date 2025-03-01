import { PlusCircle } from "lucide-react";
import React, { ChangeEvent, FormEvent, useState } from "react";
import CustomDropdown from "./SelectInput";

const priorities = [
  { value: "4", label: "انتخاب اولویت" }, // Default option
  { value: "1", label: "بالا" },
  { value: "2", label: "متوسط" },
  { value: "3", label: "اونقدی زیاد نه" },
  { value: "4", label: "پایین" },
];
const FormAdd = ({add}) => {
    const [value, setValue] = useState<string>("");
    const [selected, setSelected] = useState(priorities[0]);
    

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        add(value, selected.value);
        setValue("");
    };
    return (
      <form className="flex flex-col sm:flex-row items-end gap-3 w-full" onSubmit={handleSubmit}>
      <div className="w-full sm:w-7/12 md:w-9/12">
        <input
          type="text"
          name="task"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          placeholder="کار جدید..."
          className="w-full px-4 py-2.5 bg-darkbgsecondary rounded-lg shadow-inner focus:ring-2 focus:ring-darkblue focus:outline-none"
        />
      </div>
      <div className="w-full sm:w-5/12 md:w-3/12 flex items-end gap-4">
        <div className="flex-1 ">
          <CustomDropdown props={{ priorities, selected, setSelected }} />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-textprimary p-2.5 rounded-lg shadow-lg hover:bg-orange-600 transition flex-shrink-0"
        >
          <PlusCircle size={24} />
        </button>
      </div>
    </form>

    );
};

export default FormAdd;
