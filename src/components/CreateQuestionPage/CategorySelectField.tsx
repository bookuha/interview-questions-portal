import { Controller, useFormContext } from "react-hook-form";
import { CreateQuestionInputs } from "../../pages/CreateQuestionPage.tsx";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import useCategories from "../../hooks/useCategories.ts";

export const CategorySelectField = () => {
  const { control } = useFormContext<CreateQuestionInputs>();
  const { data, error } = useCategories();

  if (error) return null;

  return (
    <FormControl>
      <FormLabel>Category</FormLabel>
      <Controller
        name={"categoryId"}
        control={control}
        defaultValue={""}
        render={({ field }) => (
          <Select {...field}>
            {data?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};
