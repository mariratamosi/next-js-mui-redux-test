import { createTheme } from "@mui/material";

const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#dc9a0b",
    },
    secondary: {
      main: "#4ba6a6",
    },
    info: {
      main: "#87830e",
    },
    divider: "rgba(92,92,92,0.12)",
    warning: {
      main: "#f9c550",
    },
    text: {
      primary: "rgba(65,65,65,0.87)",
    },
  },
};

const AppTheme = createTheme(themeOptions);

export default AppTheme;
