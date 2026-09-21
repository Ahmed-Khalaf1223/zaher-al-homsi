import React, { useMemo } from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useTranslation } from "react-i18next";

import App from "./App";
import getTheme from "./theme/theme";

export function Root() {
  const { i18n } = useTranslation();

  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  const theme = useMemo(() => getTheme(direction), [direction]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/zaher-al-homsi">
      <Root />
    </BrowserRouter>
  </React.StrictMode>,
);
