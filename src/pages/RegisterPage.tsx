import { SubmitHandler, useForm } from "react-hook-form";
import {
  Input,
  FormControl,
  FormHelperText,
  VStack,
  Center,
  Text,
  Button,
  useToast,
  Select,
} from "@chakra-ui/react";
import { useSignIn } from "react-auth-kit";
import axios from "../services/api-client.ts";
import { useNavigate } from "react-router-dom";

interface Inputs {
  nickname: string;
  email: string;
  password: string;
  status: number;
}

export const RegisterPage = () => {
  const signIn = useSignIn();
  const navigate = useNavigate();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    axios
      .post("auth/register", { ...data, status: 0 }) // TODO: A tweak. Once enums as strings supported on backend, it will be removed.
      .then((response) => {
        if (
          signIn({
            token: response.data.token,
            expiresIn: 3 * 60, // Change
            tokenType: "Bearer",
            authState: response.data.userInfo,
          })
        ) {
          toast({
            title: "Signed up",
            description:
              "You've successfully signed in as" +
              response.data.userInfo.nickname,
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
          navigate("/");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Center height="85vh">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack
          width="35vw"
          minWidth="300px"
          padding="5vw"
          bgColor="#222222"
          gap={6}
        >
          <Text>Sign up</Text>
          <FormControl>
            <Input
              placeholder="Nickname"
              {...register("nickname", { required: true })}
            />
            {errors.nickname ? (
              <FormHelperText color="red.400">
                This field is required
              </FormHelperText>
            ) : (
              <FormHelperText>Your profile name</FormHelperText>
            )}
          </FormControl>
          <FormControl>
            <Input
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email ? (
              <FormHelperText color="red.400">
                This field is required
              </FormHelperText>
            ) : (
              <FormHelperText>Your email</FormHelperText>
            )}
          </FormControl>
          <FormControl>
            <Select
              placeholder="Select status"
              {...register("status", { required: true })}
            >
              <option value={0}>Self-Learning</option>
              <option value={1}>Student</option>
              <option value={2}>Working</option>
            </Select>
            {errors.status ? (
              <FormHelperText color="red.400">
                This field is required
              </FormHelperText>
            ) : (
              <FormHelperText>Your status</FormHelperText>
            )}
          </FormControl>
          <FormControl>
            <Input
              placeholder="Password"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password ? (
              <FormHelperText color="red.400">
                This field is required
              </FormHelperText>
            ) : (
              <FormHelperText>The password</FormHelperText>
            )}
          </FormControl>
          <Button type="submit" width="100%" colorScheme="teal">
            Register
          </Button>
          <Text fontSize="sm" color="gray.200">
            Login
          </Text>
        </VStack>
      </form>
    </Center>
  );
};
