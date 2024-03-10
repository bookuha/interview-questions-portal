import { CodeLanguage } from "./CodeLanguage.ts";

export interface AlgoTask {
  id: string;
  created: Date;
  title: string;
  description: string;
  algoCategoryId: string;
  algoCategoryTitle: string;
  supportedLanguages: CodeLanguage[];
  codeSamples: SampleCode[];
  isPassed: boolean;
}

export interface SampleCode {
  language: CodeLanguage;
  sampleCode: string;
}
