import React, { useState, useEffect } from "react";
import "./Useeffecthook.css";
function Useeffecthook() {
  const [count, setCount] = useState(0);
  const [point, setPoint] = useState({ x: 0, y: 0 });
  // this is similar to componentDidMount , componentWillUnMount, componentDidUpdate methods combined
  // we can also pass the second argumnet as an array of values where the function will be rendered only the values in that array differs
  useEffect(() => {
    document.title = `you clicked ${count} times`;
    window.addEventListener("mousemove", position);
    console.log("called useEffect");

    //cleanup action we have to return a function
    return () => {
      window.removeEventListener("mousemove", position);
    };
  });
  function position(e) {
    setPoint((prevPoint) => {
      return {
        x: e.clientX,
        y: e.clientY
      };
    });
  }
  return (
    <div className="main">
      <h1 className="header">You clicked {count} times</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
      <br />
      <h1>
        {" "}
        x : <span>{point.x}</span> y : <span>{point.y}</span>
      </h1>
      <a className="link" href="https://reactjs.org/docs/hooks-effect.html">
        documentation
      </a>
    </div>
  );
}
export default Useeffecthook;
