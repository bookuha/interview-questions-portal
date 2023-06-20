import {
  Text,
  Flex,
  HStack,
  IconButton,
  Card,
} from "@chakra-ui/react";
import { AiFillLike, AiOutlineComment } from "react-icons/ai";
import { Question, QuestionComplexity } from "../data/questions";

interface Props {
  question: Question;
}

const QuestionPreviewCell = ({ question }: Props) => {
  const complexityToColorMap: Record<QuestionComplexity, string> = {
    easy: "#228B2244",
    medium: "#ffbb0044",
    hard: "#e4222244",
    extreme: "#e422e444",
    undefined: "#998c9944",
  };

  return (
    <Card
      height="100%"
      padding={2}
      outline="1px solid black"
      borderRadius={4}
      bg={complexityToColorMap[question.complexity]}
    >
      <Flex flexDirection="column" justifyContent="space-between" height="100%">
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
    </Card>
  );
};

export default QuestionPreviewCell;
