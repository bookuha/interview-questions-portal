import { useMutation } from "react-query";
import apiClient from "../services/api-client.ts";
import { TestRunAlgoTaskRequest } from "../models/TestRunAlgoTaskRequest.ts";
import { TestRun } from "../models/TestRun.ts";

const useTestRunAlgoTask = () => {
  const testRunAlgoTask = (testRunRequest: TestRunAlgoTaskRequest) => {
    return apiClient
      .post<TestRun>(
        "algo-tasks/83a6aaab-a447-4a5b-9397-b2e68d7135c4/test",
        testRunRequest,
      )
      .then((res) => res.data);
  };

  return useMutation({
    mutationFn: testRunAlgoTask,
  });
};

export default useTestRunAlgoTask;
