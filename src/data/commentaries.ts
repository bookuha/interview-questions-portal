import {Commentary} from "../models/Commentary.ts";

const commentariesData: Commentary[] = [
    {
        id: "1",
        created: new Date(),
        content: "This is the first commentary.",
        questionId: "q1",
        creatorId: "user1",
        creatorName: "John Doe",
        likesCount: 2,
        commentariesCount: 1,
        replies: [
            {
                id: "2",
                created: new Date(),
                content: "Reply to the first commentary.",
                questionId: "q1",
                creatorId: "user2",
                creatorName: "Jane Doe",
                likesCount: 1,
                commentariesCount: 0,
                replies: [],
                isLiked: false,
            },
        ],
        isLiked: false,
    },
    {
        id: "3",
        created: new Date(),
        content: "This is the second commentary.",
        questionId: "q1",
        creatorId: "user3",
        creatorName: "Alice",
        likesCount: 5,
        commentariesCount: 2,
        replies: [
            {
                id: "4",
                created: new Date(),
                content: "Reply to the second commentary.",
                questionId: "q1",
                creatorId: "user4",
                creatorName: "Bob",
                likesCount: 3,
                commentariesCount: 0,
                replies: [],
                isLiked: false,
            },
            {
                id: "5",
                created: new Date(),
                content: "Another reply to the second commentary.",
                questionId: "q1",
                creatorId: "user5",
                creatorName: "Eve",
                likesCount: 2,
                commentariesCount: 0,
                replies: [],
                isLiked: false,
            },
        ],
        isLiked: true,
    },
    // Add more commentaries as needed
];

export default commentariesData;