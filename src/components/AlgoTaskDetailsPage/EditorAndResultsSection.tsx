import {Editor} from "@monaco-editor/react";
import {Box, Button, HStack, Text, VStack} from "@chakra-ui/react";
import {AlgorithmTask} from "../../models/AlgorithmTask.ts";
import {useState} from "react";

interface Props{
	algoTask: AlgorithmTask;
	onSubmit: (code: string) => void;
}

export const EditorAndResultsSection = ({algoTask, onSubmit} : Props) => {

	const [code, setCode] = useState<string | undefined>(algoTask.sampleCode);

	const handleEditorChange = (value: string | undefined, event) => {
		setCode(value);
	}

	return (
		<VStack flex="3" height="60vh"  minWidth="0" gap={0}> {/* minWidth="0" is needed to make the editor responsive */}
			<Box width="100%" padding="5px" backgroundColor="#222224" borderRadius="0.7em 0.7em 0 0">
				<Text fontWeight="bold">Solution</Text>
			</Box>
			<Editor
				theme="vs-dark"
				defaultLanguage="csharp"
				defaultValue={algoTask.sampleCode}
				onChange={handleEditorChange}
				options={{
					automaticLayout: true,
				}}
			/>
			<Box width="100%" height="20vh">
				<Text fontWeight="bold">Expected</Text>
				<Text>1 - 3</Text>
				<Text>2 - 5</Text>
				<Text>3 - 6</Text>
			</Box>
			<HStack width="100%" justifyContent="right">
				<Button variant="outline" colorScheme="teal" size="md">Test</Button>
				<Button colorScheme="teal" size="md" onClick={() => {onSubmit(code!)}}>Submit</Button>
			</HStack>
		</VStack>
	)
}