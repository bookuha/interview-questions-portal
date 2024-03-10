export interface TestRun {
  version: number;
  status: TestStatus;
  message: string;
  tests?: TestResult[];
}

export interface TestResult {
  name?: string;
  status: TestStatus;
  taskId?: number;
  message?: string;
  output?: string;
  test_code?: string;
}

export enum TestStatus {
  Pass,
  Fail,
  Error,
}
