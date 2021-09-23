import React, { useRef } from "react";
import "./Userefhook.css";
/*
When to Use Refs
There are a few good use cases for refs:

1.Managing focus, text selection, or media playback.
2.Triggering imperative animations.
3.Integrating with third-party DOM libraries.

*/
const Userefhook = () => {
  const myRef = useRef(null);
  console.log(myRef);
  function handleClick() {
    console.log(myRef.current);
    myRef.current.focus();
  }
  return (
    <div className="main">
      <h1 className="header">Demonstration of useRef hook in react </h1>
      <input type="text" ref={myRef}></input>
      <br />
      <button
        className="btn"
        type="text"
        value="Focus the input"
        onClick={handleClick}
      >
        Focus the input
      </button>
      <a href="https://reactjs.org/docs/refs-and-the-dom.html" className="link">
        Documentation
      </a>
    </div>
  );
};
export default Userefhook;
