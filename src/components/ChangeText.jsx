import { useState } from "react";

export function ChangeText() {
  const [start, setStart] = useState("Hello");
  function stateInicial(e) {
    setStart(e.target.value);
  }
  return (
    <div>
      <input
        value={start}
        onChange={stateInicial}
        type="text"
        className="bg-[#1b1b1b] text-white py-1 px-2 border rounded-md"
        placeholder="Hello"
      />
      <p>Texto Escrito: {start}</p>
      <button
        onClick={() => setStart("Hellol")}
        className="border rounded-sm cursor-pointer p-2 mt-2"
      >
        Reset
      </button>
    </div>
  );
}
