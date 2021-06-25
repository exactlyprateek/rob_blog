import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BlogView from "./BlogView";
import { Grid, GridItem } from "@chakra-ui/layout";
// import CategoryLink from "./CategoryLink";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`);
        const res = await axios.get(`http://3.142.222.215/api/blog/featured`);
        setFeaturedBlog(res.data[0]);
        console.log(res.data);
      } catch (err) {}
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
        const res = await axios.get(`http://3.142.222.215/api/blog/`);
        setBlogs(res.data);
      } catch (err) {}
    };

    fetchBlogs();
  }, []);

  const capitalizeFirstLetter = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
    return "";
  };

  const getBlogs = () => {
    let list = [];
    let result = [];

    blogs.map((blogPost) => {
      return list.push(
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">
              {capitalizeFirstLetter(blogPost.category)}
            </strong>
            <h3 className="mb-0">{blogPost.title}</h3>
            <div className="mb-1 text-muted">
              {blogPost.month} {blogPost.day}
            </div>
            <p className="card-text mb-auto">{blogPost.excerpt}</p>
            <Link to={`/blog/${blogPost.slug}`} className="stretched-link">
              Continue reading
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img
              width="200"
              height="250"
              src={blogPost.thumbnail}
              alt="thumbnail"
            />
          </div>
        </div>
      );
    });

    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div key={i} className="row mb-2">
          <div className="col-md-6">{list[i]}</div>
          <div className="col-md-6">{list[i + 1] ? list[i + 1] : null}</div>
        </div>
      );
    }

    return result;
  };
  return (
    <div>
      <Grid
        h="100vh"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(12, 1fr)"
      >
        {[1, 2, 3, 4].map((i, idx) => (
          <GridItem colSpan={["10", "5", "4", "4"]}>
            <BlogView />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default Blog;
