import fs from "fs";
import path from "path";
import { cwd } from "process";

export default function handler(req, res) {
  const { slug } = req.query;
  const filePath = path.join(cwd(), "data", "blogs.json");
  const blogs = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const blog = blogs.find((blog) => blog.slug === slug);
  if (blog) {
    res.status(200).json({ data: blog });
  } else {
    res.status(404).json({ message: "Blog not found" });
  }
}
