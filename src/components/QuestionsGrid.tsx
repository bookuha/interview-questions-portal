import { Box, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
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
      <SimpleGrid templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
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
