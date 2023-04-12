import { GeoLocationProps } from '@/types/geoLocation.types';
import { NextApiRequest, NextApiResponse } from 'next';

const API_URL = process.env.GEO_DB_BASE_URL;
const API_KEY = process.env.GEO_DB_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GeoLocationProps | { error: string }>
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

    const filteredData = data.data.map((item: GeoLocationProps) => {
      return {
        name: item.name,
        countryCode: item.countryCode,
        latitude: item.latitude,
        longitude: item.longitude,
      };
    });

    res.status(200).json(filteredData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
