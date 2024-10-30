// import { useState, useEffect } from "react";
import { BlogList } from "./BlogList";
// import axios from "axios";
import useFetch from "../customHook/useFetch";

const Home = () => {
  const { data: blogs, isLoading } = useFetch(
    "https://tar-majestic-gravity.glitch.me/blogs"
  );
  // const [blogs, setBlogs] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const baseURL = "https://tar-majestic-gravity.glitch.me/blogs";

  // { title: "My new website9-0"l.m   body: "lorem ipsum...", author: "steph", id: 1 },
  // { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
  // {
  //   title: "Web dev top tips",
  //   body: "lorem ipsum...",
  //   author: "steph",
  //   id: 3,
  // },
  // useEffect(() => {
  //  fetch("https://elderly-sincere-fireplace.glitch.me/blogs")
  // });

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const response = await axios.get(baseURL);
  //       setBlogs(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchBlogs();
  // }, []); // Runs only once when the component mounts

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  return (
    <div className=" home">
      {isLoading && <div>Loading...</div>}
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs" />
        // handleDelete={handleDelete}
      )}

      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "steph")}
        title="Stephs Blogs"
      /> */}
    </div>
  );
};

export default Home;
