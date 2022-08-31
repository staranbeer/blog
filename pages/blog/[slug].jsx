import React from "react";
import fs from "fs";
import path from "path";
import { HiOutlineArrowLeft, HiOutlineExternalLink } from "react-icons/hi";
import { useRouter } from "next/router";
const Slug = (props) => {
  const router = useRouter();
  const { title, content, image } = props.data;
  if (!props.data) {
    return <div>Nothing found</div>;
  }
  return (
    <div className=" ">
      {/* thumbnail */}
      <div className="relative">
        <div
          className="p-2 cursor-pointer inline-block bg-gray-100"
          onClick={() => {
            router.back();
          }}
        >
          <HiOutlineArrowLeft size={20} />
        </div>
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
    const content = fs.readFileSync(
      path.join(process.cwd(), "data", "blogs.json"),
      "utf8",
    );
    const res = JSON.parse(content).filter((item) => item.slug === slug)[0];
    let image = await fetch(
      "https://api.pexels.com/v1/search?query=mountains&page=1&per_page=1",
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
    return {
      props: {},
    };
  }
}

export async function getStaticPaths({ params }) {
  const pathsFile = fs.readFileSync(
    path.join(process.cwd(), "data", "blogs.json"),
    "utf8",
  );
  const paths = JSON.parse(pathsFile).map((blog) => ({
    params: {
      slug: blog.slug || [],
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default Slug;
