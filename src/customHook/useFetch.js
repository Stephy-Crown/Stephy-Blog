// import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseURL = url;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(baseURL);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError("Failed to fetch data.");
        setIsLoading(false);
        console.error(error.message); // Console log the actual error for debugging
      }
    };
    fetchBlogs();
  }, [baseURL]);
  return { data, isLoading, error }; // Runs only once when the component mounts
};

export default useFetch;
