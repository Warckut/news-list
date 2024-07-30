import { News } from '~/api/news/types';

interface NewsWithComments extends News {
  comments: Comment[];
}

export interface Comment {
  id: number;
  content: string;
  user: string;
  time: number;
  level: number;
  comments: Comment[];
}
