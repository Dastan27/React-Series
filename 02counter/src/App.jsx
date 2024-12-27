import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Dhyan se Dekh</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Increase</button>
      &nbsp; &nbsp;
      <button onClick={removeValue}>Decrease</button>
    </>
  );
}

export default App;
