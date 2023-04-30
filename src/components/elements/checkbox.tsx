import { Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import statics from './statics';

const CustomizedCheckbox = styled(Checkbox)(({ theme }) => ({
    color: statics.colors.theme + " !important",
}));

export default CustomizedCheckbox;
