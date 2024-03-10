import { TestRun, TestStatus } from "../../models/TestRun.ts";
import { Code, Text, VStack } from "@chakra-ui/react";
import { TestRunOutput } from "./TestRunOutput.tsx";

interface Props {
  testRun?: TestRun;
  isLoading: boolean;
}

export const TestRunResultInfo = ({ testRun, isLoading }: Props) => {
  if (isLoading) return <Text>Running tests...</Text>;

  if (!testRun) {
    return <Text>Your test results will be shown here.</Text>;
  }

  return (
    <VStack alignItems="start">
      <TestRunSummaryHeader testRun={testRun} />
      <TestRunSummaryContent testRun={testRun} />
    </VStack>
  );
};

const TestRunSummaryHeader = ({ testRun }: { testRun: TestRun }) => {
  switch (testRun.status) {
    case TestStatus.Fail: {
      const failed = testRun.tests?.filter(
        (test) =>
          test.status === TestStatus.Fail || test.status === TestStatus.Error,
      );

      return (
        <Text color="red.400">
          Failed {failed?.length} out of {testRun.tests?.length}:
        </Text>
      );
    }
    case TestStatus.Pass: {
      return <Text color="green.400">All tests passed</Text>;
    }
    case TestStatus.Error: {
      return <Text color="red.400">An error occurred when running tests</Text>;
    }
  }
};

const TestRunSummaryContent = ({ testRun }: { testRun: TestRun }) => {
  switch (testRun.status) {
    case TestStatus.Pass: {
      return (
        <VStack alignItems="start">
          <Text>Good job! You have solved this exercise! Keep going!</Text>
          {testRun.version === 2 || testRun.version === 3 ? (
            <TestRunOutput testRun={testRun} />
          ) : null}
        </VStack>
      );
    }
    case TestStatus.Fail:
      return <TestRunOutput testRun={testRun} />;
    case TestStatus.Error:
      return (
        <VStack alignItems="start">
          <Text>We have encountered an error running your code:</Text>
          <Code colorScheme="red">{testRun.message}</Code>
        </VStack>
      );
  }
};
