import { SimpleGrid } from "@chakra-ui/react";
import QuestionPreviewCell from "./QuestionPreviewCell";
import questions from "../data/questions";

const QuestionsGrid = () => {
  return (
    <SimpleGrid columns={{ sm: 5, md: 7, lg: 8, xl: 10 }}>
      {questions.map((q) => (
        <QuestionPreviewCell question={q} />
      ))}
    </SimpleGrid>
  );
};

export default QuestionsGrid;
