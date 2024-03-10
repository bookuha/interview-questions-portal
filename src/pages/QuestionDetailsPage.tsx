import {
  Box,
  Button,
  Divider,
  HStack,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { QuestionHeaderInfo } from "../components/QuestionDetailsPage/QuestionHeaderInfo.tsx";
import { useNavigate, useParams } from "react-router-dom";
import CommentsSection from "../components/QuestionDetailsPage/CommentsSection.tsx";
import useQuestion from "../hooks/useQuestion.ts";
import { AlsoCheckSection } from "../components/QuestionDetailsPage/AlsoCheckSection.tsx";
import useDeleteQuestion from "../hooks/useDeleteQuestion.ts";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";

export const QuestionDetailsPage = () => {
  const { questionId } = useParams();

  const { data: question, isLoading, error } = useQuestion(questionId!);
  const { mutateAsync: deleteQuestion } = useDeleteQuestion();
  const toast = useToast();
  const navigate = useNavigate();
  const user = useAuthUser();

  if (isLoading) return <Spinner />;

  if (error || !question) return <Text>Error!</Text>;

  const onDelete = async () => {
    try {
      await deleteQuestion(question.id);
      toast({
        title: "Question deleted",
        status: "success",
      });
      navigate("/questions");
    } catch (e) {
      if (axios.isAxiosError(e)) {
        toast({
          title: "Failed to delete question: " + e.response?.data.detail,
          status: "error",
        });
        console.error(e);
      }
    }
  };

  return (
    <>
      <HStack paddingY="6vh" alignItems="top">
        <Box flex="2">
          <QuestionHeaderInfo question={question} />

          <Box paddingTop="3vh" />
          <Divider />
          <Box paddingTop="3vh" />

          <Text paddingBottom={5} lineHeight={4}>
            {question.description}
          </Text>

          <Box paddingTop="3vh" />
          <Divider />
          <Box paddingTop="3vh" />

          <Text>Discussion ({question.commentariesCount})</Text>
          <CommentsSection questionId={question.id} />

          <Divider />
          <Box paddingTop="3vh" />

          <Text>Similar questions</Text>

          <Box paddingTop="3vh" />
          <Divider />
          <Box paddingTop="3vh" />

          {user()?.id === question.creatorId && (
            <Box paddingY="3vh">
              <Button colorScheme="red" onClick={onDelete}>
                Delete
              </Button>
            </Box>
          )}

          <Text color="gray.600">
            Copyright ©️ 2023 IQP All rights reserved
          </Text>
        </Box>
        <Box flex="1">
          <AlsoCheckSection />
        </Box>
      </HStack>
    </>
  );
};
