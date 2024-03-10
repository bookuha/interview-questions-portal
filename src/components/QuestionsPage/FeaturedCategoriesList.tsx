import { Badge, HStack, Text } from "@chakra-ui/react";

export const FeaturedCategoriesList = () => {
  return (
    <>
      <Text fontSize="xs" fontWeight="semibold">
        FEATURED CATEGORIES
      </Text>
      <HStack gap="0.8vw">
        <Badge fontSize="sm" colorScheme="teal" variant="solid">
          C#
        </Badge>
        <Badge fontSize="sm" colorScheme="purple" variant="solid">
          .NET
        </Badge>
        <Badge fontSize="sm" colorScheme="yellow" variant="solid">
          JS
        </Badge>
      </HStack>
    </>
  );
};
