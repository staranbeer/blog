import React from "react";

const Featured = () => {
  return (
    <div className="h-full relative w-full  my-8 bg-gradient-to-br from-blue-500 to-blue-300 text-white p-5  ">
      <h2 className="font-bold py-2 px-4 m-2 bg-white inline-block  text-blue-500 rounded-full text-xs 2">
        Featured Article
      </h2>
      <div className="space-y-1 md:space-y-3 pt-16 px-5 pb-6 ">
        <h2 className="title text-xl  md:text-2xl font-bold ">A nice title</h2>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, cum?
          odit. <button>Read More</button>
        </p>
      </div>
    </div>
  );
};

export default Featured;
