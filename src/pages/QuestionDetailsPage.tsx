import { Question } from "../data/questions";
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
import CommentsSection from "../components/CommentsSection";
import LinksList from "../components/LinksList";

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
      <Text paddingY="10px" fontSize="xl">
        Description
      </Text>
      <Heading size="lg">See this</Heading>
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
      <Heading size="lg">Discussion</Heading>
      <CommentsSection paddingY="1vh" paddingLeft="1vw" />
    </Box>
  );
};

export default QuestionDetailsPage;
