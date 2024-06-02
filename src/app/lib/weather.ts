export const fetchWeather = async (city: string) => {
 

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a42b484dc5bc7ffd982c90027f092710&units=metric`);
    
    if (!res.ok) {
      throw new Error(`Error fetching weather data: ${res.statusText}`);
    }

    const data = await res.json();
    
    if (!data.name || !data.weather || !data.main || !data.sys) {
      throw new Error('Incomplete weather data received');
    }

    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return {
      name: 'Unknown',
      weather: [{ description: 'N/A' }],
      main: { temp: 0 },
      sys: { country: 'N/A' }
    };
  }
};


