import { StyledTransientProps } from '@/types/types';
import { ElementType, PropsWithChildren } from 'react';
import { CSSProperties } from 'styled-components';

type ContainerCssProps = Pick<
  CSSProperties,
  | 'width'
  | 'display'
  | 'flexDirection'
  | 'alignItems'
  | 'justifyContent'
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
}

export interface IStyledContainerProps
  extends StyledTransientProps<ContainerCssProps> {}
