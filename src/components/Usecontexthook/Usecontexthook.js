import React, { useContext } from "react";
import Display from "./Display";
import NumberContext from "./NumberContext";
const Usecontexthook = () => {
  return (
    <div className="main">
      <h1 className="header">demonstration of useContext hook in react</h1>
      <NumberContext.Provider
        value={{
          name: "Virat",
          country: "India",
          centueries: 183
        }}
      >
        <Display></Display>
      </NumberContext.Provider>
      <a
        href="https://www.tutorialspoint.com/reactjs-usecontext-hook"
        className="link"
      >
        documentation
      </a>
    </div>
  );
};
export default Usecontexthook;
