import { BlogList } from "./BlogList";

import useFetch from "../customHook/useFetch";

const Home = () => {
  const { data: blogs, isLoading } = useFetch(
    "https://tar-majestic-gravity.glitch.me/blogs"
  );

  return (
    <div className=" home">
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
