import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Quando usamos o useEffect e dentro do array e vai diz que a função vai ser chamada a primeira vez no inicio do programa
  useEffect(() => {
    // Chamar API
    async function fetchTasks() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        { method: "GET" }
      );

      // Pegar os dados que ela retorna
      const data = await response.json();

      // Salavr os dados na useStat
      setTasks(data);

      console.log(data);
    }
    fetchTasks();
  }, []);

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
      id: v4,
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
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
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
