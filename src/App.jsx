import { AddAge } from "./components/AddAge";
import AddTasks from "./components/AddTasks";
import { BoxSelection } from "./components/BoxSelection";
import { ChangeText } from "./components/ChangeText";
import { Counter } from "./components/Counter";
import Tasks from "./components/Tasks";
import "./index.css";

function App() {
  return (
    <div>
      <h1 className="text-red-500 bg-black">Lista de Tarefas</h1>
      <AddTasks />
      <Tasks />
      <Counter />
      <ChangeText />
      <BoxSelection />
      <AddAge />
    </div>
  );
}

export default App;
