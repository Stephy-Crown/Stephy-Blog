// import React from "react";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import useFetch from "../customHook/useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    // error,
    isLoading,
  } = useFetch("https://yellow-tabby-puppy.glitch.me/blogs/" + id);
  return (
    <div className="blog-details">
      {/* {<h2>Blog Details - {id} </h2>} */}
      {isLoading && <div>Loading...</div>}
      {blog && (
        <article>
          {" "}
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
