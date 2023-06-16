import { Text, Flex, HStack, IconButton, Box } from "@chakra-ui/react";
import { AiFillLike, AiOutlineComment } from "react-icons/ai";

interface Props {
  id: number;
  title: string;
  likes: number;
  answers: number;
  complexity: QuestionComplexity;
}

type QuestionComplexity = "easy" | "medium" | "hard" | "extreme" | "undefined";

const QuestionPreviewCell = ({
  id,
  title,
  likes,
  answers,
  complexity,
}: Props) => {
  const complexityMap: Record<QuestionComplexity, string> = {
    easy: "green",
    medium: "orange",
    hard: "red",
    extreme: "purple",
    undefined: "gray",
  };

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      bg={complexityMap[complexity]}
      aspectRatio="1/1"
      height="100%"
      padding={1}
    >
      <Text>{title}</Text>
      <HStack justifyContent="center">
        <HStack>
          <IconButton icon={<AiFillLike />} aria-label={"Like button"} />
          <Text>{likes}</Text>
        </HStack>
        <HStack>
          <IconButton
            icon={<AiOutlineComment />}
            aria-label="Comments button"
          />
          <Text>{answers}</Text>
        </HStack>
      </HStack>
    </Flex>
  );
};

export default QuestionPreviewCell;
