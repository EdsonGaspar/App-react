import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

export default function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 p-6 flex flex-col items-center space-y-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-0 left-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="bg-slate-300 p-6 rounded-md  text-center ">
          <h1 className="text-slate-700 text-2xl font-semibold mb-4">
            {title}
          </h1>
          <p className="text-slate-700">{description}</p>
        </div>
      </div>
    </div>
  );
}
