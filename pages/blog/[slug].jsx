import Image from "next/image";
import React from "react";

const Slug = (props) => {
  const { title, content, image } = props.data;
  console.log(image);
  if (!props.data) {
    return <div>Nothing found</div>;
  }
  return (
    <div className=" ">
      {/* thumbnail */}
      <div className="relative bg-blue-400">
        <div className="w-full relative h-[400px]">
          <img
            src={image.src.landscape}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 px-1 m-1 right-0 bg-white">
          Image by {image.photographer} on{" "}
          <a href="https://pexels.com" className="underline">
            pexels
          </a>
        </div>
      </div>
      {/* title */}
      <div className="flex justify-between py-4 text-gray-500 ">
        <div>Author: </div>
        <div>TimeStamp:</div>
      </div>
      <h1 className="text-3xl font-medium mt-6">{title}</h1>
      {/* desciption */}
      <div className="mt-3">
        {content} Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Numquam nesciunt provident aliquam? Ex, eius tenetur quae labore
        voluptatum harum accusamus cupiditate provident nobis illum quasi,
        consectetur quidem, suscipit quos. Itaque quo iure aut aliquid, ex nihil
        libero debitis at saepe!
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  let res = await fetch(`${process.env.URL}/api/blog/${slug}`);
  res = await res.json();
  res = res.data;
  let image = await fetch(
    "https://api.pexels.com/v1/search?query=nature&page=1&per_page=1",
    {
      headers: {
        Authorization: `${process.env.PEXELS_API_KEY}`,
      },
    },
  );

  image = await image.json();
  image = await image.photos;
  return {
    props: {
      data: { ...res, image: image[0] },
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.URL}/api/blog`);
  let blogs = await res.json();
  blogs = await blogs.data;
  const paths = JSON.parse(blogs).map((blog) => ({
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
