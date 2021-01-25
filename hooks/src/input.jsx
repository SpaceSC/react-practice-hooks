import React, { useState } from "react";
import "./App.css";

function Input() {
  const [name, setName] = useState("world");

  return (
    <div className="App">
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <h2>Hello, {name}!</h2>
    </div>
  );
}
export default Input;