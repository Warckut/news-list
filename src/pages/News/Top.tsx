import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled, IconButton, Stack, Typography } from '@mui/material';
import RefetchBtn from '~/components/RefetchBtn/RefetchBtn';

function Top({ onRefetch }: { onRefetch: VoidFunction }) {
  const navigate = useNavigate();

  return (
    <CustomStack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
    >
      <IconButton
        sx={{
          '&:hover': {
            backgroundColor: 'inherit',
          },
        }}
        onClick={() => navigate(-1)}
      >
        <ArrowBack fontSize='large' />
        <CustomTypography>Back</CustomTypography>
      </IconButton>
      <RefetchBtn onClick={onRefetch} />
    </CustomStack>
  );
}

export default Top;

const CustomTypography = styled(Typography)`
  margin-left: ${({ theme }) => theme.spacing()};
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.primary.main};
`;

const CustomStack = styled(Stack)`
  margin: ${({ theme }) => theme.spacing(2)} 0;
`;

const ArrowBack = styled(ArrowBackIcon)`
  color: ${({ theme }) => theme.palette.primary.main};
`;
