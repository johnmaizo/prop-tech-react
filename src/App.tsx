import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import WebRoute from "./route/WebRoute";

declare module "@mui/material/styles" {
  interface Palette {
    danger?: Palette["primary"];
  }

  interface PaletteOptions {
    danger?: PaletteOptions["primary"];
    dark?: PaletteOptions["primary"];
    gold?: PaletteOptions["primary"];
    light?: PaletteOptions["primary"];
  }
}

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Geist",
    },
    palette: {
      mode: "light",
      primary: {
        main: "#2d50d3",
      },
      secondary: {
        main: "#secondary",
      },
      success: {
        main: "#0F5818",
      },
      danger: {
        main: "#db2a2a",
      },
      dark: {
        main: "#0E0E0E",
      },
      warning: {
        main: "#cb9f00",
      },
      gold: {
        main: "#fdcc0d",
      },
      light: {
        main: "#FFFF",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { minWidth: 0 },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <WebRoute />
      </SnackbarProvider>
    </ThemeProvider>
  );
}
