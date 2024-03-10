import { Input, Select, Text, VStack } from "@chakra-ui/react";
import { SortSelector } from "./SortSelector.tsx";
import { CategorySelector } from "./CategorySelector.tsx";

export const QuestionsFilterForm = () => {
  return (
    <>
      <VStack
        padding={4}
        alignItems={"start"}
        border="1px"
        borderColor={"gray.700"}
        borderRadius="8px"
        width="100%"
      >
        <Input size="sm" placeholder="Search" />
        <SortSelector />
        <CategorySelector />
        <Text fontSize="sm">Progress</Text>
        <Select size="sm" placeholder="Not visited" />
      </VStack>
    </>
  );
};
