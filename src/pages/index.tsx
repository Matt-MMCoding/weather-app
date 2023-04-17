import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';
import { WeatherProps } from '@/types/weather.types';
import { WeatherIcon } from '@/components/WeatherIcon';

// Icons
import { BsClouds, BsDropletHalf, BsWind } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { GeoLocationProps } from '@/types/geoLocation.types';
import TopBar from '@/components/TopBar/TopBar';
import { Container } from '@/components/UI/Container';
import Card from '@/components/Card/Card';
import { Forecast } from '@/components/Forecast';
import { useWeatherContext } from '@/context/WeatherContext';

export default function Home() {
  const [search, setSearch] = useState<string | undefined>('');
  const [loc, setLoc] = useState({ lat: 44.34, lon: 10.99 });
  const [searchLocations, setSearchLocations] = useState<GeoLocationProps[]>(
    []
  );
  const searchInputRef = useRef<HTMLInputElement>(null);

  const { updateCurrentWeather } = useWeatherContext();

  const handleSearchIconClick = () => {
    searchInputRef.current?.focus();
  };

  const handleSearchSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    setSearch(searchInputRef?.current?.value);
  };

  const handleLocationClick = ({ lat, lon }: { lat: number; lon: number }) => {
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }

    setSearchLocations([]);
    setLoc({ lat, lon });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLoc({ lat: position.coords.latitude, lon: position.coords.longitude });
    });
  }, []);

  useEffect(() => {
    if (!loc) {
      return;
    }
    const fetchData = async () => {
      const response = await fetch(
        `/api/currentWeather?lat=${loc.lat}&lon=${loc.lon}`
      );
      const data = await response.json();

      if (data) {
        updateCurrentWeather(data);
      }
    };

    fetchData();
  }, [loc]);

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchData = async () => {
      const response = await fetch(`/api/geoLocation?search=${search}`);
      const data = await response.json();

      if (data) {
        setSearchLocations(data);
      }
    };

    fetchData();
  }, [search]);

  return (
    <>
      <Head>
        <title>React Weather API App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Container
        flexDirection="column"
        padding="2rem"
        gap="2rem"
      >
        <TopBar />
        <Forecast />
      </Container>
    </>
  );
}
