import {Select, Text} from "@chakra-ui/react";
import useQuestionsQueryStore from "../../../store/QuestionsQueryStore.ts";
import useCategories from "../../../hooks/useCategories.ts";
import useCategory from "../../../hooks/useCategory.ts";

export const CategorySelector = () => {

	const {
		data,
		error,
	} = useCategories();


	const selectedCategoryId = useQuestionsQueryStore(
		(s)=>s.questionsQuery.categoryId);
	const setSelectedCategoryId = useQuestionsQueryStore((s)=>s.setCategoryId);
	const currentCategory = useCategory(selectedCategoryId);

	if(error) return null;

	return (
		<>
			<Text fontSize="sm">Category</Text>
			<Select size="sm" placeholder={currentCategory?.title ?? "All"}> // Idk if it will select "null"
				{data?.map((category)=>(
					<option
						key={category.id}
						value={category.id}
						onClick={()=>setSelectedCategoryId(category.id)}
						selected={category.id === selectedCategoryId}
					>
						{category.title}
					</option>
				))}
			</Select>
		</>
	)
}