import React from 'react';
import WeatherSearch from "./components/WeatherSearch";
import { fetchWeather } from "./lib/weather";


type WeatherData = {
  name: string;
  weather: [{ description: string }];
  main: { temp: number; temp_min?: number; temp_max?: number, feels_like?: number };
  sys: { country: string };
};

const Home = async () => {
  const initialCity = 'Mumbai';
  
  try {
    const initialWeather: WeatherData = await fetchWeather(initialCity);

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl mb-4">Weather App</h1>
        <WeatherSearch initialCity={initialCity} initialWeather={initialWeather} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching initial weather data:', error);
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl mb-4 font-medium">Weather App</h1>
        <p>Error fetching initial weather data. Please try again later.</p>
      </div>
    );
  }
};

export default Home;

