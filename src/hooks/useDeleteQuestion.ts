import { useMutation, useQueryClient } from "react-query";
import apiClient from "../services/api-client.ts";
import { Question } from "../models/Question.ts";

const useDeleteQuestion = () => {
  const queryClient = useQueryClient();

  const deleteQuestion = (questionId: string) => {
    return apiClient
      .delete<Question>("questions" + "/" + questionId)
      .then((res) => res.data);
  };

  return useMutation({
    mutationFn: deleteQuestion,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["questions"] });
    },
  });
};

export default useDeleteQuestion;
