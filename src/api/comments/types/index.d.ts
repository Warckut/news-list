import { News } from '~/api/news/types';

interface NewsWithComments extends News {
  comments: CommentType[];
}

export interface CommentType {
  id: number;
  content: string;
  user: string;
  time: number;
  level: number;
  comments: CommentType[];
}
