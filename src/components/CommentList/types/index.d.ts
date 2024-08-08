import { CommentType } from '~/api/comments/types';

export type CommentProps = {
  comment: CommentType;
  visibles: Set<number>;
  onChangeVisibility: (id: number) => void;
};

export type CommentListProps = {
  visibles: Set<number>;
  comments: CommentType[];
  onChangeVisibility: (id: number) => void;
};
