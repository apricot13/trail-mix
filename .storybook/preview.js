import React from "react";
import { ThemeProvider } from 'styled-components';
import { themes } from './../src/themes/theme_generator';
import { GlobalStyle } from "../src/shared/global";

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'generic',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['generic'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

// Function to obtain the intended theme
const getTheme = (themeName) => {
  return themes[themeName];
};


const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme);
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  );
};

// Global decorator to apply the styles to all stories
export const decorators = [
  withThemeProvider,
  (Story) => (
    <>
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
