import { Box, Divider, Text } from "@chakra-ui/react";
import { AlgoTask } from "../../models/AlgoTask.ts";

interface Props {
  algoTask: AlgoTask;
}

export const Description = ({ algoTask }: Props) => {
  return (
    <>
      <Text paddingBottom={5} lineHeight={4}>
        {algoTask.description}
      </Text>

      <Box paddingTop="3vh" />

      <Divider />
      <Box paddingTop="3vh" />

      <Text>Similar questions</Text>
      <Box paddingTop="3vh" />
    </>
  );
};
