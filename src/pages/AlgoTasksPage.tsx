import { Box, Flex, VStack, Text, SimpleGrid, Spinner } from "@chakra-ui/react";
import { FeaturedCategoriesList } from "../components/QuestionsPage/FeaturedCategoriesList.tsx";
import { QuestionsFilterForm } from "../components/QuestionsPage/Filters/QuestionsFilterForm.tsx";
import { CreateButtonsGroup } from "../components/QuestionsPage/CreateButtonsGroup.tsx";
import { useIsAuthenticated } from "react-auth-kit";
import useAlgoTasks from "../hooks/useAlgoTasks.ts";
import { AlgoTaskCard } from "../components/AlgoTasksPage/AlgoTaskCard.tsx";

export const AlgoTasksPage = () => {
  const { data, error, isLoading } = useAlgoTasks();

  const isAuthenticated = useIsAuthenticated();

  if (error) return <Text>Error!</Text>;

  return (
    <Box paddingY={2}>
      <Flex gap={6}>
        <VStack flex={2}>
          <QuestionsFilterForm />
          {isAuthenticated() && <CreateButtonsGroup />} // Add array of links
          and buttons
        </VStack>
        <VStack alignItems={"start"} flex={5}>
          <FeaturedCategoriesList /> // Add array of featured categories
          <Text fontSize="xs" fontWeight="semibold" color="gray.300">
            {data?.length ?? 0} found
          </Text>
          {isLoading && <Spinner />}
          <SimpleGrid columns={{ sm: 1 }} spacing={3} width="100%">
            {data?.map((at) => <AlgoTaskCard algoTask={at} />)}
          </SimpleGrid>
        </VStack>
      </Flex>
    </Box>
  );
};
