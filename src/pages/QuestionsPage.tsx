import {Box, Flex, VStack, Text, SimpleGrid, Spinner} from "@chakra-ui/react";
import {QuestionCard} from "../components/QuestionsPage/QuestionCard.tsx";
import {FeaturedCategoriesList} from "../components/QuestionsPage/FeaturedCategoriesList.tsx";
import {QuestionsFilterForm} from "../components/QuestionsPage/Filters/QuestionsFilterForm.tsx";
import {CreateButtonsGroup} from "../components/QuestionsPage/CreateButtonsGroup.tsx";
import useQuestions from "../hooks/useQuestions.ts";

export const QuestionsPage = () => {

	const {
		data,
		error,
		isLoading
	} = useQuestions();


	if (error) return <Text>Error!</Text>

	return (
		<Box paddingY={2}>
			<Flex gap={6}>
				<VStack flex={2}>
					<QuestionsFilterForm/>
					<CreateButtonsGroup/>
				</VStack>
				<VStack alignItems={"start"} flex={5}>
					<FeaturedCategoriesList/>
					<Text fontSize="xs" fontWeight="semibold" color="gray.300">{data?.length ?? 0} found</Text>
					{isLoading && <Spinner/>}
					<SimpleGrid columns={{sm: 1, md: 2}} spacing={3}>
						{data?.map((q) => (
							<QuestionCard question={q}/>
						))}
					</SimpleGrid>
				</VStack>
			</Flex>
		</Box>
	)
}