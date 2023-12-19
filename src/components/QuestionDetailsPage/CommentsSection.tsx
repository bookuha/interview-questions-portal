import {Button, HStack, Input, Spinner, Stack, Text, useToast, VStack} from "@chakra-ui/react";
import Commentary from "./Commentary.tsx";
import {Commentary as CommentaryEntity} from "../../models/Commentary.ts";
import useCommentaries from "../../hooks/useCommentaries.ts";
import useCreateCommentary from "../../hooks/useCreateCommentary.ts";
import {useState} from "react";

interface Props{
    questionId: string;
}

const CommentsSection = ({questionId} : Props) => {

    const {
        data: commentaries,
        isLoading,
        error
    } = useCommentaries(questionId);

    const {mutate} = useCreateCommentary(questionId);

    const [newComment, setNewComment] = useState('');

    const toast = useToast();

    const handleSendButtonClick = async () => {
        try {
            if (newComment.trim() !== '') {
                // Call the mutate function to create a new commentary
                await mutate({content: newComment});

                // Clear the input field after submitting the comment
                setNewComment('');
            }
        } catch (err) {
            toast({
                title: 'Error',
                description: "An error occurred while creating the commentary.",
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: "top"
            })
        }
    };


    if (isLoading) return <Spinner />;

    if (error || !commentaries) return <Text>Error!</Text>

    return(
        <>
            <VStack>
            <Input
                variant="flushed"
                placeholder="Type your comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
            />
                <HStack width="100%" justifyContent="right">
                    <Button onClick={handleSendButtonClick}>Send</Button>
                </HStack>
            </VStack>
            <Stack gap={1}>
               {commentaries.map((commentary: CommentaryEntity) => (
                   <Commentary commentary={commentary}/>
               ))}
             </Stack>
        </>

);
}
export default CommentsSection;
