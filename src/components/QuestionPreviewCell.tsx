import { Text, Flex, HStack, IconButton, Box } from "@chakra-ui/react";
import { AiFillLike, AiOutlineComment } from "react-icons/ai";
import { Question, QuestionComplexity } from "../data/questions";

interface Props {
  question: Question;
}

const QuestionPreviewCell = ({ question }: Props) => {
  const complexityMap: Record<QuestionComplexity, string> = {
    easy: "#228B22",
    medium: "orange",
    hard: "red",
    extreme: "purple",
    undefined: "gray",
  };

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      bg={complexityMap[question.complexity]}
      height="100%"
      padding={1}
      outline="1px solid black"
    >
      <Text>{question.title}</Text>
      <HStack justifyContent="center">
        <HStack>
          <IconButton icon={<AiFillLike />} aria-label={"Like button"} />
          <Text>{question.likes}</Text>
        </HStack>
        <HStack>
          <IconButton
            icon={<AiOutlineComment />}
            aria-label="Comments button"
          />
          <Text>{question.answers}</Text>
        </HStack>
      </HStack>
    </Flex>
  );
};

export default QuestionPreviewCell;
