import { Badge, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { AiFillLike, AiOutlineComment, AiOutlineUser } from "react-icons/ai";
import useLikeQuestion from "../../hooks/useLikeQuestion.ts";
import { Question } from "../../models/Question.ts";

interface Props {
  question: Question;
}
export const QuestionHeaderInfo = ({ question }: Props) => {
  const { mutate } = useLikeQuestion(question.id);

  return (
    <VStack alignItems="start" gap={1}>
      <Text fontSize="2xl" fontWeight="semibold">
        {question.title}
      </Text>
      <HStack gap={4}>
        <HStack spacing={1}>
          <Icon
            onClick={() => {
              mutate();
            }}
            as={AiFillLike}
            color={question.isLiked ? "green.400" : "gray.400"}
            _hover={{
              transform: "scale(1.60)",
              cursor: "pointer",
            }}
          />
          <Text fontSize="sm" fontWeight="semibold">
            {question.likesCount}
          </Text>
        </HStack>
        <HStack spacing={1}>
          <AiOutlineComment />
          <Text fontSize="sm" fontWeight="semibold">
            {question.commentariesCount}
          </Text>
        </HStack>
        <HStack spacing={1}>
          <AiOutlineUser />
          <Text fontSize="sm" fontWeight="semibold">
            {question.creatorName}
          </Text>
        </HStack>
      </HStack>
      <Badge fontSize="sm" colorScheme="teal" variant="solid" marginTop="4px">
        {question.categoryTitle}
      </Badge>
    </VStack>
  );
};
