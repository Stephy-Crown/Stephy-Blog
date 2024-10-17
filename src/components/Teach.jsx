import { useState } from "react";
// import { useState } from "react";

const Home = () => {
  // Click Events in React
  // Eg 1
  // const handleClick = (e) => {
  //   console.log("hello ninjas", e);
  // };
  // // Eg 2:Passing an argument
  // const handleClickAgain = (name, e) => {
  //   console.log("hello " + name, e.target);
  //   setName("Luigi");
  // };

  // using State:when you need a reactive value(name) that React can identify
  // const [name, setName] = useState("Mario");

  return (
    <div className="home">
      <h2>Homepage</h2>
      {/* Function reference */}
      {/* <button onClick={handleClick}>Click me</button> */}
      {/* Wrapping inside The anonymous function acts so as not to trigger the function immediately especially because we are using the () */}
      {/* <button onClick={(e) => handleClickAgain("mario", e)}>
        Click me again
      </button> */}
      {/* <p>{name}</p> */}
    </div>
  );
};

export default Home;
