import fs from "fs";
import path from "path";
import { cwd } from "process";

export default function handler(req, res) {
  const filePath = path.join(cwd(), "data", "blogs.json");
  const blogs = fs.readFileSync(filePath, "utf8");
  res.status(200).json({ data: JSON.parse(blogs) });
}
