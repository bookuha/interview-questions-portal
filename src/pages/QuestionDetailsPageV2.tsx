import {Box, Divider, HStack, Spinner, Text} from "@chakra-ui/react";
import {QuestionHeaderInfo} from "../components/QuestionDetailsPage/QuestionHeaderInfo.tsx";
import {useParams} from "react-router-dom";
import CommentsSection from "../components/QuestionDetailsPage/CommentsSection.tsx";
import useQuestion from "../hooks/useQuestion.ts";
import {AlsoCheckSection} from "../components/QuestionDetailsPage/AlsoCheckSection.tsx";

export const QuestionDetailsPageV2 = () => {

	const {questionId} = useParams();

	const {
		data: question,
		isLoading,
		error
	} = useQuestion(questionId!);

	if (isLoading) return <Spinner />;

	if (error || !question) return <Text>Error!</Text>

	return (
		<>
			<HStack paddingY="6vh" alignItems="top">
				<Box flex="2">
				<QuestionHeaderInfo
					question={question}/>

				<Box paddingTop="3vh"/>
				<Divider/>
				<Box paddingTop="3vh"/>

				<Text paddingBottom={5} lineHeight={4}>{question.description}</Text>


				<Box paddingTop="3vh"/>
				<Divider/>
				<Box paddingTop="3vh"/>

				<Text>Discussion ({question.commentariesCount})</Text>
					<CommentsSection questionId={question.id}/>

				<Divider/>
				<Box paddingTop="3vh"/>

				<Text>Similar questions</Text>

				<Box paddingTop="3vh"/>
				<Divider/>
				<Box paddingTop="3vh"/>

				<Text color="gray.600">Copyright ©️ 2023 IQP All rights reserved</Text>
				</Box>
				<Box flex="1">
					<AlsoCheckSection/>
				</Box>
			</HStack>
		</>
	)
}