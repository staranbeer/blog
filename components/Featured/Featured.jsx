import React from "react";

const Featured = () => {
  return (
    <div className="h-full relative w-full bg-blue-400">
      <div className="absolute space-y-1 md:space-y-3   bottom-0 p-4 sm:p-6 md:p-12 ">
        <h2 className="title text-lg  md:text-2xl font-bold ">A nice title</h2>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
          odit. <button>Read More</button>
        </p>
        <div className="author  rounded-full ">Alex luna</div>
      </div>
    </div>
  );
};

export default Featured;
