import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../customHook/useFetch";
import { BlogList } from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from the API
  const { data: initialBlogs, isLoading } = useFetch(
    "https://yellow-tabby-puppy.glitch.me/blogs"
  );

  useEffect(() => {
    if (initialBlogs) {
      // Sort blogs by createdAt
      const sortedBlogs = initialBlogs.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setBlogs(sortedBlogs);
    }
  }, [initialBlogs]);

  // Handle blog deletion
  const handleBlogDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id)); // Remove the deleted blog from the state
  };

  return (
    <div className="home">
      <div className="welcome-message">
        <h1>Welcome to BlogLab!</h1>
        <p>
          Your creative space to experiment with words, ideas, and stories.
          Create and share your thoughts with the world.
        </p>

        <Link to="/create">
          <button className="create-blog-btn">Start Blogging</button>
        </Link>
      </div>

      {isLoading ? (
        <div className="loading-message">
          <p>Loading blogs...</p>
          <p>Please wait while we fetch the latest posts.</p>
        </div>
      ) : (
        <div className="blog-list-container">
          {blogs.length === 0 ? (
            <div className="no-blogs-message">
              <h2>No blogs available</h2>
              <p>Be the first to create a blog!</p>
            </div>
          ) : (
            <div>
              <BlogList
                blogs={blogs}
                title="Recent Blogs"
                onDelete={handleBlogDelete}
              />
              <Link to="/blogs">
                <button className="view-all-blogs-btn">
                  Explore All Blog Labs
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
