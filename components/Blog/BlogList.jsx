import BlogItem from "./BlogItem";

const BlogList = ({ blogs, images }) => {
  if (!blogs) {
    <div>Nothing found</div>;
  }
  return (
    <div className="mt-10 sm:mt-16   grid grid-cols-1 md:grid-cols-2  gap-10 py-5">
      {blogs.map(({ data, content, slug }, index) => {
        return (
          <BlogItem
            slug={slug}
            title={data.title}
            key={slug}
            image={images[index]}
            content={content}
          />
        );
      })}
    </div>
  );
};

export default BlogList;
