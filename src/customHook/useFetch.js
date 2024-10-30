import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const baseURL = url;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(baseURL);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogs();
  }, [baseURL]);
  return { data, isLoading }; // Runs only once when the component mounts
};

export default useFetch;
