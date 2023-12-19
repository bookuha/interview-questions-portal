import { Question} from "../models/Question.ts";
import {
  Badge,
  Box,
  HStack,
  Heading,
  Icon,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { AiFillLike } from "react-icons/ai";
import CommentsSection from "../components/QuestionDetailsPage/CommentsSection.tsx";
import LinksList from "../components/Legacy/LinksList.tsx";

interface Props {
  question: Question;
}

const QuestionDetailsPage = ({ question }: Props) => {
  return (
    <Box>
      <Tabs variant="unstyled">
        <TabList>
          <Tab>Info</Tab>
          <Tab>Answers</Tab>
        </TabList>
      </Tabs>
      <Heading size="lg">{`${question.id}. ${question.title}`}</Heading>
      <HStack paddingY="10px" gap={4}>
        <Badge fontSize="lg" variant="solid" colorScheme="green">
          {question.complexity}
        </Badge>
        <HStack>
          <Icon boxSize="7" as={AiFillLike} />
          <Text>{question.likes}</Text>
        </HStack>
      </HStack>
      <Text paddingY="15px" fontSize="md">
          Назвіть основні принципи ООП, які ви знаєте. Поясніть детально кожен з них.
          <br/> Чи часто вам доводиться порушувати ці принципи? Чому? <br/>
          Які є альтернативи? Опишіть їх.
          <br/> Які є недоліки ООП? Як їх уникнути?
          <br/> Яка різниця між ООП і ФП? Які є переваги і недоліки кожного з них?
      </Text>
      <Heading size="md" color="gray.200">Discussion</Heading>
      <CommentsSection paddingY="1vh" paddingLeft="1vw" />
        <Heading size="md">See this</Heading>
        <LinksList
            links={[
                { label: "Doc", url: "123" },
                { label: "Metanit", url: "" },
            ]}
            paddingX="2vw"
            flexDirection="row"
            maxWidth="45vw"
            linkChakraProps={{
                fontSize: "lg",
                color: "teal.400",
                marginRight: "1vw",
            }}
        />
    </Box>
  );
};

export default QuestionDetailsPage;
