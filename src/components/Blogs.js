import { useEffect, useState } from "react";
// import { Link } from "react-router-dom"; // For navigation
import useFetch from "../customHook/useFetch"; // Custom hook to fetch data
import { BlogList } from "./BlogList"; // Component to display the list of blogs

const Blogs = ({ blogs = [], setBlogs }) => {
  const [fetchedBlogs, setFetchedBlogs] = useState([]);

  // Fetch blogs from the API
  const { data: initialBlogs, isLoading } = useFetch(
    "https://yellow-tabby-puppy.glitch.me/blogs"
  );

  useEffect(() => {
    if (initialBlogs) {
      // Sort the fetched blogs by createdAt in descending order (most recent first)
      const sortedFetchedBlogs = initialBlogs.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setFetchedBlogs(sortedFetchedBlogs);
    }
  }, [initialBlogs]);

  // Combine fetched blogs with local blogs (without duplication)
  const combinedBlogs = [
    ...blogs, // Local blogs (new blogs created by users)
    ...fetchedBlogs.filter(
      (fetchedBlog) => !blogs.some((blog) => blog.id === fetchedBlog.id)
    ), // Filter out blogs already in local state
  ];

  return (
    <div className="blogs-page">
      {/* Heading */}
      <div className="blogs-heading">
        <h1>All Blogs</h1>
        <p>Explore all the blogs created by users and discover new content!</p>
      </div>

      {/* Loading state or Blog List */}
      {isLoading ? (
        <div className="loading-message">
          <h2>Loading blogs...</h2>
          <p>Please wait while we fetch the latest posts.</p>
        </div>
      ) : (
        <div className="blog-list-container">
          {combinedBlogs.length === 0 ? (
            <div className="no-blogs-message">
              <h2>No blogs available</h2>
              <p>Be the first to create a blog!</p>
            </div>
          ) : (
            <BlogList blogs={combinedBlogs} />
          )}
        </div>
      )}
    </div>
  );
};

export default Blogs;
