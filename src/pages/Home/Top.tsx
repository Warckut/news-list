import { styled, Stack, Typography } from '@mui/material';
import RefetchBtn from '~/components/RefetchBtn/RefetchBtn';

function Top({ onRefetch }: { onRefetch: VoidFunction }) {
  return (
    <CustomStack
      spacing={{ xs: 1, sm: 2 }}
      direction='row'
      alignItems='center'
      justifyContent='space-between'
    >
      <Typography
        variant='h1'
        sx={{
          fontSize: '28px',
          fontWeight: 500,
          color: (theme) => theme.palette.primary.main,
        }}
      >
        News
      </Typography>
      <RefetchBtn onClick={onRefetch} />
    </CustomStack>
  );
}

export default Top;

const CustomStack = styled(Stack)`
  margin: ${({ theme }) => theme.spacing(2)} 0;
`;
