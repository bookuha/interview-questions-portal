import apiClient from "../services/api-client.ts";
import {Question} from "../models/Question.ts";
import {useQuery} from "react-query";

const useQuestion = (id: string) => {
    // const questionsQuery = useQuestionsQueryStore((s)=>s.questionsQuery);

    const getQuestion = () => {
        return apiClient
            .get<Question>('questions' + '/' + id)
            .then((res) => res.data)
    }

    return useQuery({
        queryKey: ['questions', id],
        queryFn: getQuestion,
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: false
    });
}

export default useQuestion;