import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useFetch from "../customHook/useFetch";
import { useState } from "react";

const BlogDetails = ({ onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("https://yellow-tabby-puppy.glitch.me/blogs/" + id);

  const handleDelete = async () => {
    try {
      setIsDeleting(true); // Set the deleting state to true
      await axios.delete("https://yellow-tabby-puppy.glitch.me/blogs/" + id);
      onDelete(id); // Notify the parent component to remove the blog from state
      navigate("/"); // Navigate back to home page
    } catch (error) {
      console.error("Error deleting the blog:", error);
    }
  };
  // State to track if the blog is being deleted
  const [isDeleting, setIsDeleting] = useState(false);
  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error loading the blog: {error.message}</div>}
      {blog ? (
        <article>
          <h2>{blog.title}</h2>
          <p>
            Written by <span className="blog-author">{blog.author}</span>
          </p>
          <div>{blog.body}</div>
          {!isDeleting ? (
            <button onClick={handleDelete}>Delete Blog</button> // Show Delete Blog button if not deleting
          ) : (
            <button disabled>Deleting Blog...</button> // Show "Deleting" text if deleting
          )}
        </article>
      ) : (
        !isLoading && <div>Blog not found or has been deleted.</div>
      )}
    </div>
  );
};

export default BlogDetails;
