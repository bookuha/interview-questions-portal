import { Select, Text } from "@chakra-ui/react";
import useQuestionsQueryStore from "../../../store/QuestionsQueryStore.ts";

export const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
    { value: "likes", label: "Likes" },
    { value: "comments", label: "Answers" },
  ];

  const setSortOrder = useQuestionsQueryStore((s) => s.setSortOrder);
  const sortOrder = useQuestionsQueryStore((s) => s.questionsQuery.sortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder,
  );

  return (
    <>
      <Text fontSize="sm">Sort by</Text>
      <Select size="sm" placeholder={currentSortOrder?.label}>
        {sortOrders.map((order) => (
          <option
            key={order.value}
            value={order.value}
            onClick={() => setSortOrder(order.value)}
          >
            {order.label}
          </option>
        ))}
      </Select>
    </>
  );
};
