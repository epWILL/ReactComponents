import "inter-ui";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import { AppThemeProvider, GlobalTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppThemeProvider>
        <GlobalTheme />
        <App />
      </AppThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
