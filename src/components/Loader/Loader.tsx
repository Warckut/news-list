import styled from '@emotion/styled';
import { Box, CircularProgress } from '@mui/material';

const WrapperSpinner = styled(Box)`
  display: flex;
  min-height: 300px;
  justify-content: center;
  align-items: center;
`;

function Spinner() {
  return (
    <WrapperSpinner>
      <CircularProgress size={70} />
    </WrapperSpinner>
  );
}

export default Spinner;
