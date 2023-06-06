import { createTheme } from "@mui/material/styles";
export let theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          // Custom CSS properties for the 'contained' variant
          backgroundColor: "black",
          height: "40px",
          padding: "10px",
          width: "100%",
          color: "white",
          marginTop: 5,
          align: "center",
        },
        outlined: {
          // Custom CSS properties for the 'outlined' variant
          backgroundColor: "black",
          color: "blue",
          padding: 5,
          width: "50%",
          letterSpacing: "2px",
          textAlign: "center",
          alignItems: "center",
          left: "30%",
          mt: 2,
        },
        standard: {
          borderRadius: 5,
          backgroundColor: "rgb(244, 51,151)",
          height: 50,
          textAlign: "center",
          color: "black",
          fontSize: 15,
          mt: 1,
          p: 15,
          cursor: "pointer",
          width: "100%",
        },
      },
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
    third: { main: "pink" },
    bottom: { main: "3px solid rgb(244, 51, 151)" },
  },
  flexDirection: {
    xs: "column",
    sm: "column",
    md: "row",
    lg: "row",
    xl: "row",
  },
  flexDirection1: {
    xs: "row",
    sm: "row",
    md: "column",
    lg: "column",
    xl: "column",
  },
  Display: {
    xs: "none",
    sm: "block",
    md: "block",
    lg: "block",
    xl: "block",
  },
  fontSizevalue: {
    xs: "10px",
    sm: "12px",
    md: "18px",
    lg: "20px",
    xl: "22px",
  },
  Hover: {
    borderBottom: "3px solid rgb(244, 51, 151)",
    // textAlign: { md: "center" },
    align: { md: "center" },
  },
  Navbar: {
    display: {
      xs: "none",
      sm: "flex",
      md: "flex",
      lg: "flex",
      xl: "flex",
    },
    // mt: { xs: 5, sm: 3, md: 2, lg: 2, xl: 2 },
    fontSize: { md: 15 },
    // width: { xs: 100, sm: 100, md: 120, lg: 120, xl: 130 },
    cursor: "pointer",
    // border: "1px solid red",
    "&:hover": {
      color: "rgb(244, 51, 151)",
      borderBottom: "3px solid rgb(244, 51, 151)",
    },
  },
  colorChanges: {
    color: "rgb(244, 51, 151)",
    cursor: "pointer",
  },
});
// theme = responsiveFontSizes(theme);
