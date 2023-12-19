import {Badge, Card, HStack, Text, Box} from "@chakra-ui/react";
import {AiFillLike, AiOutlineComment, AiOutlineUser} from "react-icons/ai";
import {Question} from "../../models/Question.ts";
import {useNavigate} from "react-router-dom";


interface Props{
	question: Question;
}
export const QuestionCard = ({question}: Props) => {
	const navigate = useNavigate();


	return (
		<Card w="390px" minHeight="110px" bgColor='#222222'
		_hover={{
			bgColor: '#292929',
			transform: "scale(1.03)",
			cursor: 'pointer'
		}}
		onClick={() => navigate(`/questions/${question.id}`)}
		>

			<Box paddingX="16px" paddingY="10px">
			<Text fontWeight="semibold" fontSize="md">{question.title}</Text>
			<HStack paddingTop={1}>
				<HStack spacing={1}>
					<AiFillLike/>
					<Text fontSize="sm" fontWeight="semibold">{question.likesCount}</Text>
				</HStack>
				<HStack spacing={1}>
					<AiOutlineComment/>
					<Text fontSize="sm" fontWeight="semibold">{question.commentariesCount}</Text>
				</HStack>
				<HStack spacing={1}>
					<AiOutlineUser/>
					<Text fontSize="sm" fontWeight="semibold">{question.creatorName}</Text>
				</HStack>
			</HStack>
			<Badge fontSize='sm' colorScheme="teal" variant="solid">{question.categoryTitle}</Badge>
			</Box>

		</Card>
	)
}