import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // For navigation
import useFetch from "../customHook/useFetch"; // Custom hook to fetch data
import { BlogList } from "./BlogList"; // Component to display the list of blogs

const Home = ({ blogs, setBlogs }) => {
  const [fetchedBlogs, setFetchedBlogs] = useState([]);
  const [showBlogs, setShowBlogs] = useState(true); // Set to true to show blogs

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

  // Show only the first 3 blogs
  const recentBlogs = combinedBlogs.slice(0, 3);

  return (
    <div className="home">
      {/* Welcome message */}
      <div className="welcome-message">
        <h1>Welcome to BlogLab!</h1>
        <p>
          Your creative space to experiment with words, ideas, and stories.
          Create and share your thoughts with the world.
        </p>
        <p></p>

        {/* Create New Blog button */}
        <Link to="/create">
          <button className="create-blog-btn">Start Blogging</button>
        </Link>
      </div>

      {/* View Blogs Section */}
      {/* <div className="view-blogs-container">
        <button
          className="view-blogs-btn"
          onClick={() => setShowBlogs((prev) => !prev)} // Toggle blogs visibility
        >
          {showBlogs ? "Hide Blogs" : "View All Blogs"}
        </button>
      </div> */}

      {/* Show recent blogs */}
      {isLoading ? (
        <div className="loading-message">
          <h2>Loading blogs...</h2>
          <p>Please wait while we fetch the latest posts.</p>
        </div>
      ) : (
        showBlogs && (
          <div className="blog-list-container">
            {recentBlogs.length === 0 ? (
              <div className="no-blogs-message">
                <h2>No blogs available</h2>
                <p>Be the first to create a blog!</p>
              </div>
            ) : (
              <div>
                <BlogList blogs={recentBlogs} title="Recent Blogs" />
                <Link to="/blogs">
                  <button className="view-all-blogs-btn">
                    Explore All Blog Labs
                  </button>
                </Link>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Home;
