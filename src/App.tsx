import { useEffect, useState } from "react";
import "./App.css";

let renderCount = 0;
const sequence = [0, 1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9];

function App() {
  const [number, setNumber] = useState(sequence[0]);

  useEffect(() => {
    setNumber(sequence[++renderCount]);
  }, [renderCount]);

  return (
    <div>
      <div>{renderCount}</div>
      <div>{sequence[renderCount]}</div>
      <div>{number}</div>
    </div>
  );
}

export default App;
