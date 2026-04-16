import React, { useCallback, useState } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import { localStorage } from "@csms-consoles/shared-utils";
import muiComponents from "./components";
import { basicPalette, palette } from "./palette";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const localUserTheme = localStorage.get("theme");
  const [mode, setMode] = useState(() => localUserTheme || "light");

  const getPalleteMode = mode => ({
    ...basicPalette,
    components: muiComponents(mode),
    palette: palette(mode)
  });

  if (!document.body.getAttribute("data-theme")) {
    document.body.setAttribute("data-theme", mode);
  }

  const toggleTheme = useCallback(() => {
    setMode(prevMode => {
      let toggledMode = prevMode === "light" ? "dark" : "light";
      document.body.setAttribute("data-theme", toggledMode);
      localStorage.set("theme", toggledMode);
      return toggledMode;
    });
  }, []);

  const theme = React.useMemo(() => createTheme(getPalleteMode(mode)), [mode]);

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        darkMode: mode === "light" ? false : true
      }}
    >
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
