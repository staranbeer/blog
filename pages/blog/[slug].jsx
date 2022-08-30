import Image from "next/image";
import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
const Slug = (props) => {
  const { title, content, image } = props.data;
  if (!props.data) {
    return <div>Nothing found</div>;
  }
  return (
    <div className=" ">
      {/* thumbnail */}
      <div className="relative bg-blue-400">
        <div className="w-full h-[400px]">
          <img
            src={image.src.landscape}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 px-1 m-1 right-0 bg-white ">
          <p className="whitespace-nowrap">
            Image by {image.photographer} on{" "}
            <a
              target={"_blank"}
              href="https://pexels.com"
              rel="noreferrer"
              className="inline-flex items-center gap-1 whitespace-nowrap"
            >
              pexels
              <HiOutlineExternalLink />
            </a>
          </p>
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
  try {
    const { slug } = params;
    const BASE_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : process.env.VERCEL_URL;
    let res = await fetch(`${BASE_URL}/api/blog/${slug}`);
    res = await res.json();
    res = res.data;
    console.log(params);
    console.log(process.env.NODE_ENV);
    let image = await fetch(
      "https://api.pexels.com/v1/search?query=animals&page=1&per_page=1",
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
  } catch (err) {
    console.log(err);
  }
}

export async function getStaticPaths({ params }) {
  try {
    const BASE_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : process.env.VERCEL_URL;
    const res = await fetch(`${BASE_URL}/api/blog`);
    let blogs = await res.json();
    console.log(process.env.URL);
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
  } catch (err) {
    console.log(err);
  }
}

export default Slug;
