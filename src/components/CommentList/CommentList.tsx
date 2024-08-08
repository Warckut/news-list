import { styled, List, Collapse, Box, Typography } from '@mui/material';
import { CommentListProps, CommentProps } from './types';

import DropDownBtn from '~/components/DropDownBtn/DropDownBtn';
import { parserHTML } from '~/utils';

function CommentItem({ comment, visibles, onChangeVisibility }: CommentProps) {
  const { id, user, content, comments } = comment;
  const active = visibles.has(id);

  if (content === '[deleted]') return;

  return (
    <>
      <HeadComment>
        <WidgetComment>
          {!visibles.has(id) && comments.length > 0 && (
            <span>{comments.length}</span>
          )}
          {comments.length > 0 && (
            <DropDownBtn
              active={active}
              onClick={() => onChangeVisibility(id)}
            />
          )}
        </WidgetComment>
        <h5>{user}</h5>
      </HeadComment>
      <Typography
        variant='body1'
        sx={{ marginLeft: (theme) => theme.spacing(6) }}
      >
        {parserHTML(content)}
      </Typography>
      <Collapse in={active} sx={{ pl: 4 }}>
        <CommentList
          comments={comments}
          visibles={visibles}
          onChangeVisibility={onChangeVisibility}
        />
      </Collapse>
    </>
  );
}

function CommentList({
  comments,
  visibles,
  onChangeVisibility,
}: CommentListProps) {
  return (
    <List>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          visibles={visibles}
          onChangeVisibility={onChangeVisibility}
          comment={comment}
        />
      ))}
    </List>
  );
}

export default CommentList;

const WidgetComment = styled(Box)`
  width: 50px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const HeadComment = styled(Box)`
  margin-top: ${({ theme }) => theme.spacing()};
  display: flex;
  justify-content: start;
  align-items: center;
  height: 35px;
`;
