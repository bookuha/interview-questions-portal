import apiClient from "../services/api-client.ts";
import { useQuery } from "react-query";
import { AlgoTask } from "../models/AlgoTask.ts";

const useAlgoTasks = () => {
  // const questionsQuery = useQuestionsQueryStore((s)=>s.questionsQuery);

  const getAlgoTasks = () => {
    return apiClient.get<AlgoTask[]>("algo-tasks").then((res) => res.data);
  };

  return useQuery({
    queryKey: ["algoTasks"],
    queryFn: getAlgoTasks,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export default useAlgoTasks;
