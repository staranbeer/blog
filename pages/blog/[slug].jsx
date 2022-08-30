import React from "react";

const Slug = (props) => {
  const { title } = props.data;
  if (!props.data) {
    return <div>Nothing found</div>;
  }
  return (
    <div className="bg-red-400 ">
      {/* thumbnail */}
      <div></div>
      {/* title */}
      <h1 className="text-3xl font-medium">{title}</h1>
      {/* desciption */}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, natus?
        Eaque distinctio dolorum doloremque est ipsa ducimus voluptatum sint
        corrupti modi, soluta omnis enim quas reprehenderit, recusandae quo
        debitis tempore.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, natus?
        Eaque distinctio dolorum doloremque est ipsa ducimus voluptatum sint
        corrupti modi, soluta omnis enim quas reprehenderit, recusandae quo
        debitis tempore.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, natus?
        Eaque distinctio dolorum doloremque est ipsa ducimus voluptatum sint
        corrupti modi, soluta omnis enim quas reprehenderit, recusandae quo
        debitis tempore.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, natus?
        Eaque distinctio dolorum doloremque est ipsa ducimus voluptatum sint
        corrupti modi, soluta omnis enim quas reprehenderit, recusandae quo
        debitis tempore.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, natus?
        Eaque distinctio dolorum doloremque est ipsa ducimus voluptatum sint
        corrupti modi, soluta omnis enim quas reprehenderit, recusandae quo
        debitis tempore.
      </p>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  let res = await fetch(`${process.env.URL}/api/blog/${slug}`);
  res = await res.json();
  res = res.data;
  return {
    props: {
      data: res,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.URL}/api/blog`);
  let blogs = await res.json();
  blogs = blogs.data;
  const paths = blogs.map((blog) => ({
    params: {
      slug: blog.slug,
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default Slug;
