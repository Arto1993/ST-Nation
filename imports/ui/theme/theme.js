import { createTheme } from "@material-ui/core/styles";

const primary = "#3AB397";
const secondary = "#F45858";
const textColor = "#465765";

const theme = createTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        "&$completed": {},
        "&$active": {
          color: "#F2C702",
        },
      },
      active: {},
      completed: {},
    },
  },

  palette: {
    primary: {
      main: primary,
      contrastText: "#ffffff",
    },

    secondary: {
      main: secondary,
    },

    text: {
      primary: textColor,
    },

    background: {
      default: "#EFF2F4",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1920,
    },
  },

  typography: {
    button: {
      textTransform: "capitalize",
      fontSize: "1.125rem",
    },

    subtitle1: {
      fontFamily: "Open Sans",
      color: textColor,
      fontWeight: 600,
      fontSize: "22px",
      lineHeight: "normal",
      letterSpacing: "normal",
    },

    subtitle2: {
      fontFamily: "Open Sans",
      color: textColor,
      fontSize: "42px",
      fontWeight: 400,
      lineHeight: "normal",
      letterSpacing: "normal",
    },

    subtitle3: {
      fontFamily: "Open Sans",
      color: textColor,
      fontWeight: 500,
      fontSize: "200%",
      lineHeight: "normal",
      letterSpacing: "normal",
      "@media (max-width:600px)": {
        margin: 0,
        fontSize: 20,
      },
    },

    h3: {
      fontFamily: "Open Sans",
      color: textColor,
      fontWeight: 600,
      fontSize: "60px",
      lineHeight: "normal",
      letterSpacing: "normal",
    },

    h4: {
      fontFamily: "Open Sans",
      color: textColor,
      fontWeight: 300,
      fontSize: "18px",
      lineHeight: "normal",
      letterSpacing: "normal",
    },

    h5: {
      fontFamily: "Open Sans",
      color: textColor,
      fontWeight: 300,
      fontSize: "14px",
      lineHeight: "normal",
      letterSpacing: "normal",
      "@media (max-width:600px)": {
        margin: 0,
      },
    },

    green: {
      fontFamily: "Open Sans",
      fontSize: "16px",
      fontWeight: 200,
      lineHeight: "normal",
      letterSpacing: "normal",
    },
  },
});

export default theme;
