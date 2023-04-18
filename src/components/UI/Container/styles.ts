import styled, { css } from 'styled-components';
import { IStyledContainerProps } from './types';

export const StyledContainer = styled.div<IStyledContainerProps>`
  ${({
    $width,
    $display,
    $flexDirection,
    $alignItems,
    $alignSelf,
    $justifyContent,
    $justifySelf,
    $gap,
    $margin,
    $marginTop,
    $marginRight,
    $marginBottom,
    $marginLeft,
    $padding,
    $paddingTop,
    $paddingRight,
    $paddingBottom,
    $paddingLeft,
    $backgroundColor,
    $color,
  }) => css`
    width: ${$width};
    display: ${$display};
    flex-direction: ${$flexDirection};
    align-items: ${$alignItems};
    align-self: ${$alignSelf};
    justify-content: ${$justifyContent};
    justify-self: ${$justifySelf};
    gap: ${$gap};
    margin: ${$margin};
    margin-top: ${$marginTop};
    margin-right: ${$marginRight};
    margin-bottom: ${$marginBottom};
    margin-left: ${$marginLeft};
    padding: ${$padding};
    padding-top: ${$paddingTop};
    padding-right: ${$paddingRight};
    padding-bottom: ${$paddingBottom};
    padding-left: ${$paddingLeft};
    background-color: ${$backgroundColor};
    color: ${$color};
    box-sizing: border-box;
  `}
`;
