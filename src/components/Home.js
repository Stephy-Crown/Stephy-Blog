import { useState } from "react";
import { BlogList } from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "steph", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "steph",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className=" home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />

      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "steph")}
        title="Stephs Blogs"
      /> */}
    </div>
  );
};

export default Home;
