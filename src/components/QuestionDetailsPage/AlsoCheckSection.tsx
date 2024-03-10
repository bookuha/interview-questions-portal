import { VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const AlsoCheckSection = () => {
  return (
    <VStack>
      <Text>Also check:</Text>
      <Link to="">
        <Text color="teal.300">C# questions</Text>
      </Link>
      <Link to="">
        <Text color="teal.300">.NET questions</Text>
      </Link>
      <Link to="">
        <Text color="teal.300">Andrii</Text>
      </Link>
    </VStack>
  );
};
