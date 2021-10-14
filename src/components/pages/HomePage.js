import React, { useState, useEffect } from 'react';
import WeatherData from '../tools/weather/WeatherData.js';
import ProjectList from '../ProjectList';
import ToolsList from './ToolPage';
import Search from '../Search.js';
import Clock from '../tools/Clock.js';

const HomePage = () => {
	const [name, setName] = useState('lerko');

	const handleClick = () => {
		setName('luigi');
	};

	const [lat, setLat] = useState([]);
	const [long, setLong] = useState([]);
	const [data, setData] = useState([]);
	
	

	useEffect(() => {
		const fetchData = async () => {
			navigator.geolocation.getCurrentPosition(function (position) {
				setLat(position.coords.latitude);
				setLong(position.coords.longitude);
			});

			await fetch(
				`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
			)
				.then((res) => res.json())

				.then((result) => {
					setData(result);
					console.log(result);
				});
		};
		fetchData().catch(console.error);
	}, [lat, long]);

	return (
		<div className='home'>
			<h1>welcome to the internet {name}</h1>
			{/* <button onClick={handleClick}>Click me</button> */}
			<div className='header'>
				<div className='weather-container'>
					{data.main && <WeatherData weatherData={data} />}
					<p>72</p>
					<p>high</p>
					<p>low</p>
					<p>desc</p>
					<p>humidity</p>
				</div>
				<Clock />
			</div>
			<Search />
		</div>
	);
};

export default HomePage;
