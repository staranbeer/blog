import React, { useState } from "react";
import { useRef } from "react";
import { HiOutlineSearch } from "react-icons/hi";
const tags = ["All", "Design", "Development"];

const Filters = ({ filterBySearch }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="filters mt-10 flex-col md:flex-row flex gap-4 justify-between">
      {/* search bar */}
      <div
        className="search gap-3 flex bg-gray-100 p-2 px-4 items-center rounded-full border-2 border-gray-100 hover:border-blue-500"
        onClick={() => inputRef.current.focus()}
      >
        <HiOutlineSearch />
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            filterBySearch(e.target.value);
          }}
          ref={inputRef}
          type="text"
          className="bg-gray-100 w-full outline-none"
          placeholder="Search"
        />
      </div>
      {/* tags */}
      <div className="flex items-center flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            onClick={() => setSelectedFilter(tag)}
            key={tag}
            className={`tag bg-gray-100 ${
              selectedFilter === tag ? "bg-blue-500 text-white" : ""
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
