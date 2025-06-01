import axios from 'axios';

const API_KEY = 'f2a7fe3e7db644868ed130200250106';
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

export const getWeather = async (city) => {
  const res = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${city}&lang=uk`);
  return res.data;
};
