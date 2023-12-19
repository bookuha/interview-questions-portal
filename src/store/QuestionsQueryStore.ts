import {create} from "zustand";

interface QuestionsQuery{
    searchText?: string;
    sortOrder?: string;
    categoryId?: string;
    progress?: string;
}

interface QuestionQueryStore{
    questionsQuery: QuestionsQuery;
    setSearchText: (searchText: string) => void;
    setSortOrder: (sortOrder: string) => void;
    setCategoryId: (categoryId: string) => void;
    setProgress: (progress: string) => void;
}

const useQuestionsQueryStore = create<QuestionQueryStore>((set, get) => ({
    questionsQuery: {},
    setSearchText: (searchText: string) =>
        set({questionsQuery: {...get().questionsQuery, searchText}}),
    setSortOrder: (sortOrder: string) =>
        set({questionsQuery: {...get().questionsQuery, sortOrder}}),
    setCategoryId: (categoryId: string) =>
        set({questionsQuery: {...get().questionsQuery, categoryId}}),
    setProgress: (progress: string) =>
        set({questionsQuery: {...get().questionsQuery, progress}}),
}));

export default useQuestionsQueryStore;
