import { useState } from "react";

export function AddAge() {
  const [age, setAge] = useState(1);

  function changeAgePlusOne() {
    setAge((a) => a + 1);
  }
  function changeAgePlusThree() {
    setAge((a) => a + 3);
  }

  return (
    <div>
      <h1>Sua idade{age}</h1>
      <button onClick={changeAgePlusOne} className="">
        +1
      </button>
      <button onClick={changeAgePlusThree}>+3</button>
    </div>
  );
}
