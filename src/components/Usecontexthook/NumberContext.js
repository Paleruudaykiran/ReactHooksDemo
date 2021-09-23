import React from "react";
const initialValue = {
  name: "",
  country: "",
  centueries: 0
};
const NumberContext = React.createContext(initialValue);

export default NumberContext;
