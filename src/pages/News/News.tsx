import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  styled,
  Card,
  Link,
  CardContent,
  Container,
  Stack,
} from '@mui/material';

import CommentList from '~/components/CommentList/CommentList';
import Spinner from '~/components/Loader/Loader';
import { formatDate } from '~/utils';
import { useGetCommentsQuery } from '~/api/comments/commentsSlice';

import Top from './Top';

function News() {
  const { id } = useParams();
  const { data, isLoading, refetch } = useGetCommentsQuery(Number(id), {
    pollingInterval: 60000,
  });
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
    <Container>
      <Top onRefetch={refetch} />
      <Card sx={{ marginBottom: (theme) => theme.spacing(6) }}>
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
              <CommentList
                comments={data.comments}
                visibles={visibles}
                onChangeVisibility={handleChangeVisible}
              />
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

const CustomStack = styled(Stack)`
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

const Heading = styled(Link)`
  font-size: '20px';
  font-weight: 400;
`;
