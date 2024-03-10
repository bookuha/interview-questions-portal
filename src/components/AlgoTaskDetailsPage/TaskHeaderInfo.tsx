import { Badge, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { AlgoTask } from "../../models/AlgoTask.ts";
import { MdDone } from "react-icons/md";

interface Props {
  algoTask: AlgoTask;
}

export const TaskHeaderInfo = ({ algoTask }: Props) => {
  return (
    <VStack alignItems="start" gap={1}>
      <HStack gap={2}>
        <Text fontSize="2xl" fontWeight="semibold">
          {algoTask.title}
        </Text>
        {algoTask.isPassed && (
          <Icon as={MdDone} boxSize={6} color="green.400" />
        )}
      </HStack>
      <Badge fontSize="sm" colorScheme="teal" variant="solid" marginTop="4px">
        {algoTask.algoCategoryTitle}
      </Badge>
    </VStack>
  );
};
