import {
  Box,
  GridItem,
  HTMLChakraProps,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import QuestionPreviewCell from "./QuestionPreviewCell.tsx";
import { Question } from "../../data/questions.ts";

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
        templateColumns="repeat(auto-fill, minmax(195px, 1fr))"
        gap={3}
      >
        {questions.map((q) => (
          <GridItem aspectRatio={1}>
            <QuestionPreviewCell question={q} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default QuestionsGrid;
