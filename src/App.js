import "./styles.css";
import React, { useState } from "react";
export default function App() {
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
      s = s == "virat" ? "rohit" : "virat";
      return { ...prevState, name: s };
    });
  };
  const [obj, setObj] = useState(() => initialState());
  return (
    <div className="App">
      <h2>Demonstration of useState hook by using object literal</h2>
      <h1>Count : {obj.cnt} </h1>
      <button onClick={() => handleChange("+")}>increment</button>
      <button onClick={() => handleChange("-")}>decrement</button>
      <button onClick={() => handleChange("*")}>reset</button>
      <h1>{obj.name}</h1>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}
