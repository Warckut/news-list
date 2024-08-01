import { useState } from 'react';

import { CommentListProps } from './types';
import Comment from './Comment';

function CommentList({ comments }: CommentListProps) {
  const [visibles, setVisibles] = useState<Set<number>>(new Set());

  const handleChangeVisible = (id: number) => {
    setVisibles((prevVisibles) => {
      const newVisibles = new Set(prevVisibles);
      if (newVisibles.has(id)) newVisibles.delete(id);
      else newVisibles.add(id);
      return newVisibles;
    });
  };

  return (
    <ul>
      {comments.map((comment) => (
        <Comment
          visibles={visibles}
          onChangeVisibility={handleChangeVisible}
          key={comment.id}
          comment={comment}
        />
      ))}
    </ul>
  );
}

export default CommentList;
