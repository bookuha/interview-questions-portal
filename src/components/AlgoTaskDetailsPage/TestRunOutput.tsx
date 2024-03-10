import { TestRun, TestStatus } from "../../models/TestRun.ts";
import { Code, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { BsCheckCircle, BsXLg } from "react-icons/bs";

interface Props {
  testRun: TestRun;
}

export const TestRunOutput = ({ testRun }: Props) => {
  const outputColor =
    testRun.status === TestStatus.Pass ? "green.400" : "red.400";
  const outputColorScheme =
    testRun.status === TestStatus.Pass ? "green" : "red";
  const outputIcon = testRun.status === TestStatus.Pass ? BsCheckCircle : BsXLg;

  if (testRun.version >= 2 && testRun.tests && testRun.tests.length > 0) {
    return (
      <List spacing={3}>
        {testRun.tests.map((test) => (
          <ListItem>
            <Text>
              <ListIcon as={outputIcon} color={outputColor} />
              {test.name} [
              {<Code colorScheme={outputColorScheme}>{test.test_code}</Code>}]
            </Text>
            {test.status === TestStatus.Fail && (
              <Text>Got: {test.message}</Text>
            )}
          </ListItem>
        ))}
      </List>
    );
  }
  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: testRun.message }} />
    </pre>
  );
};
