import { styled, Card, CardContent, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { News } from '~/api/news/types';
import { formatDate } from '~/utils';

interface NewsListProps {
  news: News[];
}

function NewsList({ news }: NewsListProps) {
  return (
    <ListWrapper>
      <ul>
        {news.map(({ id, points, user, time, title, domain }) => (
          <li key={id}>
            <CardContent>
              <Typography
                variant='h4'
                sx={{
                  fontSize: '17px',
                  marginBottom: (theme) => theme.spacing(),
                }}
              >
                <Link to={`${id}`}>{title}</Link>
                {domain && <span> ({domain})</span>}
              </Typography>
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

const ListWrapper = styled(Card)`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;
