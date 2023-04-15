import { StyledTransientProps } from '@/types/types';
import { ElementType, PropsWithChildren } from 'react';
import { CSSProperties } from 'styled-components';

type TypographyCssProps = Pick<CSSProperties, 'color'>;

type TypographyAlignProps = 'left' | 'right' | 'center';

interface IBaseTypographyProps extends TypographyCssProps {
  align?: TypographyAlignProps;
}

export interface ITypographyProps
  extends PropsWithChildren<IBaseTypographyProps> {
  as?: ElementType;
}

export interface IStyledTypographyProps
  extends StyledTransientProps<IBaseTypographyProps> {
  $align: TypographyAlignProps;
}
