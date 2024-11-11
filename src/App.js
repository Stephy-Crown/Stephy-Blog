// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Create from "./components/Create";
// import Footer from "./components/Footer";
// import Blogs from "./components/Blogs";
// import BlogDetails from "./components/BlogDetails";

// function App() {
//   const [blogs, setBlogs] = useState([]);

//   const [fetchedBlogs, setFetchedBlogs] = useState([]); // Fetched blogs from the server

//   // Fetch blogs from the server when the component mounts
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get(
//           "https://swift-rose-date.glitch.me/blogs"
//         );
//         setFetchedBlogs(response.data);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     };
//     fetchBlogs();
//   }, []);

//   // Function to add a blog to the top
//   // const addBlogToTop = (newBlog) => {
//   //   setBlogs((prevBlogs) => [newBlog, ...prevBlogs]);
//   // };
//   const addBlogToTop = (newBlog) => {
//     setBlogs((prevBlogs) => [newBlog, ...prevBlogs]); // Add new blog at the top
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <div className="content">
//           <Routes>
//             <Route
//               path="/"
//               // element={<Home blogs={blogs} setBlogs={setBlogs} />} // Pass blogs and setBlogs to Home
//               element={<Home blogs={blogs} fetchedBlogs={fetchedBlogs} />}
//             />
//             <Route path="/blogs" element={<Blogs />} />{" "}
//             {/* Route for all blogs */}
//             <Route
//               path="/create"
//               element={<Create addBlogToTop={addBlogToTop} />} // Pass addBlogToTop to Create
//             />
//             <Route path="/blogs/:id" element={<BlogDetails />} />
//           </Routes>
//         </div>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";

function App() {
  const [blogs, setBlogs] = useState([]); // Blog state for local blogs

  const [fetchedBlogs, setFetchedBlogs] = useState([]); // Fetched blogs from the server

  // Fetch blogs from the server when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://swift-rose-date.glitch.me/blogs"
        );
        setFetchedBlogs(response.data); // Set blogs to fetched data
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  // Function to add a blog to the top
  const addBlogToTop = (newBlog) => {
    setBlogs((prevBlogs) => [newBlog, ...prevBlogs]); // Add new blog at the top
  };

  // Function to delete a blog
  const handleDelete = (id) => {
    // Filter out the deleted blog from the state
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={<Home blogs={blogs} fetchedBlogs={fetchedBlogs} />}
            />
            <Route path="/blogs" element={<Blogs />} />
            <Route
              path="/create"
              element={<Create addBlogToTop={addBlogToTop} />}
            />
            <Route
              path="/blogs/:id"
              element={<BlogDetails onDelete={handleDelete} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
