import { useSelector } from 'react-redux';
import { selectNews } from '~/features/news/newsSlice';

function NewPage() {
  const news = useSelector(selectNews.selectAll);

  return (
    <>
      <h1>News</h1>
      <ul>
        {news.map(({ id, title, content }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NewPage;
