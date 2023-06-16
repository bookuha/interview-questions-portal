import { SimpleGrid } from "@chakra-ui/react";
import QuestionPreviewCell from "./QuestionPreviewCell";

const QuestionsGrid = () => {
  return (
    <SimpleGrid columns={{ sm: 5, md: 7, lg: 10, xl: 13 }}>
      <QuestionPreviewCell
        id={0}
        title={"Аскетов негодяй?"}
        likes={4}
        answers={3}
        complexity={"easy"}
      />
      <QuestionPreviewCell
        id={1}
        title={"Что такое переменная?"}
        likes={3}
        answers={31}
        complexity={"easy"}
      />
      <QuestionPreviewCell
        id={2}
        title={"Поколения GC"}
        likes={4}
        answers={3}
        complexity={"medium"}
      />
    </SimpleGrid>
  );
};

export default QuestionsGrid;
