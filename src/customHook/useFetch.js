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

// import axios from "axios";
// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get(url, {
//           headers: {
//             "X-Master-Key": process.env.REACT_APP_JSONSTORE_API_KEY, // Make sure this is in your .env file
//           },
//         });
//         setData(response.data

//         ); // Adjust to your response structure
//         setIsLoading(false);
//       } catch (error) {
//         setError("Failed to fetch data.");
//         setIsLoading(false);
//         console.error(error.message); // Console log the actual error for debugging
//       }
//     };

//     fetchBlogs();
//   }, [url]);

//   return { data, isLoading, error };
// };

// export default useFetch;

// // import axios from "axios";
// // import { useState, useEffect } from "react";

// // const useFetch = (url) => {
// //   const [data, setData] = useState(null);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const apiKey = process.env.REACT_APP_JSONSTORE_API_KEY;

// //   useEffect(() => {
// //     // Check if API key is loading from the environment variables
// //     console.log("API Key from environment:", apiKey);

// //     if (!apiKey) {
// //       console.error("API key is missing. Ensure REACT_APP_JSONBIN_API_KEY is set in .env file.");
// //       return;
// //     }

// //     const fetchBlogs = async () => {
// //       try {
// //         const response = await axios.get(url, {
// //           headers: {
// //             "X-Master-Key": apiKey,
// //           },
// //         });

// //         console.log("Full response:", response);  // Log the full response for debugging
// //         setData(response.data.record);
// //         setIsLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };

// //     fetchBlogs();
// //   }, [url, apiKey]);

// //   return { data, isLoading };
// // };

// // export default useFetch;
