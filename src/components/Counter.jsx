import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const counter = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={counter} className="border rounded-lg p-2">
        Contar
      </button>
    </div>
  );
}
