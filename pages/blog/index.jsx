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