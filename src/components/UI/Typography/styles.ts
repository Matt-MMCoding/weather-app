import styled, { css } from 'styled-components';
import { IStyledTypographyProps } from './types';
import { getFontSize } from './utils';

export const StyledContainer = styled.p<IStyledTypographyProps>`
  ${({ $color, $align, $textTransform }) => css`
    color: ${$color};
    text-align: ${$align};
    text-transform: ${$textTransform};
  `}
  ${({ theme, ...props }) => getFontSize(theme, props)}
`;
