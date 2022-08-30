import React from "react";

const BlogItem = ({ title }) => {
  return (
    <article className="p-4">
      <div className="aspect-square rounded-3xl bg-red-400 "></div>
      <div className="px-3">
        <h3 className="mt-5 text-lg capitalize font-bold">{title}</h3>
        <p className="text-gray-600 mt-2">
          {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ex
          inventore repellendus repudiandae reiciendis non? Deleniti suscipit
          omnis ipsum quidem repudiandae unde eos neque deserunt sit, molestias
          quia, magnam voluptatem.`.substring(0, 100)}
        </p>
      </div>
    </article>
  );
};

export default BlogItem;
