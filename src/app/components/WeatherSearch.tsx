"use client"; 

import React, { useState } from "react";
import Weather from "./Weather";
import { fetchWeather } from "../lib/weather";

type WeatherData = {
  name: string;
  weather: [{ description: string }];
  main: {
    temp: number;
    temp_min?: number;
    temp_max?: number;
    feels_like?: number;
  };
  sys: {
    country: string;
  };
};

const WeatherSearch: React.FC<{
  initialCity: string;
  initialWeather: WeatherData;
}> = ({ initialCity, initialWeather }) => {
  const [city, setCity] = useState<string>(initialCity);
  const [weatherData, setWeatherData] = useState<WeatherData>(initialWeather);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Fetching weather data for city:", city);
      const data = await fetchWeather(city);
      console.log("Weather data fetched:", data);
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError("Failed to fetch weather data. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center max-w-[450px] mx-auto w-[90%]">
      <form onSubmit={handleSearch} className="w-full flex h-[50px] mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border  border-gray-300 rounded mb-4 w-full h-full ouline-none"
          placeholder="Enter city name"
        />
        <button
          type="submit"
          className="p-2 bg-blue-400 text-white rounded hover:bg-blue-500 cursor-pointer"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}
      <Weather weatherData={weatherData} />
    </div>
  );
};

export default WeatherSearch;

