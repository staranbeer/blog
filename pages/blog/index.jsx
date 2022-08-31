import { getAllBlogs } from "../../lib/utils";
import React from "react";
import BlogList from "../../components/Blog/BlogList";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Filters from "../../components/Filters/Filters";

export async function getStaticProps() {
  const blogs = getAllBlogs();
  console.log(blogs[0]);
  return {
    props: {
      blogs: blogs,
    },
  };
}

const Index = ({ blogs }) => {
  if (!blogs) {
    return <div>nothing found</div>;
  }
  return (
    <>
      <Header />
      <Hero />
      <Filters />
      <BlogList blogs={blogs} />

      <div className="pagination"></div>
      <footer className="flex justify-between items-center p-4">
        <div className="footer__left">left</div>
        <div className="footer__right">right</div>
      </footer>
    </>
  );
};

export default Index;
