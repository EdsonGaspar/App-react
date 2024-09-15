function Tasks(props) {
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {props.tasks.map((task) => (
          <li key={task.id} className="flex text-white gap-2">
            <button
              onClick={() => props.onTaskClick(task.id)}
              className={`flex-1 text-left bg-slate-400 p-2 rounded-md ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.title}
            </button>
            <button className="bg-slate-400 p-2 rounded-md">
              Ver Detalhes
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
