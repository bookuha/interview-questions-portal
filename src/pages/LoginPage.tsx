import {SubmitHandler, useForm} from "react-hook-form";
import {Input, FormControl, FormHelperText, VStack, Center, Text, Button, HStack, useToast} from "@chakra-ui/react";
import {useSignIn} from "react-auth-kit";
import axios from "../services/api-client.ts"
import {useNavigate} from "react-router-dom";

interface Inputs {
	nickname: string;
	password: string;
}

export const LoginPage = () => {

	const signIn = useSignIn();
	const navigate = useNavigate();
	const toast = useToast();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
		axios.post('auth/login', {...data })
			.then((response) => {
				if(signIn({
					token: response.data.token,
					expiresIn: 3 * 60, // Change
					tokenType: 'Bearer',
					authState: response.data.userInfo
				})){
					toast({
						title: 'Logged in',
						description: "You've successfully logged in.",
						status: 'success',
						duration: 5000,
						isClosable: true,
						position: "top"
					})
					navigate('/')
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<Center height="85vh">
		<form onSubmit={handleSubmit(onSubmit)}>
			<VStack width="35vw" minWidth="300px" padding="5vw" bgColor="#222222" gap={6}>
				<Text>Sign in</Text>
			<FormControl>
				<Input placeholder="Nickname" {...register("nickname", { required: true })} />
				{errors.nickname ? <FormHelperText color="red.400">This field is required</FormHelperText> : <FormHelperText>Your profile name</FormHelperText>}
			</FormControl>
			<FormControl>
				<Input placeholder="Password" type="password" {...register("password", { required: true })} />
				{errors.password ? <FormHelperText color="red.400">This field is required</FormHelperText> : <FormHelperText>The password</FormHelperText>}
			</FormControl>
				<Button type="submit" width="100%" colorScheme="teal">Login</Button>
				<HStack width="100%" justifyContent="space-between">
					<Text fontSize="sm" color="gray.200">Forgot password?</Text>
					<Text fontSize="sm" color="gray.200">Sign up</Text>
				</HStack>
			</VStack>
		</form>
		</Center>
	)
}