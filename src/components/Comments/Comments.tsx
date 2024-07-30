// import { useParams } from 'react-router-dom';

import { useGetCommentsQuery } from '~/api/comments/commentsSlice';
import RootLevel from './Level/Level';

function Comments() {
  // const { postId } = useParams();
  const postId = 41037097;
  const { data, isLoading, refetch } = useGetCommentsQuery(postId, {
    pollingInterval: 3000,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='container'>
      <button onClick={() => refetch()}>FORCE</button>
      <ul>{data?.comments && <RootLevel comments={data.comments} />}</ul>
    </div>
  );
}

export default Comments;
