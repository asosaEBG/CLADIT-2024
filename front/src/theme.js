import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#1e3d52",
    },
    secondary: {
      main: "#19857b",
    },
    danger: {
      main: red[400],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
