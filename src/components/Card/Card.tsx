import { Container } from '@/components/UI/Container';
import { FC } from 'react';
import { ICardProps } from './types';
import {
  StyledCardContainer,
  StyledInfoContainer,
  StyledLabelContainer,
} from './styles';
import { Typography } from '../UI/Typography';

const Card: FC<ICardProps> = () => {
  return (
    <StyledCardContainer>
      <StyledLabelContainer>
        <Typography variant="h1">Monday</Typography>
        <Typography
          as="span"
          textTransform="uppercase"
        >
          11:42 pm
        </Typography>
      </StyledLabelContainer>
      <StyledInfoContainer>
        <Typography>16 °C</Typography>
        <Typography>
          Feels like: <Typography as="span">16 °C</Typography>
        </Typography>
        <Typography>
          Wind speed: <Typography as="span">10 m/s</Typography>
        </Typography>
        <Typography>
          Humidity: <Typography as="span">76%</Typography>
        </Typography>
        <Typography>
          Clouds: <Typography as="span">76%</Typography>
        </Typography>
      </StyledInfoContainer>
    </StyledCardContainer>
  );
};

export default Card;
