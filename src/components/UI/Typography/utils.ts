import { Theme } from '@/theme';
import { IStyledTypographyProps } from './types';
import { FlattenSimpleInterpolation, css } from 'styled-components';

// TODO - Create pc to rem conversion

export const getFontSize = (
  { typography: { fontSizes } }: Theme,
  { $variant }: IStyledTypographyProps
): FlattenSimpleInterpolation => {
  const fontSize = fontSizes[$variant];

  return css`
    font-size: ${fontSize}px;
  `;
};
