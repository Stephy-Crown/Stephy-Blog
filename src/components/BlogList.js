import React from "react";
import { Link } from "react-router-dom";

export const BlogList = ({ blogs, title }) => {
  return (
    <div>
      <h2 className="blog-list-title">{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by <span className="blog-author">{blog.author}</span></p>
            <p>
              <small>
                Created on:{" "}
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  weekday: "long", // Full name of the day (e.g., "Monday")
                  year: "numeric", // Full year (e.g., "2024")
                  month: "long", // Full name of the month (e.g., "November")
                  day: "numeric", // Day of the month (e.g., "10")
                })}{" "}
                {new Date(blog.createdAt).toLocaleTimeString("en-US", {
                  hour: "2-digit", // Two-digit hour
                  minute: "2-digit", // Two-digit minute
                  // second: "2-digit", // Two-digit second
                  hour12: true, // Use 12-hour clock with AM/PM
                })}
              </small>
            </p>
          </Link>
          <Link to={`/blogs/${blog.id}`}>
            <button
              style={{
                backgroundColor: "#4c51bf", // Blue background
                color: "white", // White text
                border: "none", // Remove border
                padding: "7px 15px", // Padding
                borderRadius: "5px", // Rounded corners
                cursor: "pointer", // Pointer cursor on hover
                transition: "background-color 0.3s", // Smooth hover effect
              }}
            >
              View Blog
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};
