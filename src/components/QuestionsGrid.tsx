import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import QuestionPreviewCell from "./QuestionPreviewCell";
import { Question } from "../data/questions";

interface Props {
  title: string;
  questions: Question[];
}

const QuestionsGrid = ({ title, questions }: Props) => {
  return (
    <Box paddingY="8px">
      <Heading padding={2}>{title}</Heading>
      <SimpleGrid columns={{ sm: 5, md: 7, lg: 8, xl: 10 }}>
        {questions.map((q) => (
          <QuestionPreviewCell question={q} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default QuestionsGrid;
