import { getAllBlogs } from "../lib/utils";
import React, { useState } from "react";
import BlogList from "./../components/Blog/BlogList";
import Header from "./../components/Header/Header";
import Hero from "./../components/Hero/Hero";
import Filters from "./../components/Filters/Filters";

export async function getStaticProps() {
  const blogs = getAllBlogs();
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

const Index = ({ blogs, images }) => {
  const [posts, setPosts] = useState(blogs);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  if (!blogs) {
    return <div>nothing found</div>;
  }
  function filterBySearch(searchTerm) {
    let filtered = posts.filter((post) => {
      return post.data.title.toLowerCase().includes(searchTerm);
    });
    setFilteredPosts(filtered);
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* <Header /> */}
      <Hero />
      <Filters filterBySearch={filterBySearch} />
      <BlogList blogs={filteredPosts} images={images} />

      <div className="pagination"></div>
      <footer className="flex justify-between items-center p-4">
        <div className="footer__left">left</div>
        <div className="footer__right">right</div>
      </footer>
    </div>
  );
};

export default Index;
