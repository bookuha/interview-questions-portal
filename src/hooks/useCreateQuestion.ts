import {useMutation, useQueryClient} from "react-query";
import apiClient from "../services/api-client.ts";
import {CreateQuestionRequest} from "../models/CreateQuestionRequest.ts";
import {Question} from "../models/Question.ts";

const useCreateQuestion = () => {
    const queryClient = useQueryClient()

    const createQuestion = (questionRequest: CreateQuestionRequest) => {
        return apiClient
            .post<Question>('questions', questionRequest)
            .then((res) => res.data)
    }

    return useMutation({
        mutationFn: createQuestion,
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['questions'] })
        },
    })
}

export default useCreateQuestion;