import { Text, HStack, Link, useToast } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { useAuthUser, useIsAuthenticated, useSignOut } from "react-auth-kit";
import { BiLogOut } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const user = useAuthUser();
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();
  const toast = useToast();

  return (
    <HStack
      paddingX="10vw"
      justifyContent="end"
      alignItems="center"
      height="100%"
    >
      <Link paddingRight="1vw">
        <HStack>
          <FaUser />
          <Text fontSize="lg">
            {user() ? (
              user()?.nickname
            ) : (
              <RouterLink to="/login">Login</RouterLink>
            )}
          </Text>
        </HStack>
      </Link>
      {isAuthenticated() && (
        <Link
          onClick={() => {
            signOut();
            toast({
              title: "Logged out",
              description: "You've successfully logged out.",
              status: "success",
              duration: 5000,
              isClosable: true,
              position: "top",
            });
          }}
        >
          <BiLogOut />
        </Link>
      )}
    </HStack>
  );
};

export default Navbar;
