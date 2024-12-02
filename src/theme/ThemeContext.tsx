import React, {PropsWithChildren, createContext} from 'react';
import {Theme, extendedTheme} from './theme';

export interface ThemeContextType {
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: extendedTheme.light,
});

export const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
  const theme = extendedTheme.light;

  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  );
};
