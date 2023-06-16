export interface Question {
  id: number;
  title: string;
  likes: number;
  answers: number;
  complexity: QuestionComplexity;
}

export type QuestionComplexity =
  | "easy"
  | "medium"
  | "hard"
  | "extreme"
  | "undefined";

const questions: Question[] = [
  {
    id: 1,
    title: "Назовите основные принципы ООП. Зачем оно нужно?",
    likes: 0,
    answers: 0,
    complexity: "easy",
  },
  {
    id: 2,
    title: "Разрешено ли множественное наследование в C#?",
    likes: 0,
    answers: 0,
    complexity: "easy",
  },
  {
    id: 3,
    title:
      "Может ли класс реализовать несколько интерфейсов, у которых объявлены одинаковые методы? Каким образом?",
    likes: 0,
    answers: 0,
    complexity: "easy",
  },
  {
    id: 4,
    title: "Отличия классов от структур",
    likes: 0,
    answers: 0,
    complexity: "easy",
  },

  {
    id: 5,
    title: "Отличия const от readonly",
    likes: 0,
    answers: 0,
    complexity: "easy",
  },
  {
    id: 6,
    title:
      "Что такое свойства. В чем отличия от полей. Что такое get, set, init",
    likes: 0,
    answers: 0,
    complexity: "easy",
  },
  {
    id: 7,
    title: "Что такое тип перечисления. Аттрибут [Flags]",
    likes: 0,
    answers: 0,
    complexity: "easy",
  },
];

export default questions;
