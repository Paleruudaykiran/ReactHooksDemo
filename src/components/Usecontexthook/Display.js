import React, { useContext } from "react";
import NumberContext from "./NumberContext";
const Display = () => {
  const player = useContext(NumberContext);
  return (
    <div>
      {player.name} belongs to {player.country} scored {player.centueries}
    </div>
  );
};

export default Display;
