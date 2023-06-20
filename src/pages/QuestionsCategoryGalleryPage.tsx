import { Box, Heading } from "@chakra-ui/react";
import questions, { Question } from "../data/questions";
import QuestionsGrid from "../components/QuestionsGrid";

interface Props {
  categoryId: number;
  categoryTitle: string;
  questions: Question[];
}

const QuestionsCategoryGalleryPage = ({ categoryTitle }: Props) => {
  return (
    <Box>
      <Heading>{categoryTitle}</Heading>
      <QuestionsGrid title={categoryTitle} questions={questions} />
    </Box>
  );
};

export default QuestionsCategoryGalleryPage;
