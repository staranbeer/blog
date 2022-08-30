import React from "react";
import BlogList from "../../components/Blog/BlogList";
import Header from "../../components/Header/Header";
import fs from "fs";
import path from "path";
import Hero from "../../components/Hero/Hero";
import Filters from "../../components/Filters/Filters";
import Featured from "../../components/Featured/Featured";

const Index = ({ blogs }) => {
  if (!blogs) {
    return <div>nothing found</div>;
  }
  return (
    <>
      <Header />
      <Hero />
      <Filters />
      {/* featured carousal */}
      <Featured />
      <BlogList blogs={blogs} />

      <div className="pagination"></div>
      <footer className="flex justify-between items-center p-4">
        <div className="footer__left">left</div>
        <div className="footer__right">right</div>
      </footer>
    </>
  );
};

export async function getStaticProps() {
  let res = fs.readFileSync(
    path.join(process.cwd(), "data", "blogs.json"),
    "utf8",
  );
  res = JSON.parse(res);
  return {
    props: {
      blogs: res,
    },
  };
}

export default Index;
