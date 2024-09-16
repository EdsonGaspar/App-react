function AddTasks() {
  return (
    <div className="bg-slate-200 space-y-4 p-6 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o titulo da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />
      <button className="bg-slate-500 text-white px-4 py-2 font-medium rounded-md">
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
