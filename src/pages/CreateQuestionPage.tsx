import {Button, FormControl, FormHelperText, Heading, HStack, Input, Text, useToast, VStack} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {CategorySelectField} from "../components/CreateQuestionPage/CategorySelectField.tsx";

export interface CreateQuestionInputs {
	title: string;
	description: string;
	categoryId: string;
}

export const CreateQuestionPage = () => {
	const navigate = useNavigate();
	const toast = useToast();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateQuestionInputs>()

	return (
		<>
			<Heading>Let's create your question!</Heading>

			<form onSubmit={handleSubmit(onSubmit)}>
				<VStack width="35vw" minWidth="300px" padding="5vw" bgColor="#222222" gap={6}>
					<Text>Sign in</Text>
					<FormControl>
						<Input placeholder="Title" {...register("title", { required: true })} />
						{errors.title ? <FormHelperText color="red.400">This field is required</FormHelperText> : <FormHelperText>Your profile name</FormHelperText>}
					</FormControl>
					<FormControl>
						<Input placeholder="description" {...register("description", { required: true })} />
						{errors.description ? <FormHelperText color="red.400">This field is required</FormHelperText> : <FormHelperText>The password</FormHelperText>}
					</FormControl>
					<FormControl>
						<CategorySelectField/>
					</FormControl>
					<Button type="submit" width="100%" colorScheme="teal">Login</Button>
					<HStack width="100%" justifyContent="space-between">
						<Text fontSize="sm" color="gray.200">Forgot password?</Text>
						<Text fontSize="sm" color="gray.200">Sign up</Text>
					</HStack>
				</VStack>
			</form>
	</>
	)
}