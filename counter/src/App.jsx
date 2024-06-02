import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>value : {count}</h2>
      <button onClick={add}>add</button>
      <br />
      <button onClick={() => setCount(count - 1)}>minus</button>
    </>
  );
}

export default App;
