export interface Commentary {
  id: string;
  created: Date;
  content: string;
  parentId?: string;
  questionId: string;
  creatorId: string;
  creatorName: string;
  likesCount: number;
  commentariesCount: number;
  replies: Commentary[];
  isLiked: boolean;
}
