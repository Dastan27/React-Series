import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  let multipliedValue = value * 5;

  const multiplyByFive = () => {
    setValue(value + 1);
  };

  return (
    <>
      <h1>Main Value: {value} </h1>
      <button onClick={multiplyByFive}>Click to Multiply by 5</button>
      <h2>Multiplied Value: {multipliedValue}</h2>
    </>
  );
}

export default App;
