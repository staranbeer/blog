import Link from "next/link";
import React from "react";
import { HiOutlineClock, HiOutlineUser } from "react-icons/hi";
const BlogItem = ({ title, slug, image }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="post cursor-pointer">
        <div className="aspect-square   bg-white overflow-hidden  ">
          <img
            src={image?.download_url || ""}
            alt={`decorative image by - ${image?.author}`}
            className="post__image object-cover h-full w-full"
          />
        </div>
        <div className="px-1 mt-auto  ">
          <h3 className="my-5 text-2xl capitalize font-medium">{title}</h3>
          <p className="text-gray-600 my-2 ">
            {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ex
          inventore repellendus repudiandae reiciendis non? Deleniti suscipit
          omnis ipsum quidem repudiandae unde eos neque deserunt sit, molestias
          quia, magnam voluptatem.`.substring(0, 80)}
          </p>
        </div>
        <div className="flex justify-between text-gray-400 text-xs mt-4 items-center">
          <div className="flex items-center gap-3">
            <HiOutlineUser size={16} />
            <span className="lg:inline-block hidden">taranbeer singh</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineClock size={16} />
            <span className="hidden lg:inline-block">
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogItem;
