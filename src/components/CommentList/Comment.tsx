import styled from '@emotion/styled';
import { Box } from '@mui/material';

import DropDownBtn from '../DropDownBtn/DropDownBtn';
import { CommentProps } from './types';
import { parserHTML } from '~/utils';

const WidgetComment = styled(Box)`
  width: 50px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const HeadComment = styled(Box)`
  margin-top: var(--spacing);
  display: flex;
  justify-content: start;
  align-items: center;
  height: 35px;
`;

const ContentComment = styled.div`
  margin-left: var(--spacing-6);
`;

function Comment({ comment, visibles, onChangeVisibility }: CommentProps) {
  const { id, user, content, comments } = comment;
  const active = visibles.has(id);

  return (
    <li key={id}>
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
      <ContentComment>
        <p>{parserHTML(content)}</p>
        {active && (
          <ul>
            {comments.map((reply) => (
              <Comment
                key={reply.id}
                comment={reply}
                visibles={visibles}
                onChangeVisibility={onChangeVisibility}
              />
            ))}
          </ul>
        )}
      </ContentComment>
    </li>
  );
}

export default Comment;
