import { forwardRef } from 'react';
import { IContainerProps } from './types';
import { StyledContainer } from './styles';

const Container = forwardRef<HTMLDivElement, IContainerProps>(
  (
    {
      width,
      display = 'flex',
      flexDirection = 'row',
      alignItems,
      justifyContent,
      margin,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      as,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledContainer
        $width={width}
        $display={display}
        $flexDirection={flexDirection}
        $alignItems={alignItems}
        $justifyContent={justifyContent}
        $margin={margin}
        $marginTop={marginTop}
        $marginRight={marginRight}
        $marginBottom={marginBottom}
        $marginLeft={marginLeft}
        $padding={padding}
        $paddingTop={paddingTop}
        $paddingRight={paddingRight}
        $paddingBottom={paddingBottom}
        $paddingLeft={paddingLeft}
        as={as}
        ref={ref}
        {...rest}
      >
        {children}
      </StyledContainer>
    );
  }
);

export default Container;
Container.displayName = 'Container';