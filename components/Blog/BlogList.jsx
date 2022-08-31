import React, { useEffect, useLayoutEffect, useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(
      `https://picsum.photos/v2/list?page=2&limit=${blogs.length}?grayscale`,
    )
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.log(err));
    console.log(images);
  }, []);

  if (!blogs) {
    <div>Nothing found</div>;
  }
  return (
    <div className=" px-8 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-14 py-5">
      {blogs.map(({ title, content, slug, id }, index) => {
        return (
          <BlogItem
            image={images[index]}
            slug={slug}
            title={title}
            key={id}
            content={content}
          />
        );
      })}
    </div>
  );
};

export default BlogList;
