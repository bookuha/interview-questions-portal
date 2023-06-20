import { Text, HStack, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack paddingY="1vh" paddingX="2vw" justifyContent="space-between">
      <HStack>
        <Text fontSize="2xl">Interview questions</Text>
        <Text textColor="gray.500">by supachat</Text>
      </HStack>
      <Link paddingRight="1vw">Telegram</Link>
    </HStack>
  );
};

export default Navbar;
