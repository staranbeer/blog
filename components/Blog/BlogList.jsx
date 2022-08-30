import React from "react";
import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => {
  if (!blogs) {
    <div>Nothing found</div>;
  }
  return (
    <div className=" grid sm:grid-cols-2  gap-10 py-5">
      {blogs.map(({ title, content, slug, id }) => {
        return (
          <BlogItem slug={slug} title={title} key={id} content={content} />
        );
      })}
    </div>
  );
};

export default BlogList;
