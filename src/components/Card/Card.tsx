import { Container } from '@/components/UI/Container';
import { FC } from 'react';
import { ICardProps } from './types';
import {
  StyledCardContainer,
  StyledDivider,
  StyledInfoContainer,
  StyledLabelContainer,
} from './styles';
import { Typography } from '@/components/UI/Typography';
import { useWeatherContext } from '@/context/WeatherContext';
import { WeatherIcon } from '@/components/WeatherIcon';
import { motion } from 'framer-motion';
import { theme } from '@/theme';

const Card: FC<ICardProps> = ({ active, onClick }) => {
  const { currentWeather } = useWeatherContext();

  const motionTransition = {
    type: 'spring',
    stiffness: 700,
    damping: 50,
  };

  return (
    <motion.div
      layout
      transition={motionTransition}
    >
      <StyledCardContainer
        onClick={onClick}
        backgroundColor={
          active ? theme.palette.blue[0] : theme.palette.grey[200]
        }
        color={active ? theme.palette.darkText[0] : theme.palette.lightText[0]}
      >
        <StyledLabelContainer
          gap={active ? '3rem' : '0'}
          justifyContent="center"
          backgroundColor={
            active ? theme.palette.blue[100] : theme.palette.grey[200]
          }
        >
          <Typography>{active ? 'Monday' : 'Mon'}</Typography>
          {active && (
            <Typography
              as="span"
              textTransform="uppercase"
            >
              11:42 pm
            </Typography>
          )}
        </StyledLabelContainer>
        {!active && <StyledDivider />}
        <StyledInfoContainer>
          <Container
            flexDirection={active ? 'row' : 'column-reverse'}
            gap={active ? '0' : '2rem'}
            alignItems="center"
            alignSelf="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography variant="h1">
              {Math.floor(Math.round(currentWeather.currentTemp))}°C
            </Typography>
            <WeatherIcon
              id={currentWeather.weatherId}
              size={28}
            />
          </Container>
          {active && (
            <Container
              flexDirection="column"
              gap="4px"
            >
              <Typography variant="bodySmall">
                Wind speed:&nbsp;
                <Typography
                  as="span"
                  variant="bodySmall"
                >
                  {currentWeather.windSpeed}: m/s
                </Typography>
              </Typography>
              <Typography variant="bodySmall">
                Humidity:&nbsp;
                <Typography
                  as="span"
                  variant="bodySmall"
                >
                  {currentWeather.humidity}%
                </Typography>
              </Typography>
              <Typography variant="bodySmall">
                Clouds:&nbsp;
                <Typography
                  as="span"
                  variant="bodySmall"
                >
                  {currentWeather.clouds}%
                </Typography>
              </Typography>
            </Container>
          )}
        </StyledInfoContainer>
      </StyledCardContainer>
    </motion.div>
  );
};

export default Card;
