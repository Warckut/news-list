import { Button } from '@mui/material';

function RefetchBtn({ onClick }: { onClick: VoidFunction }) {
  return (
    <Button
      sx={{ textTransform: 'none', fontSize: '17px' }}
      variant='outlined'
      size='large'
      onClick={onClick}
    >
      Refetch
    </Button>
  );
}

export default RefetchBtn;
