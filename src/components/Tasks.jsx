function Tasks(props) {
  return (
    <div>
      <ul className="text-white space-y-4">
        {props.tasks.map((task) => (
          <li key={task.id} className="bg-slate-400 p-2 rounded-md">
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
