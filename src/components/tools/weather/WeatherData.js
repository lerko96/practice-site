import React from 'react';

const Weather = ({ weatherData }) => {
	return (
		<div className='weather-comp'>
			<div className='header'>{weatherData.name}</div>
			<p>
				Temprature: {(weatherData.main.temp * 1.8 + 32).toFixed(1)}{' '}
				&deg;F
			</p>
			<p>
				High: {(weatherData.main.temp_max * 1.8 + 32).toFixed(1)} &deg;F
			</p>
			<p>
				Low: {(weatherData.main.temp_min * 1.8 + 32).toFixed(1)} &deg;F
			</p>
			<p>Description: {weatherData.weather[0].main}</p>
			<p>Humidity: {weatherData.main.humidity} %</p>
		</div>
	);
};

export default Weather;
