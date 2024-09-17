import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    navigate(`/task?title=${task.title}&description=${task.description}`);
  }
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
          <li key={task.id} className="flex text-white gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`flex-1 text-left bg-slate-400 p-2 rounded-md ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.title}
            </button>
            <button
              onClick={() => onSeeDetailsClick(task)}
              className="bg-slate-400 p-2 rounded-md"
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-slate-400 p-2 rounded-md"
            >
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
