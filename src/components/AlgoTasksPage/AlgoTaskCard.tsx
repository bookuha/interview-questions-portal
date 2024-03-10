import { useNavigate } from "react-router-dom";
import { Badge, Box, Card, HStack, Icon, Text } from "@chakra-ui/react";
import { AlgoTask } from "../../models/AlgoTask.ts";
import { MdDone } from "react-icons/md";
import moment from "moment";
import { DiFsharp, DiJava } from "react-icons/di";
import { SiCsharp } from "react-icons/si";
import { AiOutlineQuestion } from "react-icons/ai";

interface Props {
  algoTask: AlgoTask;
}

const getLangIcon = (slug: string) => {
  switch (slug) {
    case "java":
      return DiJava;
    case "csharp":
      return SiCsharp;
    case "fsharp":
      return DiFsharp;
    default:
      return AiOutlineQuestion;
  }
};

export const AlgoTaskCard = ({ algoTask }: Props) => {
  const navigate = useNavigate();

  return (
    <Card
      minHeight="75px"
      bgColor="#222222"
      _hover={{
        bgColor: "#292929",
        transform: "scale(1.03)",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/algorithms/${algoTask.id}`)}
    >
      <Box paddingX="16px" paddingY="10px">
        <HStack paddingBottom="4px">
          {algoTask.isPassed && (
            <Icon as={MdDone} boxSize={6} color="green.400" />
          )}
          <Text fontWeight="semibold" fontSize="md">
            {algoTask.title}
          </Text>
          <Text color="darkgray">{moment(algoTask.created).calendar()}</Text>
        </HStack>
        <HStack>
          <Badge fontSize="sm" colorScheme="teal" variant="solid">
            {algoTask.algoCategoryTitle}
          </Badge>
          <HStack>
            {algoTask.supportedLanguages.map((lang) => (
              <Icon boxSize={8} as={getLangIcon(lang.slug)} />
            ))}
          </HStack>
        </HStack>
      </Box>
    </Card>
  );
};
