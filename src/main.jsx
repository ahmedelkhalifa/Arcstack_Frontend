import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./themes/theme";

import "./i18n"; // if you already set up translations

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);