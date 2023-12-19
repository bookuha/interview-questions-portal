import {useMutation, useQueryClient} from "react-query";
import apiClient from "../services/api-client.ts";
import {Question} from "../models/Question.ts";

const useLikeQuestion = (id: string) => {
    const queryClient = useQueryClient()

    const likeQuestion = () => {
        return apiClient
            .put<Question>('questions' + '/' + id + '/' + 'likes')
            .then((res) => res.data)
    }

    return useMutation({
        mutationFn: likeQuestion,
        onSuccess: data => {
            queryClient.setQueryData(['questions', id], data)
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['questions'] })
        },
    })
}

export default useLikeQuestion;