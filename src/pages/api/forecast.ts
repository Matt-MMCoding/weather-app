import { NextApiRequest, NextApiResponse } from 'next';

const API_URL = process.env.FORECAST_BASE_URL;
const API_KEY = process.env.WEATHER_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + process.env.API_KEY,
      'Content-Type': 'application/json',
    },
  };

  try {
    const { lat, lon } = req.query;

    const response = await fetch(
      `${API_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
      options
    );

    if (!response.ok) {
      throw new Error(
        `API returned a non-successful status code: ${response.status}`
      );
    }

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
