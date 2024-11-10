import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({ addBlogToTop }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("steph");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createdAt =
      new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date()) +
      " " +
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

    // console.log(createdAt);

    const blog = {
      title,
      body,
      author,

      id: Date.now(), // Use a unique identifier based on the current timestamp
      // createdAt: new Date().toISOString() // Current date and time in ISO format
      // createdAt: new Date().toISOString(),
      // createdAt: new Date().toLocaleString("en-US", {
      //   weekday: "long", // "Monday"
      //   year: "numeric", // "2024"
      //   month: "long", // "November"
      //   day: "numeric", // "10"
      //   hour: "2", // "2"
      //   minute: "2", // "02"
      //   second: "55", // "55"
      //   hour12: true, // Use 12-hour format with AM/PM
      // }),
      createdAt,
    };

    setIsLoading(true);

    try {
      // Make POST request to add a new blog
      const response = await axios.post(
        "https://yellow-tabby-puppy.glitch.me/blogs",
        blog
      );

      // Ensure response contains the added blog data
      if (response && response.data) {
        addBlogToTop(response.data); // Add the new blog to the top
      }

      // Clear form fields
      setTitle("");
      setBody("");
      setAuthor("steph");

      // Redirect to the homepage
      navigate("/");
    } catch (error) {
      console.error("Error adding the blog!", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="steph">steph</option>
          <option value="crown">crown</option>
        </select>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
