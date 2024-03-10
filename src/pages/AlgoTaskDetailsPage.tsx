import {
  Box,
  Divider,
  HStack,
  TabList,
  Tabs,
  Text,
  Tab,
  TabPanel,
  TabPanels,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { TaskHeaderInfo } from "../components/AlgoTaskDetailsPage/TaskHeaderInfo.tsx";
import { EditorSection } from "../components/AlgoTaskDetailsPage/EditorSection.tsx";
import { useState } from "react";
import { Description } from "../components/AlgoTaskDetailsPage/Description.tsx";
import useTestRunAlgoTask from "../hooks/useTestRunAlgoTask.ts";
import { useParams } from "react-router-dom";
import useAlgoTask from "../hooks/useAlgoTask.ts";
import { TestRunAlgoTaskRequest } from "../models/TestRunAlgoTaskRequest.ts";
import { TestRunResultInfo } from "../components/AlgoTaskDetailsPage/TestRunResultInfo.tsx";
import { TestRun } from "../models/TestRun.ts";

export const AlgoTaskDetailsPage = () => {
  const { algoTaskId } = useParams();

  const { data: algoTask, isLoading, error } = useAlgoTask(algoTaskId!);

  const [tabIndex, setTabIndex] = useState<number>(0);
  const toast = useToast();
  const { mutateAsync: runTestsOnTask, isLoading: isRunningTests } =
    useTestRunAlgoTask();

  const [lastTestRunResult, setLastTestRunResult] = useState<TestRun>();

  if (isLoading) return <Spinner />;

  if (error || !algoTask) return <Text>Error!</Text>;

  const handleSubmission = async (testRunRequest: TestRunAlgoTaskRequest) => {
    setTabIndex(1);
    try {
      const testRunResult = await runTestsOnTask(testRunRequest); // TODO: handle errors
      setLastTestRunResult(testRunResult);
    } catch (e) {
      toast({ title: "Failed to run tests", status: "error" });
    }
  };

  return (
    <>
      <HStack paddingY="6vh" alignItems="top" gap={4}>
        <Box flex="3">
          <TaskHeaderInfo algoTask={algoTask} />
          <Tabs
            index={tabIndex}
            onChange={(index) => setTabIndex(index)}
            variant="line"
            colorScheme="teal"
          >
            <TabList>
              <Tab>Info</Tab>
              <Tab>Results</Tab>
            </TabList>
            <Box paddingTop="3vh" />
            <TabPanels>
              <TabPanel padding="0">
                <Description algoTask={algoTask} />
              </TabPanel>
              <TabPanel padding="0">
                <TestRunResultInfo
                  testRun={lastTestRunResult}
                  isLoading={isRunningTests}
                />
                <Box paddingTop="3vh" />
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Divider />
          <Text color="gray.600">
            Copyright ©️ 2023 IQP All rights reserved
          </Text>
        </Box>
        <EditorSection algoTask={algoTask} onSubmit={handleSubmission} />
      </HStack>
    </>
  );
};
