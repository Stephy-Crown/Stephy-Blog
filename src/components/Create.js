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

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsLoading(true);

    // Use the environment variable for the URL
    const jsonstoreUrl = process.env.REACT_APP_JSONSTORE_URL;

    // Add X-Master-Key in the headers
    axios
      .post(jsonstoreUrl, blog, {
        headers: {
          "X-Master-Key": process.env.REACT_APP_JSONSTORE_API_KEY, // Ensure this is set in .env file
        },
      })
      .then((response) => {
        console.log("Blog added:", response.data);
      })
      .catch((error) => {
        console.error("There was an error adding the blog!", error);
      })
      .finally(() => {
        // Clear the form after submission
        setTitle("");
        setBody("");
        setAuthor("steph");
        setIsLoading(false);
      });
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
