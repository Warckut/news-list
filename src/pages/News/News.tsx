import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { Card, Link, CardContent, Container, Stack } from '@mui/material';

import Top from './Top';
import CommentList from '~/components/CommentList/CommentList';
import { formatDate } from '~/utils';
import { useGetCommentsQuery } from '~/api/comments/commentsSlice';
import Spinner from '~/components/Loader/Loader';

const CustomStack = styled(Stack)({
  marginTop: 'var(--spacing-2)',
});

const Heading = styled(Link)({
  fontSize: '20px',
  fontWeight: 400,
});

function News() {
  const { id } = useParams();
  const { data, isLoading, refetch } = useGetCommentsQuery(Number(id), {
    pollingInterval: 60000,
  });

  return (
    <Container>
      <Top onRefetch={refetch} />
      <Card style={{ marginBottom: 'var(--spacing-6)'}}>
        <CardContent>
          {!isLoading && data ? (
            <>
              <CustomStack spacing={1}>
                <Heading href={data.url}>{data.title}</Heading>
                <span>
                  Posted {formatDate(data!.time * 1000)} by {data.user}
                </span>
                <span>{data.comments_count} comments:</span>
              </CustomStack>
              <CommentList comments={data.comments} />
            </>
          ) : (
            <Spinner />
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

export default News;
