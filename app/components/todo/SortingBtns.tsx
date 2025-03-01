import React from "react";

const SortingBtns = ({ sort, setSort }) => {
    return (
        <div className={" flex items-center gap-3"}>
            <h3>نمایش به ترتیب اولویت:</h3>
            <div className="flex gap-3">
                <button
                    className={`${
                        sort === "HTL"
                            ? "bg-orange-500 text-darkbgsecondary"
                            : "bg-darkbgsecondary text-orange-500"
                    }  py-2 px-4 rounded-md transition-all ease-in-out duration-300`}
                    onClick={() => setSort("HTL")}
                >
                    زیاد به کم
                </button>
                <button
                    className={`${
                        sort === "LTH"
                            ? "bg-orange-500 text-darkbgsecondary"
                            : "bg-darkbgsecondary text-orange-500"
                    }  py-2 px-4 rounded-md transition-all ease-in-out duration-300`}
                    onClick={() => setSort("LTH")}
                >
                    کم به زیاد
                </button>
            </div>
        </div>
    );
};

export default SortingBtns;
