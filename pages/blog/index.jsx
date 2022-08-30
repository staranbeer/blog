import React from "react";
import { env } from "process";
import BlogList from "../../components/Blog/BlogList";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Filters from "../../components/Filters/Filters";
import Featured from "../../components/Featured/Featured";

const Index = ({ blogs }) => {
  if (!blogs) {
    return <div>nothing found</div>;
  }
  return (
    <div className="p-4 sm:p-8 max-w-3xl mx-auto">
      <Header />
      <Hero />
      <Filters />
      {/* featured carousal */}
      <Featured />
      <BlogList blogs={blogs} />

      <div className="pagination"></div>
      <footer className="flex justify-between items-center">
        <div className="footer__left">left</div>
        <div className="footer__right">right</div>
      </footer>
    </div>
  );
};

export async function getStaticProps() {
  let res;
  try {
    res = await fetch(`${env.URL}/api/blog`);
    res = await res.json();
  } catch (err) {
    console.log(err.message);
  }
  return {
    props: {
      blogs: JSON.parse(res.data),
    },
  };
}

export default Index;
