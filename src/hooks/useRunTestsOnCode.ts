import apiClient from "../services/api-client.ts";
import { useMutation } from "react-query";
import { RunTestsOnCodeRequest } from "../models/RunTestsOnCodeRequest.ts";
import { TestRun } from "../models/TestRun.ts";

const useRunTestsOnCode = () => {
  const runTestsOnCode = (testRunRequest: RunTestsOnCodeRequest) => {
    return apiClient
      .post<TestRun>("/algo-tasks/test", testRunRequest)
      .then((res) => res.data);
  };

  return useMutation({
    mutationFn: runTestsOnCode,
  });
};

export default useRunTestsOnCode;
