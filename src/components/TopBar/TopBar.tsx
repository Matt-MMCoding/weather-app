import { Container } from '@/components/UI/Container';
import { Typography } from '@/components/UI/Typography';
import {
  StyledForm,
  StyledInput,
  StyledLocationContainer,
  StyledSearchContainer,
} from './styles';

// Icons
import { GoLocation } from 'react-icons/go';
import { BiSearch } from 'react-icons/bi';
import { useWeatherContext } from '@/context/WeatherContext';
import { BaseSyntheticEvent, useRef, useState } from 'react';
import { useUpdateEffect } from 'usehooks-ts';

const TopBar = () => {
  const { currentWeather, updateCurrentWeather } = useWeatherContext();
  const [searchLoc, setSearchLoc] = useState<string>('');
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    if (!inputRef?.current?.value) {
      // TODO handle error state
      console.error('Search input is not ready. Please contact site admin.');
      return;
    }

    setSearchLoc(inputRef.current.value);
  };

  useUpdateEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`./api/geoLocation?search=${searchLoc}`);
      const data = await response.json();

      if (data) {
        setCoords({ lat: data[0].latitude, lon: data[0].longitude });
      }
    };

    fetchData();
  }, [searchLoc]);

  useUpdateEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `./api/currentWeather?lat=${coords.lat}&lon=${coords.lon}`
      );
      const data = await response.json();

      if (data) {
        updateCurrentWeather(data);
      }
    };

    fetchData();
  }, [coords]);

  return (
    <Container
      width="60vw"
      alignItems="center"
      margin="0 auto"
    >
      <StyledLocationContainer>
        <GoLocation />
        <Typography>{currentWeather.location}</Typography>
      </StyledLocationContainer>
      <StyledSearchContainer>
        <StyledForm onSubmit={(e) => handleSubmit(e)}>
          <BiSearch />
          <StyledInput
            type="text"
            placeholder="search"
            ref={inputRef}
          />
        </StyledForm>
      </StyledSearchContainer>
    </Container>
  );
};

export default TopBar;
