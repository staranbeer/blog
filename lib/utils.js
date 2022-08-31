import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "_posts");

function getAllSlugs() {
  const slugsPaths = fs
    .readdirSync(POSTS_DIR)
    .map((post) => post.replaceAll(".mdx", ""));
  return slugsPaths;
}

function getBlogBySlug(slug) {
  const postFile = fs.readFileSync(
    path.join(POSTS_DIR, `${slug}.mdx`),
    "utf-8",
  );
  const { data, content } = matter(postFile, "utf-8");
  return {
    data,
    slug,
    content,
  };
}

function getAllBlogs() {
  const blogs = getAllSlugs().map((slug) => {
    return getBlogBySlug(slug);
  });
  return blogs;
}

export { getAllBlogs, getAllSlugs, getBlogBySlug };
