import React from 'react';
import { ThemeProvider } from 'styled-components';
import { getDisplayName } from 'utils/getDisplayName';

import type { ReactNode, FC } from 'react';

const theme = {};

export const AppThemeProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const withTheme = <T,>(Child: FC<T>) => {
  const WithTheme = (props: T) => (
    <AppThemeProvider>
      <Child {...props} />
    </AppThemeProvider>
  );

  WithTheme.displayName = `WithTheme(${getDisplayName(Child)})`;

  return WithTheme;
};
