import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Estudar programação para se tornar um full tack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Inglês",
      description: "Estudar inglês para se tornar fluente",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Ler um livro",
      description: "Para para se divertir",
      isCompleted: false,
    },
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] border">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Lista de Tarefas
        </h1>
        <AddTasks />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
