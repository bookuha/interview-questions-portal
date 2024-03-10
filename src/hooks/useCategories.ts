import { useQuery } from "react-query";
import apiClient from "../services/api-client.ts";
import { Category } from "../models/Category.ts";

const useCategories = () => {
  const getCategories = () => {
    return apiClient.get<Category[]>("categories").then((res) => res.data);
  };

  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export default useCategories;
