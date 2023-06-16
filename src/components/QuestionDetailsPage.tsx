import { Question } from "../data/questions";
import {
  Badge,
  Box,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiFillLike, AiOutlineComment } from "react-icons/ai";

interface Props {
  question: Question;
}

const QuestionDetailsPage = ({ question }: Props) => {
  return (
    <SimpleGrid templateColumns="3fr 1fr" padding="24px">
      <Box bg="gray.700">   
        <Heading size="lg">{`${question.id}. ${question.title}`}</Heading>
        <HStack paddingY="10px" gap={4}>
          <Badge variant="solid" colorScheme="green">
            {question.complexity}
          </Badge>
          <HStack>
            <Icon as={AiFillLike} />
            <Text>{question.likes}</Text>
          </HStack>
        </HStack>
        <Text paddingY="10px">Description</Text>
        <Heading size="lg">Discussion</Heading>
      </Box>
      <Stack alignItems="center">
        <Text>Sources</Text>
      </Stack>
    </SimpleGrid>
  );
};

export default QuestionDetailsPage;
