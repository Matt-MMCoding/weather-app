import { Theme } from '@/theme';
import { IStyledTypographyProps } from './types';
import { FlattenSimpleInterpolation, css } from 'styled-components';

// TODO - Create px to rem conversion
// TODO - Create fontColor variants func

export const getFontSize = (
  { typography: { fontSizes } }: Theme,
  { $variant }: IStyledTypographyProps
): FlattenSimpleInterpolation => {
  const fontSize = fontSizes[$variant];

  return css`
    font-size: ${fontSize}rem;
  `;
};
