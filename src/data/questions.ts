import { Question } from "../models/Question.ts";

const questions: Question[] = [
  {
    id: "1",
    created: new Date(),
    title: "Name the fundamental principles of OOP. Why is it necessary?",
    description:
      "Discuss the fundamental principles of Object-Oriented Programming and explain their significance.",
    categoryId: "83a8cf21-59db-4db9-8b46-d6b37c9d140f",
    categoryTitle: "OOP",
    creatorId: "a550d9a2-07b3-4eaa-9d6a-1b2859123e44", // Example GUID for CreatorID123
    creatorName: "John Doe",
    likesCount: 15,
    commentariesCount: 8,
    isLiked: true,
  },
  {
    id: "2",
    created: new Date(),
    title: "Is multiple inheritance allowed in C#?",
    description:
      "Examine the concept of multiple inheritance in C# and discuss its permissibility.",
    categoryId: "c40f1b27-b4c9-49f2-aa06-7e99cc0dabe8",
    categoryTitle: "C#",
    creatorId: "a550d9a2-07b3-4eaa-9d6a-1b2859123e44", // Example GUID for CreatorID123
    creatorName: "John Doe",
    likesCount: 12,
    commentariesCount: 5,
    isLiked: false,
  },
  {
    id: "3",
    created: new Date(),
    title:
      "Can a class implement multiple interfaces with identical methods? How?",
    description:
      "Explore the scenario where a class implements multiple interfaces with overlapping method declarations.",
    categoryId: "c40f1b27-b4c9-49f2-aa06-7e99cc0dabe8",
    categoryTitle: "C#",
    creatorId: "a550d9a2-07b3-4eaa-9d6a-1b2859123e44", // Example GUID for CreatorID123
    creatorName: "John Doe",
    likesCount: 20,
    commentariesCount: 10,
    isLiked: true,
  },
  {
    id: "4",
    created: new Date(),
    title: "Differences between classes and structures",
    description:
      "Compare and contrast classes and structures in the context of programming languages.",
    categoryId: "c40f1b27-b4c9-49f2-aa06-7e99cc0dabe8",
    categoryTitle: "C#",
    creatorId: "a550d9a2-07b3-4eaa-9d6a-1b2859123e44", // Example GUID for CreatorID123
    creatorName: "John Doe",
    likesCount: 18,
    commentariesCount: 7,
    isLiked: false,
  },
  {
    id: "5",
    created: new Date(),
    title: "Differences between const and readonly",
    description:
      "Explain the distinctions between 'const' and 'readonly' in programming languages.",
    categoryId: "c40f1b27-b4c9-49f2-aa06-7e99cc0dabe8",
    categoryTitle: "C#",
    creatorId: "a550d9a2-07b3-4eaa-9d6a-1b2859123e44", // Example GUID for CreatorID123
    creatorName: "John Doe",
    likesCount: 22,
    commentariesCount: 12,
    isLiked: true,
  },
  {
    id: "6",
    created: new Date(),
    title:
      "What are properties? How do they differ from fields? What is get, set, init?",
    description:
      "Explore the concept of properties in programming, their distinctions from fields, and the roles of get, set, and init.",
    categoryId: "c40f1b27-b4c9-49f2-aa06-7e99cc0dabe8",
    categoryTitle: "C#",
    creatorId: "a550d9a2-07b3-4eaa-9d6a-1b2859123e44", // Example GUID for CreatorID123
    creatorName: "John Doe",
    likesCount: 25,
    commentariesCount: 15,
    isLiked: false,
  },
  {
    id: "7",
    created: new Date(),
    title: "What is an enumeration type? Attribute [Flags]",
    description:
      "Define enumeration types in programming and discuss the use of the [Flags] attribute.",
    categoryId: "c40f1b27-b4c9-49f2-aa06-7e99cc0dabe8",
    categoryTitle: "C#",
    creatorId: "a550d9a2-07b3-4eaa-9d6a-1b2859123e44", // Example GUID for CreatorID123
    creatorName: "John Doe",
    likesCount: 30,
    commentariesCount: 18,
    isLiked: true,
  },
  // Add more questions as needed...
];

export default questions;
