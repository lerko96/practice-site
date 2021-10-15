import React from 'react';

const Weather = ({ weatherData }) => {
	// var iconCode = weatherData.weather[0].icon;
	// var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

	return (
		<div className='weather-wrapper'>
			<p>{(weatherData.main.temp * 1.8 + 32).toFixed(1)} &deg;F</p>
			<img
				src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
				alt={weatherData.weather[0].description}
			/>
		</div>
	);
};

export default Weather;
