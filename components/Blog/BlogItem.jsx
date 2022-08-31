import Link from "next/link";
import React from "react";
import { HiOutlineClock, HiOutlineUser } from "react-icons/hi";
const BlogItem = ({ title, slug, image, content }) => {
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
          <h3 className="my-5 text-xl capitalize font-medium text-blue-800 h-12">
            {title.substring(0, 40)}
          </h3>
          <p className="text-gray-500 my-2 ">
            {`${content.substring(0, 80)}`}
            ...
          </p>
        </div>
      </article>
    </Link>
  );
};

export default BlogItem;
