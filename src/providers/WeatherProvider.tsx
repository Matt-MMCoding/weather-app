import { WeatherContext, useWeatherContext } from '@/context/WeatherContext';
import { WeatherProps } from '@/types/weather.types';
import { FC, PropsWithChildren, useState } from 'react';

const WeatherProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState<WeatherProps>({
    location: '',
    weatherType: '',
    weatherId: 0,
    windSpeed: 0,
    humidity: 0,
    clouds: 0,
    currentTemp: 0,
  });

  //   const {
  // location,
  // weatherType,
  // weatherId,
  // windSpeed,
  // humidity,
  // clouds,
  // currentTemp,
  //     setCurrentWeather,
  //   } = useWeatherContext();

  const updateCurrentWeather = (data: WeatherProps) => {
    setCurrentWeather(data);
  };

  return (
    <WeatherContext.Provider value={{ currentWeather, updateCurrentWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
