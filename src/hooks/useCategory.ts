import useCategories from "./useCategories.ts";

const useCategory = (id?: string) => {
    const {data: categories} = useCategories();
    return categories?.find((p) => p.id === id);
}

export default useCategory;