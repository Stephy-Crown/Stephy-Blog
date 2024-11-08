// import axios from "axios";
// import { useState } from "react";

// const Create = () => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [author, setAuthor] = useState("steph");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const blog = { title, body, author };

//     setIsLoading(true);
//     axios
//       .post("https://tar-majestic-gravity.glitch.me/blogs", blog)
//       .then((response) => {
//         console.log("Blog added:", response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error adding the blog!", error);
//       });
//     // Clear the inputs after a successful post
//     setTitle("");
//     setBody("");
//     setAuthor("steph");
//     setIsLoading(false);
//   };

//   return (
//     <div className="create">
//       <h2>Add a New Blog</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Blog title:</label>
//         <input
//           type="text"
//           required
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <label>Blog body:</label>
//         <textarea
//           required
//           value={body}
//           onChange={(e) => setBody(e.target.value)}
//         ></textarea>
//         <label>Blog author:</label>
//         <select value={author} onChange={(e) => setAuthor(e.target.value)}>
//           <option value="steph">steph</option>
//           <option value="crown">crown</option>
//         </select>

//         {!isLoading && <button>Add Blog</button>}
//         {isLoading && <button disabled>Adding Blog...</button>}

//         {/* <p>{title}</p>
//         <p>{body}</p> */}
//       </form>
//     </div>
//   );
// };

// export default Create;

import axios from "axios";
import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("steph");
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const blog = { title, body, author };

    setIsLoading(true); // Set loading to true to disable button and show "Adding Blog..."

    try {
      // Send POST request
      const response = await axios.post(
        "https://tar-majestic-gravity.glitch.me/blogs",
        blog
      );
      console.log("Blog added:", response.data);

      // Clear form fields after successful submission
      setTitle("");
      setBody("");
      setAuthor("steph");
    } catch (error) {
      console.error("There was an error adding the blog!", error);
    } finally {
      setIsLoading(false); // Reset the loading state after success or error
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

        {/* {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding Blog...</button>} */}
        {/* Show the button with dynamic text depending on loading state */}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Adding Blog..." : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default Create;
