import {
  Box,
  GridItem,
  HTMLChakraProps,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { Question } from "../../models/Question.ts";
import { QuestionCard } from "../QuestionsPage/QuestionCard.tsx";

interface Props extends HTMLChakraProps<"div"> {
  title: string;
  questions: Question[];
}

const QuestionsGrid = ({ title, questions, ...chakraProps }: Props) => {
  return (
    <Box {...chakraProps}>
      <Heading size="lg" padding={4}>
        {title}
      </Heading>
      <SimpleGrid
        templateColumns="repeat(auto-fill, minmax(260px, 1fr))"
        gap={3}
      >
        {questions.map((q) => (
          <GridItem>
            <QuestionCard question={q} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default QuestionsGrid;
