import React from "react";
import { HiOutlineArrowLeft, HiOutlineExternalLink } from "react-icons/hi";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getBlogBySlug, getAllSlugs } from "../../lib/utils";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { useRouter } from "next/router";

export async function getStaticProps({ params }) {
  const post = getBlogBySlug(params.slug);
  const mdxSource = await serialize(post.content);

  let image = await fetch(
    "https://api.pexels.com/v1/search?query=mountains&page=1&per_page=1",
    {
      headers: {
        Authorization: `${process.env.PEXELS_API_KEY}`,
      },
    },
  );
  image = await image.json();
  image = await image?.photos;
  return {
    props: {
      data: {
        title: post.data.title,
        slug: post.slug,
        content: mdxSource,
        image: image[0],
      },
    },
  };
}

const Slug = (props) => {
  const components = {
    code: function code({ className, ...props }) {
      return (
        <Highlight
          {...defaultProps}
          theme={theme}
          code={props.children}
          language={`${className.split("-")[1]}`}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => {
                if (i < line.length) {
                  return (
                    <div {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  );
                }
              })}
            </pre>
          )}
        </Highlight>
      );
    },
  };
  const { title, content, image } = props.data;
  if (!props.data) {
    return <div>Nothing found</div>;
  }
  const router = useRouter();
  return (
    <div className="max-w-2xl mx-auto">
      {/* thumbnail */}
      <div className="relative">
        <button
          onClick={() => router.back()}
          className="p-2  cursor-pointer  bg-gray-100  my-2 inline-flex items-center gap-4"
        >
          <HiOutlineArrowLeft size={20} />
          <span>Home</span>
        </button>
        <div className="aspect-square sm:aspect-auto w-full  h-[350px] sm:[400px]">
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
      <h1 className="text-3xl font-medium my-6">{title}</h1>
      {/* desciption */}
      <div className="prose max-w-full">
        <MDXRemote {...content} components={components} />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const slugs = getAllSlugs();

  const slugsPaths = slugs.map((slug) => ({
    params: { slug: slug },
  }));
  return {
    paths: slugsPaths,
    fallback: false,
  };
}

export default Slug;
