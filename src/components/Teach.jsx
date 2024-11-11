import { useState } from "react";
// import { useState } from "react";

const Home = () => {
  // Click Events in React
  // Eg 1
  // const handleClick = (e) => {
  //   console.log("hello ninjas", e);
  // };
  // // Eg 2:Passing an argument
  // const handleClickAgain = (name, e) => {
  //   console.log("hello " + name, e.target);
  //   setName("Luigi");
  // };

  // using State:when you need a reactive value(name) that React can identify
  // const [name, setName] = useState("Mario");

  return (
    <div className="home">
      <h2>Homepage</h2>
      {/* Function reference */}
      {/* <button onClick={handleClick}>Click me</button> */}
      {/* Wrapping inside The anonymous function acts so as not to trigger the function immediately especially because we are using the () */}
      {/* <button onClick={(e) => handleClickAgain("mario", e)}>
        Click me again
      </button> */}
      {/* <p>{name}</p> */}
    </div>
  );
};

export default Home;

// // // // import { useNavigate, useParams } from "react-router-dom";
// // // // import { useState, useEffect } from "react";
// // // // import useFetch from "../customHook/useFetch";
// // // // import axios from "axios";

// // // // const BlogDetails = () => {
// // // //   const { id } = useParams();
// // // //   const navigate = useNavigate();
// // // //   const { data: fetchedBlog, isLoading } = useFetch(
// // // //     "https://yellow-tabby-puppy.glitch.me/blogs/" + id
// // // //   );
// // // //   const [blog, setBlog] = useState(null);

// // // //   // Update the blog state when fetchedBlog is loaded
// // // //   useEffect(() => {
// // // //     setBlog(fetchedBlog);
// // // //   }, [fetchedBlog]);

// // // //   const handleDelete = async () => {
// // // //     try {
// // // //       await axios.delete(
// // // //         "https://yellow-tabby-puppy.glitch.me/blogs/" + blog.id
// // // //       ); // Perform the delete request
// // // //       setBlog(null); // Update the UI to remove the blog immediately
// // // //       navigate("/"); // Redirect to the home page
// // // //     } catch (error) {
// // // //       console.error("Error deleting the blog:", error);
// // // //       // Optionally, display an error message to the user
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="blog-details">
// // // //       {isLoading && <div>Loading...</div>}
// // // //       {blog ? (
// // // //         <article>
// // // //           <h2>{blog.title}</h2>
// // // //           <p>Written by {blog.author}</p>
// // // //           <div>{blog.body}</div>
// // // //           <button onClick={handleDelete}>Delete Blog</button>
// // // //         </article>
// // // //       ) : (
// // // // isLoading !
// // // // && <div>Blog not found or has been deleted.</div> // Message if the blog is null
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default BlogDetails;

// // // import { useNavigate, useParams } from "react-router-dom";
// // // import axios from "axios";
// // // import useFetch from "../customHook/useFetch";

// // // const BlogDetails = () => {
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();
// // //   const {
// // //     data: blog,
// // //     isLoading,
// // //     refetch,
// // //   } = useFetch("https://yellow-tabby-puppy.glitch.me/blogs/" + id);

// // //   // const handleDelete = async () => {
// // //   //   try {
// // //   //     await axios.delete("https://yellow-tabby-puppy.glitch.me/blogs/" + id);
// // //   //     refetch(); // Refetch data to ensure UI updates
// // //   //     navigate("/"); // Navigate to the home page
// // //   //   } catch (error) {
// // //   //     console.error("Error deleting the blog:", error);
// // //   //   }
// // //   // };

// // //   const handleDelete = async () => {
// // //     try {
// // //       await axios.delete("https://yellow-tabby-puppy.glitch.me/blogs/" + id);
// // //       refetch(); // Refetch blogs to update the UI
// // //       navigate("/"); // Navigate back to home
// // //     } catch (error) {
// // //       console.error("Error deleting the blog:", error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="blog-details">
// // //       {isLoading && <div>Loading...</div>}
// // //       {blog ? (
// // //         <article>
// // //           <h2>{blog.title}</h2>
// // //           <p>Written by {blog.author}</p>
// // //           <div>{blog.body}</div>
// // //           <button onClick={() => onDelete(blog.id)}>Delete</button>
// // //         </article>
// // //       ) : (
// // //
// // // isLoading && <div>Blog not found or has been deleted.</div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default BlogDetails;

// // import { useNavigate, useParams } from "react-router-dom";
// // import axios from "axios";
// // import useFetch from "../customHook/useFetch";
// // import { useState, useEffect } from "react";

// // const BlogDetails = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const {
// //     data: blog,
// //     isLoading,
// //     refetch,
// //   } = useFetch("https://yellow-tabby-puppy.glitch.me/blogs/" + id);
// //   const [blogDeleted, setBlogDeleted] = useState(false);

// //   useEffect(() => {
// //     if (blogDeleted) {
// //       navigate("/"); // Navigate back to home after deletion
// //     }
// //   }, [blogDeleted, navigate]);

// //   const handleDelete = async () => {
// //     try {
// //       await axios.delete(
// //         "https://yellow-tabby-puppy.glitch.me/blogs/" + blog.id
// //       );
// //       setBlogDeleted(true); // Mark the blog as deleted
// //     } catch (error) {
// //       console.error("Error deleting the blog:", error);
// //       // Optionally, show a message about the error
// //     }
// //   };

// //   return (
// //     <div className="blog-details">
// //       {isLoading && <div>Loading...</div>}
// //       {blog ? (
// //         <article>
// //           <h2>{blog.title}</h2>
// //           <p>Written by {blog.author}</p>
// //           <div>{blog.body}</div>
// //           <button onClick={handleDelete}>Delete</button>
// //         </article>
// //       ) : (
// //
// // isLoading && <div>Blog not found or has been deleted.</div>
// //       )}
// //     </div>
// //   );
// // };

// // export default BlogDetails;

// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import useFetch from "../customHook/useFetch";
// import { useState, useEffect } from "react";

// const BlogDetails = ({ onDelete }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { data: blog, isLoading } = useFetch(
//     "https://yellow-tabby-puppy.glitch.me/blogs/" + id
//   );

//   const handleDelete = async () => {
//     try {
//       await axios.delete(
//         "https://yellow-tabby-puppy.glitch.me/blogs/" + blog.id
//       );
//       onDelete(id); // Notify the parent component to remove the blog
//       navigate("/"); // Navigate back to home
//     } catch (error) {
//       console.error("Error deleting the blog:", error);
//     }
//   };

//   return (
//     <div className="blog-details">
//       {isLoading && <div>Loading...</div>}
//       {blog ? (
//         <article>
//           <h2>{blog.title}</h2>
//           <p>Written by {blog.author}</p>
//           <div>{blog.body}</div>
//           <button onClick={handleDelete}>Delete</button>
//         </article>
//       ) : (
//
// isLoading && <div>Blog not found or has been deleted.</div>
//       )}
//     </div>
//   );
// };

// export default BlogDetails;

// // // import { useEffect, useState } from "react";
// // // import { Link } from "react-router-dom"; // For navigation
// // // import useFetch from "../customHook/useFetch"; // Custom hook to fetch data
// // // import { BlogList } from "./BlogList"; // Component to display the list of blogs

// // // const Home = ({ blogs, setBlogs }) => {
// // //   const [fetchedBlogs, setFetchedBlogs] = useState([]);
// // //   const [showBlogs, setShowBlogs] = useState(true); // Set to true to show blogs

// // //   // Fetch blogs from the API
// // //   const { data: initialBlogs, isLoading } = useFetch(
// // //     "https://yellow-tabby-puppy.glitch.me/blogs"
// // //   );

// // //   useEffect(() => {
// // //     if (initialBlogs) {
// // //       // Sort the fetched blogs by createdAt in descending order (most recent first)
// // //       const sortedFetchedBlogs = initialBlogs.sort(
// // //         (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
// // //       );
// // //       setFetchedBlogs(sortedFetchedBlogs);
// // //     }
// // //   }, [initialBlogs]);

// // //   // Combine fetched blogs with local blogs (without duplication)
// // //   const combinedBlogs = [
// // //     ...blogs, // Local blogs (new blogs created by users)
// // //     ...fetchedBlogs.filter(
// // //       (fetchedBlog) => !blogs.some((blog) => blog.id === fetchedBlog.id)
// // //     ), // Filter out blogs already in local state
// // //   ];

// // //   // Show only the first 3 blogs
// // //   const recentBlogs = combinedBlogs.slice(0, 3);

// // //   return (
// // //     <div className="home">
// // //       {/* Welcome message */}
// // //       <div className="welcome-message">
// // //         <h1>Welcome to BlogLab!</h1>
// // //         <p>
// // //           Your creative space to experiment with words, ideas, and stories.
// // //           Create and share your thoughts with the world.
// // //         </p>
// // //         <p></p>

// // //         {/* Create New Blog button */}
// // //         <Link to="/create">
// // //           <button className="create-blog-btn">Start Blogging</button>
// // //         </Link>
// // //       </div>

// // //       {/* View Blogs Section */}
// // //       {/* <div className="view-blogs-container">
// // //         <button
// // //           className="view-blogs-btn"
// // //           onClick={() => setShowBlogs((prev) => !prev)} // Toggle blogs visibility
// // //         >
// // //           {showBlogs ? "Hide Blogs" : "View All Blogs"}
// // //         </button>
// // //       </div> */}

// // //       {/* Show recent blogs */}
// // //       {isLoading ? (
// // //         <div className="loading-message">
// // //           <p>Loading blogs...</p>
// // //           <p>Please wait while we fetch the latest posts.</p>
// // //         </div>
// // //       ) : (
// // //         showBlogs && (
// // //           <div className="blog-list-container">
// // //             {recentBlogs.length === 0 ? (
// // //               <div className="no-blogs-message">
// // //                 <h2>No blogs available</h2>
// // //                 <p>Be the first to create a blog!</p>
// // //               </div>
// // //             ) : (
// // //               <div>
// // //                 <BlogList blogs={recentBlogs} title="Recent Blogs" />
// // //                 <Link to="/blogs">
// // //                   <button className="view-all-blogs-btn">
// // //                     Explore All Blog Labs
// // //                   </button>
// // //                 </Link>
// // //               </div>
// // //             )}
// // //           </div>
// // //         )
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Home;

// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import useFetch from "../customHook/useFetch";
// // import { BlogList } from "./BlogList";

// // const Home = ({ blogs, setBlogs }) => {
// //   const [fetchedBlogs, setFetchedBlogs] = useState([]);
// //   const [showBlogs, setShowBlogs] = useState(true);

// //   // Fetch blogs from the API
// //   const {
// //     data: initialBlogs,
// //     isLoading,
// //     refetch,
// //   } = useFetch("https://yellow-tabby-puppy.glitch.me/blogs");

// //   useEffect(() => {
// //     if (initialBlogs) {
// //       // Sort blogs by createdAt
// //       const sortedBlogs = initialBlogs.sort(
// //         (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
// //       );
// //       setFetchedBlogs(sortedBlogs);
// //     }
// //   }, [initialBlogs]);

// //   // Combine local and fetched blogs without duplication
// //   const combinedBlogs = [
// //     ...blogs,
// //     ...fetchedBlogs.filter(
// //       (fetchedBlog) => !blogs.some((blog) => blog.id === fetchedBlog.id)
// //     ),
// //   ];

// //   // Slice to get only the first 3 blogs
// //   const recentBlogs = combinedBlogs.slice(0, 3);

// //   return (
// //     <div className="home">
// //       <div className="welcome-message">
// //         <h1>Welcome to BlogLab!</h1>
// //         <p>
// //           Your creative space to experiment with words, ideas, and stories.
// //           Create and share your thoughts with the world.
// //         </p>

// //         <Link to="/create">
// //           <button className="create-blog-btn">Start Blogging</button>
// //         </Link>
// //       </div>

// //       {isLoading ? (
// //         <div className="loading-message">
// //           <p>Loading blogs...</p>
// //           <p>Please wait while we fetch the latest posts.</p>
// //         </div>
// //       ) : (
// //         showBlogs && (
// //           <div className="blog-list-container">
// //             {recentBlogs.length === 0 ? (
// //               <div className="no-blogs-message">
// //                 <h2>No blogs available</h2>
// //                 <p>Be the first to create a blog!</p>
// //               </div>
// //             ) : (
// //               <div>
// //                 <BlogList blogs={recentBlogs} title="Recent Blogs" />
// //                 <Link to="/blogs">
// //                   <button className="view-all-blogs-btn">
// //                     Explore All Blog Labs
// //                   </button>
// //                 </Link>
// //               </div>
// //             )}
// //           </div>
// //         )
// //       )}
// //     </div>
// //   );
// // };

// // export default Home;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import useFetch from "../customHook/useFetch"; // Custom hook to fetch data
// import { BlogList } from "./BlogList"; // Component to display the list of blogs

// const Home = ({ blogs, setBlogs }) => {
//   const [fetchedBlogs, setFetchedBlogs] = useState([]);
//   const [showBlogs, setShowBlogs] = useState(true);

//   // Fetch blogs from the API (useEffect will trigger when `blogs` changes)
//   const { data: initialBlogs, isLoading } = useFetch(
//     "https://yellow-tabby-puppy.glitch.me/blogs"
//   );

//   useEffect(() => {
//     if (initialBlogs) {
//       const sortedBlogs = initialBlogs.sort(
//         (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//       );
//       setFetchedBlogs(sortedBlogs);
//     }
//   }, [initialBlogs]);

//   // Combine local and fetched blogs without duplication
//   const combinedBlogs = [
//     ...blogs,
//     ...fetchedBlogs.filter(
//       (fetchedBlog) => !blogs.some((blog) => blog.id === fetchedBlog.id)
//     ),
//   ];

//   // Slice to get only the first 3 blogs
//   const recentBlogs = combinedBlogs.slice(0, 3);

//   // Handle blog deletion
//   const handleDeleteBlog = (id) => {
//     // Remove blog from local state
//     const updatedBlogs = blogs.filter((blog) => blog.id !== id);
//     setBlogs(updatedBlogs);

//     // Optionally, update the fetchedBlogs to reflect the change
//     const updatedFetchedBlogs = fetchedBlogs.filter((blog) => blog.id !== id);
//     setFetchedBlogs(updatedFetchedBlogs);
//   };

//   return (
//     <div className="home">
//       <div className="welcome-message">
//         <h1>Welcome to BlogLab!</h1>
//         <p>
//           Your creative space to experiment with words, ideas, and stories.
//           Create and share your thoughts with the world.
//         </p>

//         <Link to="/create">
//           <button className="create-blog-btn">Start Blogging</button>
//         </Link>
//       </div>

//       {isLoading ? (
//         <div className="loading-message">
//           <p>Loading blogs...</p>
//           <p>Please wait while we fetch the latest posts.</p>
//         </div>
//       ) : (
//         showBlogs && (
//           <div className="blog-list-container">
//             {recentBlogs.length === 0 ? (
//               <div className="no-blogs-message">
//                 <h2>No blogs available</h2>
//                 <p>Be the first to create a blog!</p>
//               </div>
//             ) : (
//               <div>
//                 <BlogList blogs={recentBlogs} title="Recent Blogs" />
//                 <Link to="/blogs">
//                   <button className="view-all-blogs-btn">
//                     Explore All Blog Labs
//                   </button>
//                 </Link>
//               </div>
//             )}
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default Home;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import useFetch from "../customHook/useFetch";
// import { BlogList } from "./BlogList";

// const Home = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [showBlogs, setShowBlogs] = useState(true);

//   // Fetch blogs from the API
//   const { data: initialBlogs, isLoading } = useFetch(
//     "https://yellow-tabby-puppy.glitch.me/blogs"
//   );

//   useEffect(() => {
//     if (initialBlogs) {
//       // Sort blogs by createdAt
//       const sortedBlogs = initialBlogs.sort(
//         (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//       );
//       setBlogs(sortedBlogs);
//     }
//   }, [initialBlogs]);

//   // Handle blog deletion
//   const handleBlogDelete = (id) => {
//     setBlogs(blogs.filter((blog) => blog.id !== id)); // Remove the deleted blog from the state
//   };

//   return (
//     <div className="home">
//       <div className="welcome-message">
//         <h1>Welcome to BlogLab!</h1>
//         <p>
//           Your creative space to experiment with words, ideas, and stories.
//           Create and share your thoughts with the world.
//         </p>

//         <Link to="/create">
//           <button className="create-blog-btn">Start Blogging</button>
//         </Link>
//       </div>

//       {isLoading ? (
//         <div className="loading-message">
//           <p>Loading blogs...</p>
//           <p>Please wait while we fetch the latest posts.</p>
//         </div>
//       ) : (
//         showBlogs && (
//           <div className="blog-list-container">
//             {blogs.length === 0 ? (
//               <div className="no-blogs-message">
//                 <h2>No blogs available</h2>
//                 <p>Be the first to create a blog!</p>
//               </div>
//             ) : (
//               <div>
//                 <BlogList
//                   blogs={blogs}
//                   title="Recent Blogs"
//                   onDelete={handleBlogDelete}
//                 />
//                 <Link to="/blogs">
//                   <button className="view-all-blogs-btn">
//                     Explore All Blog Labs
//                   </button>
//                 </Link>
//               </div>
//             )}
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default Home;
