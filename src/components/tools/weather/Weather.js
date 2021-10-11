import React from 'react';

const Weather = ({ weatherData }) => {
	return (
		<div className='weather-tool'>
			<div className='header'>{weatherData.name}</div>
			<p>Temprature: {weatherData.main.temp} &deg;C</p>
			<p>
				Sunrise:{' '}
				{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
					'en-IN'
				)}
			</p>
			<p>
				Sunset:{' '}
				{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
					'en-IN'
				)}
			</p>
			<p>Description: {weatherData.weather[0].main}</p>
			<p>Humidity: {weatherData.main.humidity} %</p>
		</div>
	);
};

export default Weather;
