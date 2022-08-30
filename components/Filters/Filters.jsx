import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
const tags = ["All", "Design", "Development"];
const Filters = () => {
  return (
    <div className="filters flex-col md:flex-row flex gap-4 justify-between">
      {/* search bar */}
      <div className="search gap-3 flex bg-gray-200 p-2 px-4 items-center rounded-full">
        <HiOutlineSearch />
        <input
          type="text"
          className="bg-gray-200 w-full"
          placeholder="Search"
        />
      </div>
      {/* tags */}
      <div className="flex items-center flex-wrap gap-3">
        {tags.map((tag) => (
          <button key={tag} className="px-5 py-2 rounded-full bg-gray-100">
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
