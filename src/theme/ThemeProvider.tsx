import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { IThemeProviderProps } from './types';

export const ThemeProvider = ({ theme, children }: IThemeProviderProps) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
