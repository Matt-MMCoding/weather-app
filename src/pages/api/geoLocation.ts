import { NextApiRequest, NextApiResponse } from 'next';

const API_URL = process.env.GEO_DB_BASE_URL;
const API_KEY = process.env.GEO_DB_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${API_KEY}`,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  };

  try {
    const { search } = req.query;

    const response = await fetch(`${API_URL}namePrefix=${search}`, options);

    const data = await response.json();

    const filteredData = {
      lat: data.data[0].latitude,
      lon: data.data[0].longitude,
    };

    res.status(200).json(filteredData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
