import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Select,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { RulesSection } from "../components/CreateQuestionPage/RulesSection.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import useCreateQuestion from "../hooks/useCreateQuestion.ts";
import { useNavigate } from "react-router-dom";
import useCategories from "../hooks/useCategories.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const inputs = yup
  .object({
    title: yup
      .string()
      .required("This field is required.")
      .min(10, "Title must be at least 10 characters long.")
      .max(100, "Title must be at most 100 characters long."),
    description: yup
      .string()
      .required("This field is required.")
      .min(20, "Description must be at least 20 characters long.")
      .max(600, "Description must be at most 600 characters long."),
    categoryId: yup.string().required("Select category from the list."),
  })
  .required();

export const CreateQuestionPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(inputs),
  });
  const { data: categories } = useCategories();
  const { mutateAsync: create, isLoading: isCreating } = useCreateQuestion();
  const toast = useToast();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<{
    title: string;
    description: string;
    categoryId: string;
  }> = async (data) => {
    try {
      const createdQuestion = await create(data);
      toast({ title: "Question created", status: "success" });
      navigate("/questions/" + createdQuestion.id);
    } catch (e) {
      toast({ title: "Failed to create question", status: "error" });
    }
  };

  return (
    <>
      <HStack paddingY="6vh" alignItems="top">
        <Box flex="2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack alignItems="start" gap={1}>
              <Box width="50%">
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input {...register("title")} />
                  <FormHelperText color="red.400">
                    {errors.title?.message}
                  </FormHelperText>
                </FormControl>
                <FormControl minWidth="100px" width="35%">
                  <FormLabel>Category</FormLabel>
                  <Select
                    {...register("categoryId")}
                    placeholder={"Select category"}
                  >
                    {categories?.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                  </Select>
                  <FormHelperText color="red.400">
                    {errors.categoryId?.message}
                  </FormHelperText>
                </FormControl>
              </Box>
            </VStack>

            <Box paddingTop="3vh" />
            <Divider />
            <Box paddingTop="3vh" />
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea rows={10} {...register("description")} />
              <FormHelperText color="red.400">
                {errors.description?.message}
              </FormHelperText>
            </FormControl>

            <Box paddingTop="3vh" />
            <Divider />
            <Box paddingTop="3vh" />

            <Button type="submit" colorScheme={"green"} isDisabled={isCreating}>
              Create
            </Button>
          </form>

          <Box paddingTop="3vh" />
          <Divider />
          <Box paddingTop="3vh" />

          <Text color="gray.600">
            Copyright ©️ 2023 IQP All rights reserved
          </Text>
        </Box>
        <Box flex="1">
          <RulesSection />
        </Box>
      </HStack>
    </>
  );
};
