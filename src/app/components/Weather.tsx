import React from "react";

type WeatherProps = {
  weatherData: {
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
};

const Weather: React.FC<WeatherProps> = ({ weatherData }) => {
  if (!weatherData || !weatherData.weather || !weatherData.weather[0]) {
    return (
      <div className="p-4 bg-blue-500 text-white rounded-lg mt-4">
        Weather data is not available
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-4 bg-blue-400 w-full text-white rounded-lg mt-4 text-center">
      <h1 className="text-3xl">{weatherData.name}, {weatherData.sys.country}</h1>
      <p>{weatherData.weather[0].description}</p>
      <p className="text-3xl md:text-4xl font-bold">
        {weatherData.main.temp}°C
      </p>
      <div className="flex items-center justify-between border-b border-gray-100 pb-1">
        <span>Min: </span>
        <span>{weatherData.main.temp_min ? `${weatherData.main.temp_min}°C` : 'N/A'}</span>
      </div>
      <div className="flex items-center justify-between border-b border-gray-100 pb-1">
        <span>Max: </span>
        <span>{weatherData.main.temp_max ? `${weatherData.main.temp_max}°C` : 'N/A'}</span>
      </div>
      <div className="flex items-center justify-between">
        <span>Feels like: </span>
        <span>{weatherData.main.feels_like ? `${weatherData.main.feels_like}°C` : 'N/A'}</span>
      </div>
    </div>
  );
};

export default Weather;

