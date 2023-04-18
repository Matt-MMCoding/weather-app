import { StyledTransientProps } from '@/types/types';
import { ElementType, MouseEventHandler, PropsWithChildren } from 'react';
import { CSSProperties } from 'styled-components';

type ContainerCssProps = Pick<
  CSSProperties,
  | 'width'
  | 'display'
  | 'flexDirection'
  | 'alignItems'
  | 'alignSelf'
  | 'justifyContent'
  | 'justifySelf'
  | 'gap'
  | 'margin'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
  | 'padding'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'backgroundColor'
  | 'color'
>;

export interface IContainerProps extends PropsWithChildren<ContainerCssProps> {
  as?: ElementType;
  onClick?: MouseEventHandler;
}

export interface IStyledContainerProps
  extends StyledTransientProps<ContainerCssProps> {}
