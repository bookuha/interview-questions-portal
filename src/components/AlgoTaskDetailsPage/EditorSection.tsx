import { Editor } from "@monaco-editor/react";
import { Button, HStack, Select, Text, VStack } from "@chakra-ui/react";
import { AlgoTask } from "../../models/AlgoTask.ts";
import { useEffect, useState } from "react";
import { TestRunAlgoTaskRequest } from "../../models/TestRunAlgoTaskRequest.ts";

interface Props {
  algoTask: AlgoTask;
  onSubmit: (testRunRequest: TestRunAlgoTaskRequest) => void;
}

export const EditorSection = ({ algoTask, onSubmit }: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    algoTask.supportedLanguages[0].id,
  );

  const [code, setCode] = useState<string>("");

  useEffect(() => {
    setCode(getSelectedLanguageSampleCode());
  }, [selectedLanguage]);

  const getSelectedLanguageSampleCode = () => {
    return (
      algoTask.codeSamples.find((s) => s.language.id === selectedLanguage)
        ?.sampleCode ?? "..."
    );
  };

  const handleEditorChange = (value: string | undefined) => {
    setCode(value!);
  };

  const handleLanguageChange = (languageId: string) => {
    console.log(languageId);
    setSelectedLanguage(languageId);
    // To not send nulls to the server when code has not been yet written but only sample code is shown
    setCode(getSelectedLanguageSampleCode());
  };

  return (
    <VStack flex="3" height="45vh" minWidth="0" gap={0}>
      {" "}
      {/* minWidth="0" is needed to make the editor responsive */}
      <HStack
        width="100%"
        paddingX="14px"
        paddingY="8px"
        backgroundColor="#222224"
        borderRadius="0.7em 0.7em 0 0"
        justifyContent="space-between"
      >
        <Text fontWeight="bold">Code</Text>
        <Select
          size="md"
          variant="unstyled"
          width="12%"
          value={selectedLanguage}
          onChange={(e) => {
            handleLanguageChange(e.target.value);
          }}
        >
          {algoTask.supportedLanguages.map((language) => {
            return (
              <option key={language.id} value={language.id}>
                {language.name}
              </option>
            );
          })}
        </Select>
      </HStack>
      <Editor
        theme="vs-dark"
        defaultLanguage="csharp"
        defaultValue={code}
        value={code}
        onChange={handleEditorChange}
        options={{
          automaticLayout: true,
        }}
      />
      <HStack width="100%" justifyContent="right" padding={4}>
        <Button variant="outline" colorScheme="teal" size="md">
          Test
        </Button>
        <Button
          colorScheme="teal"
          size="md"
          onClick={() => {
            onSubmit({ code: code!, languageId: selectedLanguage });
          }}
        >
          Submit
        </Button>
      </HStack>
    </VStack>
  );
};
