import { Link } from 'react-router-dom';
import { useGetNewsQuery } from '~/api/news/newsSlice';

function NewsList() {
  const { data: news, refetch } = useGetNewsQuery(undefined, {
    pollingInterval: 3000,
  });

  return (
    <>
      <button onClick={() => refetch()}>FORCE</button>
      {news?.length}
      <ul>
        {news &&
          news.map(({ id, title }) => (
            <li style={{ padding: '15px' }} key={id}>
              <Link to={`${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default NewsList;
