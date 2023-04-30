import { InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import statics from './statics';

const Input = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        marginTop: "10px",
        borderRadius: statics.borderRadius.buttonAndInput,
        position: 'relative',
        backgroundColor: "#fff",
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        transition: theme.transitions.create([
            'background-color',
        ]),
        fontFamily: statics.fontFamily,
        '&:focus': {
            outline: "2px solid " + statics.colors.theme,
            borderColor: "transparent"
        },
    },
}));

export default Input;
