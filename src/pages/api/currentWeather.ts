import { NextApiRequest, NextApiResponse } from 'next';
import { WeatherProps } from '@/types/weather.types';

const API_URL = process.env.WEATHER_BASE_URL;
const API_KEY = process.env.WEATHER_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherProps | { error: string }>
) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  try {
    const { lat, lon } = req.query;

    const response = await fetch(
      `${API_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + process.env.API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `API returned a non-successful status code: ${response.status}`
      );
    }

    const data = await response.json();

    const filteredData = {
      location: data.name,
      weatherType: data.weather[0].main,
      windSpeed: data.wind.speed,
      humidity: data.main.humidity,
      clouds: data.clouds.all,
      currentTemp: data.main.temp,
    };

    res.status(200).json(filteredData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
