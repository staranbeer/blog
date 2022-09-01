import Link from "next/link";
import React from "react";
const BlogItem = ({ title, slug, image, tags }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="post cursor-pointer  shadow-md py-10 p-6">
        <div className="aspect-square sm:aspect-video relative  bg-white overflow-hidden  ">
          <img
            src={image?.src || ""}
            alt={`decorative image by - ${image?.author}`}
            className="post__image object-cover h-full w-full"
          />
          <div className="post__image-tags absolute w-full h-full bg-[#0009] left-0 top-0 grid place-items-center opacity-0 transition-all">
            <div className="flex gap-4">
              {tags.map((tag) => (
                <div className="tag bg-white" key={tag}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-1 mt-auto  ">
          <h3 className="mt-8 text-xl capitalize font-medium text-blue-800 h-12">
            {title.substring(0, 40)}
          </h3>
        </div>
      </article>
    </Link>
  );
};

export default BlogItem;
