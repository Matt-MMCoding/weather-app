import { TypographyVariant } from '@/theme';
import { StyledTransientProps } from '@/types/types';
import { ElementType, PropsWithChildren } from 'react';
import { CSSProperties } from 'styled-components';

type TypographyCssProps = Pick<CSSProperties, 'color'>;

type TypographyAlignProps = 'left' | 'right' | 'center';

type TypographyTransormProps = 'none' | 'capitalize' | 'uppercase' | 'lowecase';

interface IBaseTypographyProps extends TypographyCssProps {
  align?: TypographyAlignProps;
  textTransform?: TypographyTransormProps;
  variant?: TypographyVariant;
}

export interface ITypographyProps
  extends PropsWithChildren<IBaseTypographyProps> {
  as?: ElementType;
}

export interface IStyledTypographyProps
  extends StyledTransientProps<IBaseTypographyProps> {
  $variant: TypographyVariant;
  $align: TypographyAlignProps;
  $textTransform: TypographyTransormProps;
}
