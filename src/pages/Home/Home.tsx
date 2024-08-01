import { Container } from '@mui/material';

import Top from './Top';
import NewsList from '~/components/NewsList/NewsList';
import { useGetNewsQuery } from '~/api/news/newsSlice';
import Spinner from '~/components/Loader/Loader';

function Home() {
  const {
    data: news,
    isLoading,
    refetch,
  } = useGetNewsQuery(undefined, {
    pollingInterval: 60000,
  });

  return (
    <Container>
      <Top onRefetch={refetch} />
      {!isLoading && news ? <NewsList news={news} /> : <Spinner /> }
    </Container>
  );
}

export default Home;
