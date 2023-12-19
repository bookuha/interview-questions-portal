import useLikeQuestion from "../../hooks/useLikeQuestion.ts";
import {Badge, HStack, Icon, Text, VStack} from "@chakra-ui/react";
import {AiFillLike, AiOutlineComment, AiOutlineUser} from "react-icons/ai";
import {AlgorithmTask} from "../../models/AlgorithmTask.ts";


interface Props {
	algoTask: AlgorithmTask;
}

export const TaskHeaderInfo = ({algoTask}: Props) => {

	return (
		<VStack alignItems="start" gap={1}>
			<Text fontSize="2xl" fontWeight="semibold">{algoTask.title}</Text>
			<Badge fontSize='sm' colorScheme="teal" variant="solid" marginTop="4px">{algoTask.algoCategoryTitle}</Badge>
		</VStack>
	)
}