import React from "react";
import {Link } from "react-router-dom";
// handleDelete
export const BlogList = ({ blogs, title }) => {
  return (
    <div>
      {" "}
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            {/* <button
            onClick={() => {
              handleDelete(blog.id);
            }}
          >
            Delete
          </button> */}
          </Link>
        </div>
      ))}
    </div>
  );
};
