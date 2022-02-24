import { createTheme } from '@mui/material/styles';

export const colorPrimari = "#6785C1";
export const colorSecundari = "#0080B1";

export const theme = createTheme({
    palette: {
        primary: {
            main: colorPrimari,
        },
        secondary: {
            main: colorSecundari,
        },
        neutral: {
            main: colorPrimari,
        },
    }
});
