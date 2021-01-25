import React from "react";
import Button from "./button.jsx";
import Input from "./input.jsx";
import "./App.css";

function Appllle() {
  return (
    <div className="App">
      <Input />
      <Button />
    </div>
  );
}
export { Appllle };

// element meghívása: {element}
// komponnens meghívása: <Komponens />
// valamit csinálsz az egyik elemmel, valami történni fog másik elemmel
// useState: a komponens egy allapota,
// aminek a frisstes hatasara ujra renderelei a komponenst

//useEffect vmi történik a komponensemben, azt akarom, hogy mellékhatása legyen

