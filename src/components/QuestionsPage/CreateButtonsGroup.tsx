import { Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { useAuthUser } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

export const CreateButtonsGroup = () => {
  const auth = useAuthUser();
  const navigate = useNavigate();
  return (
    <>
      <Button
        leftIcon={<AiOutlinePlus />}
        colorScheme="green"
        variant="ghost"
        onClick={() => navigate("create")}
      >
        Create new question
      </Button>
      {auth()?.isAdmin && (
        <Button
          leftIcon={<AiOutlinePlus />}
          colorScheme="orange"
          variant="ghost"
        >
          Create new category
        </Button>
      )}
    </>
  );
};
