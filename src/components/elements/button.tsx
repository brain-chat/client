import { Button, styled } from "@mui/material";
import statics from "./statics";

const CustomizedButton = styled(Button)({
    boxShadow: 'none',
    backgroundColor: statics.colors.theme,
    '&:hover': {
        backgroundColor: statics.colors.lighter,
    },
    border: "none",
    fontFamily: statics.fontFamily,
    borderRadius: statics.borderRadius.buttonAndInput,
});

export default CustomizedButton;
