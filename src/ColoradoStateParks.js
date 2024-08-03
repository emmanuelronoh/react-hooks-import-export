import React from "react";
import howManyParks from "./parks/howManyParks";

function ColoradoStateParks() {
  const parksCount = howManyParks(); // Call the function and store the result

  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <p>{parksCount}</p> {/* Display the result of howManyParks */}
    </div>
  );
}

export default ColoradoStateParks;
