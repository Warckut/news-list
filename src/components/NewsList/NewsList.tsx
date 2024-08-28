import { styled, Card, CardContent, Divider, Typography, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

import { News } from '~/api/news/types';
import { formatDate } from '~/utils';
import { formatPoints } from './utils';

interface NewsListProps {
  news: News[];
}

function NewsList({ news }: NewsListProps) {
  return (
    <ListWrapper sx={{ marginBottom: (theme) => theme.spacing(6)}}>
      <List>
        {news.map(({ id, points, user, time, title, domain }) => (
          <CustomListItem key={id}>
            <CardContent>
              <Typography
                variant='h4'
                sx={{
                  fontSize: '16px',
                  marginBottom: (theme) => theme.spacing(),
                }}
              >
                <Link to={`${id}`}>{title}</Link>
                {domain && <span> ({domain})</span>}
              </Typography>
              <Typography variant="body1">
                {formatPoints(points)} by {user}
                {formatDate(time * 1000)}
              </Typography>
            </CardContent>
            <Divider sx={{width: '100%'}}/>
          </CustomListItem>
        ))}
      </List>
    </ListWrapper>
  );
}

export default NewsList;

const ListWrapper = styled(Card)`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

const CustomListItem = styled(ListItem)`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
