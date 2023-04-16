import { ThemeProviderProps } from 'styled-components';
import { Palette } from './palette';
import { Typography } from './typography';

export interface Theme {
  palette: Palette;
  typography: Typography;
}

export interface IThemeProviderProps extends ThemeProviderProps<Theme> {}
