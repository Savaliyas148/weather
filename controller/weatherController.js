const axios = require('axios');

const weather = require("../models/weather")


exports.getWeather = async(req, res) => {
    try {
        const {city} = req.query
        if(!city) {
            return res.status(400).json({error: "City is require"})
        }

    // Make an Axios GET request to the OpenWeatherMap API
    const API_KEY = process.env.API_KEY
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );

      // Check the status code of the response
      if (response.status !== 200) {
        return res.status(response.status).json({ error: 'Failed to fetch weather data' });
      }

          // Extract the weather data from the response
    const weatherData = response.data;


     // Save weather data to the database
     const savedWeather = new weather({
      city: weatherData.name,
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
    });

    await savedWeather.save();
    
    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

