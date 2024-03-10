import { useMutation, useQueryClient } from "react-query";
import apiClient from "../services/api-client.ts";
import { Commentary } from "../models/Commentary.ts";
import { CreateCommentaryRequest } from "../models/CreateCommentaryRequest.ts";

const useCreateCommentary = (questionId: string) => {
  const queryClient = useQueryClient();

  const createCommentary = (commentaryRequest: CreateCommentaryRequest) => {
    return apiClient
      .post<Commentary>(
        "questions" + "/" + questionId + "/" + "commentaries",
        commentaryRequest,
      )
      .then((res) => res.data);
  };

  return useMutation({
    mutationFn: createCommentary,
    // TODO: Do an optimistic update.
    //  RN it works fine since I invalidate question which makes page also rerender the comment section

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["questions"] });
      queryClient.invalidateQueries({ queryKey: ["questions", questionId] });
    },
  });
};

export default useCreateCommentary;
