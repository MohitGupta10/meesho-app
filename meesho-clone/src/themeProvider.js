import { createTheme, responsiveFontSizes } from "@mui/material/styles";
export let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    para: {
      fontSize: "18px",
    },
    heading: {
      fontSize: "40px",
    },
  },
  palette: {
    primary: { main: "#FFFFFF" },
    secondary: { main: "rgb(249,249,249)" },
    third:{main:"pink"}
  },
});
// theme = responsiveFontSizes(theme);
