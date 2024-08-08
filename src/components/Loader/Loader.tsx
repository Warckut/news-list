import { styled, Box, CircularProgress } from '@mui/material';

function Spinner() {
  return (
    <WrapperSpinner>
      <CircularProgress size={70} />
    </WrapperSpinner>
  );
}

export default Spinner;

const WrapperSpinner = styled(Box)`
  display: flex;
  min-height: 300px;
  justify-content: center;
  align-items: center;
`;
