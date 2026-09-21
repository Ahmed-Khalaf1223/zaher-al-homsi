import { createTheme } from "@mui/material/styles";

const getTheme = (direction = "rtl") =>
  createTheme({
    direction,

    palette: {
      primary: {
        main: "#C99A4A",
        light: "#DDBB7D",
        dark: "#A8792D",
        contrastText: "#FFFFFF",
      },

      secondary: {
        main: "#222222",
      },

      background: {
        default: "#FAF8F4",
        paper: "#FFFFFF",
      },

      text: {
        primary: "#222222",
        secondary: "#29241F",
      },
    },

    typography: {
      fontFamily: direction === "rtl" ? '"Rubik", sans-serif' : '"Monda", sans-serif',

      h1: {
        fontWeight: 800,
      },

      h2: {
        fontWeight: 800,
      },

      h3: {
        fontWeight: 700,
      },

      h4: {
        fontWeight: 700,
      },

      h5: {
        fontWeight: 700,
      },

      button: {
        fontWeight: 700,
      },
    },

    shape: {
      borderRadius: 10,
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 6,
            textTransform: "none",
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 10,
          },
        },
      },

      MuiTypography: {
        styleOverrides: {
          root: {
            direction,
          },
        },
      },
    },
  });

export default getTheme;
