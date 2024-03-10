export interface Question {
  id: string;
  created: Date;
  title: string;
  description: string;
  categoryId: string;
  categoryTitle: string;
  creatorId: string;
  creatorName: string;
  likesCount: number;
  commentariesCount: number;
  isLiked: boolean;
}
