import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { transparentize } from "polished";

export interface Colours {
  white: string;
  black: string;
  background0: string;
  blue: string;
}
declare module "styled-components" {
  interface DefaultTheme extends Colours {}
}

export function SetColours(): Colours {
  return {
    white: "#FFFFFF",
    black: "#000000",
    background0: "#1B1A28",
    blue: "#61dafb",
  };
}

function Theme() {
  return {
    ...SetColours(),
  };
}

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const themeObject = React.useMemo(() => Theme(), []);
  return <ThemeProvider theme={themeObject}>{children}</ThemeProvider>;
}

export const GlobalTheme = createGlobalStyle`
html, input, textarea, button {
    font-family: 'Inter';
    font-display: fallback;
}
@supports (font-variation-settings: normal) {
    html, input, textarea, button {
        font-family: 'Inter var';
    }
}
html {
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.background0} !important;
}

a {
 color: ${({ theme }) => theme.white}; 
}
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  max-height: 100vh;
  background-repeat: no-repeat;
  background-image: ${({ theme }) =>
    `radial-gradient(85% 85% at 50% 50%, ${transparentize(
      0.8,
      theme.blue
    )} 0%, ${transparentize(0.8, theme.background0)} 100%)`};

* {
    box-sizing: border-box;
  }
  
  button {
    user-select: none;
  }
  
  html {
    font-size: 18px;
    font-variant: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
  }
`;
