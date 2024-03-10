import apiClient from "../services/api-client.ts";
import { useQuery } from "react-query";
import { Commentary } from "../models/Commentary.ts";

const useCommentaries = (questionId: string) => {
  const getCommentaries = () => {
    return apiClient
      .get<Commentary[]>("questions" + "/" + questionId + "/" + "commentaries")
      .then((res) => res.data);
  };

  return useQuery({
    queryKey: ["questions", questionId, "commentaries"],
    queryFn: getCommentaries,
    staleTime: 1000 * 60, // 1 minute
  });
};

export default useCommentaries;
