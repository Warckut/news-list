import styled from '@emotion/styled';
import { Card, CardContent, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

import { News } from '~/api/news/types';
import { formatDate } from '~/utils';

interface NewsListProps {
  news: News[];
}

const NewsHeading = styled.div`
  margin-bottom: var(--spacing);
`;

const ListWrapper = styled(Card)`
  margin-bottom: var(--spacing-6);
`;

function NewsList({ news }: NewsListProps) {
  return (
    <ListWrapper>
      <ul>
        {news.map(({ id, points, user, time, title, domain }) => (
          <li key={id}>
            <CardContent>
              <NewsHeading>
                <Link to={`${id}`}>{title}</Link>
                {domain && <span> ({domain})</span>}
              </NewsHeading>
              <div>
                <span>
                  {points} point{points > 1 && 's'} by {user}
                  {formatDate(time * 1000)}
                </span>
              </div>
            </CardContent>
            <Divider />
          </li>
        ))}
      </ul>
    </ListWrapper>
  );
}

export default NewsList;
