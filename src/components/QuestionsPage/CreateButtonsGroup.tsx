import {Button} from "@chakra-ui/react";
import {AiOutlinePlus} from "react-icons/ai";

export const CreateButtonsGroup = () => {
	return (
		<>
			<Button leftIcon={<AiOutlinePlus/>} colorScheme="green" variant="ghost">Create new question</Button>
			<Button leftIcon={<AiOutlinePlus/>} colorScheme="orange" variant="ghost">Create new category</Button>
		</>
	)
}