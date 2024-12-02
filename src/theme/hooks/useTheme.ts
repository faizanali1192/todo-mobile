import {ThemeContext as themeContext} from '../ThemeContext';
import {useContext} from 'react';

export const useTheme = () => {
  if (!themeContext) {
    throw "Theme Context doesn't exist. Please call createTheme first.";
  }
  return useContext(themeContext);
};
