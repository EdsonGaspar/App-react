import AddTasks from "./components/AddTasks";
import ComponentText from "./components/ConponentText";
import Tasks from "./components/Tasks";
import "./index.css";

function App() {
  return (
    <div>
      <h1 className="text-red-500 bg-black">Lista de Tarefas</h1>
      <AddTasks />
      <Tasks />
      <ComponentText />
    </div>
  );
}

export default App;
