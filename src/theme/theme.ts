import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00BCD4", // Rick & Morty cyan
    },
    secondary: {
      main: "#FF9800", // Orange accent
    },
    success: {
      main: "#4CAF50", // Green for alive
    },
    error: {
      main: "#F44336", // Red for dead
    },
    warning: {
      main: "#FF9800", // Orange for unknown
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h3: {
      fontWeight: 700,
      color: "#333",
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained", // all buttons default to contained
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
        },
        contained: {
          backgroundColor: "#212121", // black
          color: "#fff", // white text
          "&:hover": {
            backgroundColor: "#000", // darker black
          },
        },
        outlined: {
          backgroundColor: "#fff", // white background
          color: "#000", // black text
          border: "2px solid #000", // black border
          "&:hover": {
            backgroundColor: "#f5f5f5", // subtle gray hover
            borderColor: "#000",
          },
        },
      },
    },
  },
});

export default theme;
