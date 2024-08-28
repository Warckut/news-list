import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function DropDownBtn({
  active,
  onClick,
}: {
  active: boolean;
  onClick: VoidFunction;
}) {
  return (
    <IconButton size='small' onClick={onClick}>
      <ArrowDropDownIcon sx={{ transform: `rotate(${active ? 180 : 0}deg)` }} />
    </IconButton>
  );
}

export default DropDownBtn;
