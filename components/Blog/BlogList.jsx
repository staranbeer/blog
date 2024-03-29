import BlogItem from "./BlogItem";

const BlogList = ({ blogs, images }) => {
  if (!blogs) {
    <div>Nothing found</div>;
  }
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2  gap-10 py-5">
      {blogs.length === 0 ? (
        <div className="text-center  w-full col-span-full text-xl mt-10">
          No posts found
        </div>
      ) : null}
      {blogs.map(({ data, content, slug }, index) => {
        return (
          <BlogItem
            slug={slug}
            title={data.title}
            key={slug}
            tags={data.tags}
            image={images[index]}
            content={content}
          />
        );
      })}
    </div>
  );
};

export default BlogList;
