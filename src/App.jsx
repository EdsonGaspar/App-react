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

  function onTaskClick(taskiD) {
    const newTasks = tasks.map((task) => {
      // Preciso actualizar esta tarefa
      if (task.id === taskiD) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      // Não preciso actualizar esta tarefa
      return task;
    });
    setTasks(newTasks);
  }
  function onDeleteTaskClick(taskiD) {
    const newTasks = tasks.filter((task) => task.id !== taskiD);
    setTasks(newTasks);
  }
  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };
    //Esta linha diz que vai receber no primeiro parametro tudo que estava no text, e no segundo parametro o elemento novo a ser adicionado
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]  space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Lista de Tarefas
        </h1>
        <AddTasks />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
