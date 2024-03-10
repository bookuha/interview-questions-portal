import apiClient from "../services/api-client.ts";
import { useQuery } from "react-query";
import { AlgoTask } from "../models/AlgoTask.ts";

const useAlgoTask = (id: string) => {
  const getAlgoTask = () => {
    return apiClient
      .get<AlgoTask>("algo-tasks" + "/" + id)
      .then((res) => res.data);
  };

  return useQuery({
    queryKey: ["algoTasks", id],
    queryFn: getAlgoTask,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: false,
  });
};

export default useAlgoTask;
