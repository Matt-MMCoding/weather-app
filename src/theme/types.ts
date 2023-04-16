import { ThemeProviderProps } from 'styled-components';
import { Palette } from './palette/types';

export interface Theme {
  palette: Palette;
}

export interface IThemeProviderProps extends ThemeProviderProps<Theme> {}
