import { useQuery } from "react-query";
import apiClient from "../services/api-client.ts";
import { Question } from "../models/Question.ts";

const useQuestions = () => {
  // const questionsQuery = useQuestionsQueryStore((s)=>s.questionsQuery);

  const getQuestions = () => {
    return apiClient.get<Question[]>("questions").then((res) => res.data);
  };

  return useQuery({
    queryKey: ["questions"],
    queryFn: getQuestions,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export default useQuestions;
