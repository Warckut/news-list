import { Box, Button, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const CustomStack = styled(Stack)({
  margin: 'var(--spacing-2) 0',
});

const ArrowBack = styled(ArrowBackIcon)({
  color: 'var(--color-primary)',
});

const Back = styled.span`
  margin-left: var(--spacing);
  font-size: 28px;
  font-weight: 500;
  color: var(--color-primary);
`;

function Top({ onRefetch }: { onRefetch: () => void }) {
  const navigate = useNavigate();

  return (
    <CustomStack direction='row' justifyContent='space-between' alignItems='center'>
      <Box
        display='flex'
        alignItems='center'
        sx={{ cursor: 'pointer' }}
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowBack fontSize='large' />
        <Back>Back</Back>
      </Box>
      <Button sx={{ textTransform: 'none', fontSize: '17px' }} variant='outlined' size='large' onClick={onRefetch}>
        Refetch
      </Button>
    </CustomStack>
  );
}

export default Top;
