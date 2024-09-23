import { useSearchParams } from "react-router-dom";

export default function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 p-6 flex flex-col items-center space-y-6">
      <h1 className="font-bold text-white text-3xl">Detalhes da Tarefa</h1>
      <div className="bg-slate-300 p-6 rounded-md  text-center ">
        <h1 className="text-2xl font-semibold mb-4">{title}</h1>
        <p className="text-slate-700">{description}</p>
      </div>
    </div>
  );
}
