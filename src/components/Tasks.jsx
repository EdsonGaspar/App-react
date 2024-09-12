import { useState } from "react";

function Tasks() {
  const [newNome, setNewNome] = useState("Gaspar");
  // let nome = "Primeiro Nome";
  // const changeName = () => {
  //   nome = "Edson";
  //   console.log(nome);
  // };
  const change = () => setNewNome("João Gaspar");
  return (
    <div>
      <h1 className="bg-black text-white">
        Mostrar Lista de tarefas {newNome}
      </h1>
      <button onClick={change} className="border rounded-md p-2 mt-3">
        Mudar Nome
      </button>
    </div>
  );
}

export default Tasks;
