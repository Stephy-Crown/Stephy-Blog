// import { BlogList } from "./BlogList";

// import useFetch from "../customHook/useFetch";

// const Home = () => {
//   const { data: blogs, isLoading } = useFetch(
//     // https://tar-majestic-gravity.glitch.me/blogs
//     "https://api.jsonbin.io/v3/b/672baf7ee41b4d34e44fa846"
//   );

//   return (
//     <div className=" home">
//       {isLoading && <div>Loading...</div>}
//       {blogs && <BlogList blogs={blogs} title="All Blogs" />}
//     </div>
//   );
// };

// export default Home;

import { BlogList } from "./BlogList";
import useFetch from "../customHook/useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("https://api.jsonbin.io/v3/b/672c2efdad19ca34f8c5a72b");

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
