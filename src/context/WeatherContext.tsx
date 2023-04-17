import { WeatherProps } from '@/types/weather.types';
import { PropsWithChildren, createContext, useContext } from 'react';

export type WeatherContextProps = {
  currentWeather: WeatherProps;
  updateCurrentWeather: (data: WeatherProps) => void;
};

const weatherContextValues: WeatherContextProps = {
  currentWeather: {
    location: '',
    weatherType: '',
    weatherId: 0,
    windSpeed: 0,
    humidity: 0,
    clouds: 0,
    currentTemp: 0,
  },
  updateCurrentWeather: () => {},
};

export const WeatherContext =
  createContext<WeatherContextProps>(weatherContextValues);

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};
