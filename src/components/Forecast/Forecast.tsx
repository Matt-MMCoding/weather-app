import { FC } from 'react';
import { theme } from '@/theme';
import { Container } from '@/components/UI/Container';
import { Typography } from '@/components/UI/Typography';
import Card from '@/components/Card/Card';
import { IForecastProps } from './types';
import { StyledTabSelection } from './styles';

export const Forecast: FC<IForecastProps> = () => {
  return (
    <Container
      flexDirection="column"
      gap="2rem"
    >
      <StyledTabSelection gap="2rem">
        <Typography>Today</Typography>
        <Typography color={theme.palette.grey[0]}>Tomorrow</Typography>
        <Typography color={theme.palette.grey[0]}>Next 7 days</Typography>
      </StyledTabSelection>
      <Container>
        <Card />
      </Container>
    </Container>
  );
};

export default Forecast;
