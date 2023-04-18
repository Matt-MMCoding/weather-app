import { FC, useState } from 'react';
import { theme } from '@/theme';
import { Container } from '@/components/UI/Container';
import { Typography } from '@/components/UI/Typography';
import Card from '@/components/Card/Card';
import { IForecastProps } from './types';
import { StyledTabSelection } from './styles';

export const Forecast: FC<IForecastProps> = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Container
      flexDirection="column"
      gap="2rem"
    >
      <StyledTabSelection gap="2rem">
        <Typography>Forecast</Typography>
      </StyledTabSelection>
      <Container gap="1.5rem">
        <Card active={!isActive} />
      </Container>
    </Container>
  );
};

export default Forecast;
