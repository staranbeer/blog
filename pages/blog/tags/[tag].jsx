import { useRouter } from "next/router";
import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import BlogList from "../../../components/Blog/BlogList";
import { getAllBlogs, getAllTags } from "../../../lib/utils";

const Tag = ({ blogs, images }) => {
  const router = useRouter();
  return (
    <div className="max-w-5xl mx-auto">
      <button
        onClick={() => router.back()}
        className="p-2  cursor-pointer  bg-gray-100  my-2 inline-flex items-center gap-4"
      >
        <HiOutlineArrowLeft size={20} />
        <span>Home</span>
      </button>
      <h1 className="mt-10 font-bold text-gray-500">
        Blogs in the{" "}
        <span className="text-2xl text-black mx-1 uppercase">
          {router.query.tag}{" "}
        </span>
        category
      </h1>
      <BlogList blogs={blogs} images={images} />
    </div>
  );
};

export async function getStaticProps({ params }) {
  const blogs = getAllBlogs().filter((blog) =>
    blog.data.tags.includes(params.tag),
  );

  let images = await fetch(
    `https://api.pexels.com/v1/search?query=clouds&page=1&per_page=${blogs.length}`,
    {
      headers: {
        Authorization: `${process.env.PEXELS_API_KEY}`,
      },
    },
  );
  images = await images.json();
  images = images?.photos?.map((image) => ({
    photographer: image?.photographer,
    src: image?.src?.large,
  }));

  return {
    props: {
      blogs: blogs,
      images: images,
    },
  };
}

export async function getStaticPaths() {
  const tags = getAllTags();
  const tagsPaths = tags.map((tag) => ({
    params: { tag },
  }));
  return {
    paths: tagsPaths,
    fallback: false,
  };
}

export default Tag;
