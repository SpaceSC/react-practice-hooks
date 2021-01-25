import React, { useState } from "react";
import "./App.css";

function Button() {
  const [valtozo, setValtozo] = useState(0);

  return (
    <div className="App">
      <h1>{valtozo}</h1>
      <button onClick={() => setValtozo(valtozo + 1)}>Mittomén</button>
    </div>
  );
}
export default Button;