import styled from '@emotion/styled';
import { Button, Stack } from '@mui/material';

const CustomStack = styled(Stack)`
  margin: var(--spacing-2) 0;
`;

const Heading = styled.h1`
  font-weight: 500;
  color: var(--color-primary);
`;

function Top({ onRefetch }: { onRefetch: () => void }) {
  return (
    <CustomStack
      spacing={{ xs: 1, sm: 2 }}
      direction='row'
      alignItems='center'
      justifyContent='space-between'
    >
      <Heading>News</Heading>
      <Button
        sx={{ textTransform: 'none', fontSize: '17px' }}
        variant='outlined'
        size='large'
        onClick={onRefetch}
      >
        Refetch
      </Button>
    </CustomStack>
  );
}

export default Top;

