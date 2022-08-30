import React from "react";
import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => {
  if (!blogs) {
    <div>Nothing found</div>;
  }
  return (
    <div className="bg-gray-100 grid md:grid-cols-2  gap-4 p-5">
      {blogs.map(({ title, content, slug, id }) => {
        return (
          <BlogItem slug={slug} title={title} key={id} content={content} />
        );
      })}
    </div>
  );
};

export default BlogList;
