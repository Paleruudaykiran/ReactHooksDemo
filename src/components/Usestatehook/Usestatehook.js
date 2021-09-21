import React, { useState } from "react";
import "./Usestatehook.css";
function usestatehook() {
  // this approach is used when initialization is costly process
  const initialState = () => {
    return {
      cnt: 0,
      name: "Virat"
    };
  };
  const handleChange = (op) => {
    switch (op) {
      case "+":
        setObj({ ...obj, cnt: obj.cnt + 1 });
        break;
      case "-":
        setObj((prevState) => {
          return { ...prevState, cnt: prevState.cnt - 1 };
        });
        break;
      default:
        setObj({ ...obj, cnt: 0 });
    }
  };
  handleToggle = () => {
    setObj((prevState) => {
      let s = prevState.name;
      s = s == "Virat" ? "Rohit" : "Virat";
      return { ...prevState, name: s };
    });
  };
  const [obj, setObj] = useState(() => initialState());
  return (
    <div className="main">
      <h2 className="header">
        Demonstration of useState hook by using object literal
      </h2>
      <h1>Count : {obj.cnt} </h1>
      <button className="btn" onClick={() => handleChange("+")}>
        increment
      </button>
      <button className="btn" onClick={() => handleChange("-")}>
        decrement
      </button>
      <button className="btn" onClick={() => handleChange("*")}>
        reset
      </button>
      <h1>{obj.name}</h1>
      <button className="btn" onClick={handleToggle}>
        Toggle
      </button>
      <br />
      <a className="link" href="https://reactjs.org/docs/hooks-state.html">
        documentaion
      </a>
    </div>
  );
}
export default usestatehook;
