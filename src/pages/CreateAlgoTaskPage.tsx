import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Editor } from "@monaco-editor/react";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import useRunTestsOnCode from "../hooks/useRunTestsOnCode.ts";
import { TestStatus } from "../models/TestRun.ts";
import { useState } from "react";

interface Inputs {
  title: string;
  description: string;
  algoCategoryId: string;
  languageId: string;
  initialSolutionCode: string;
  testCode: string;
  sampleCode: string;
}

export const CreateAlgoTaskPage = () => {
  const { register, handleSubmit, control, getValues } = useForm<Inputs>();

  const { mutateAsync: runTestsOnCode } = useRunTestsOnCode();

  const toast = useToast();

  const onTestsRun = async () => {
    const testRunRequest = {
      languageId: getValues("languageId"),
      code: getValues("initialSolutionCode"),
      tests: getValues("testCode"),
    };

    const result = await runTestsOnCode(testRunRequest);
    if (result.status === TestStatus.Pass) {
      toast({ title: "Tests passed", status: "success" });
      setIsAllowedToSubmit(true);
    } else {
      toast({ title: "Tests failed", status: "error" });
    }
  };

  const [isAllowedToSubmit, setIsAllowedToSubmit] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <Center padding="6vh">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack width="50vw">
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input defaultValue="Test" {...register("title")} />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input
              defaultValue="Test description"
              {...register("description")}
            />
          </FormControl>
          <FormControl>
            <FormLabel>AlgoCategoryId</FormLabel>
            <Input
              defaultValue="3fa85f64-5717-4562-b3fc-2c963f66afa6"
              {...register("algoCategoryId")}
            />
          </FormControl>
          <FormControl>
            <FormLabel>LanguageId</FormLabel>
            <Input
              defaultValue="381b0741-ff38-4413-a347-c46d8f815d2c"
              {...register("languageId")}
            />
          </FormControl>
          <VStack width="100%">
            <FormControl>
              <FormLabel>Tests code</FormLabel>
              <Controller
                control={control}
                name="testCode"
                render={({ field: { onChange } }) => (
                  <Editor
                    theme="vs-dark"
                    defaultLanguage="csharp"
                    onChange={onChange}
                    options={{
                      automaticLayout: true,
                    }}
                    height="30vh"
                  />
                )}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Initial Solution Code</FormLabel>
              <Controller
                control={control}
                name="initialSolutionCode"
                render={({ field: { onChange } }) => (
                  <Editor
                    theme="vs-dark"
                    defaultLanguage="csharp"
                    onChange={onChange}
                    options={{
                      automaticLayout: true,
                    }}
                    height="30vh"
                  />
                )}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Sample Code</FormLabel>
              <Controller
                control={control}
                name="sampleCode"
                render={({ field: { onChange } }) => (
                  <Editor
                    theme="vs-dark"
                    defaultLanguage="csharp"
                    onChange={onChange}
                    options={{
                      automaticLayout: true,
                    }}
                    height="30vh"
                  />
                )}
              />
            </FormControl>
          </VStack>
          <HStack>
            <Button onClick={() => onTestsRun()}>Test</Button>
            <Button type="submit" isDisabled={!isAllowedToSubmit}>
              Create
            </Button>
          </HStack>
        </VStack>
      </form>
    </Center>
  );
};
