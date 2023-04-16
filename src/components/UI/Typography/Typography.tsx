import { forwardRef } from 'react';
import { ITypographyProps } from './types';
import { StyledContainer } from './styles';

const Typography = forwardRef<HTMLElement, ITypographyProps>(
  (
    {
      color = 'inherit',
      align = 'left',
      textTransform = 'none',
      variant = 'body',
      as,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledContainer
        $color={color}
        $align={align}
        $textTransform={textTransform}
        $variant={variant}
        as={as}
        ref={ref}
        {...rest}
      >
        {children}
      </StyledContainer>
    );
  }
);

export default Typography;
Typography.displayName = 'Typography';
