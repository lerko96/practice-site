import React, { useState, useEffect } from 'react';
import WeatherData from '../tools/weather/WeatherData.js';
import ProjectList from '../ProjectList';
import ToolsList from './ToolPage';
import Search from '../Search.js';
import Clock from '../tools/Clock.js';
import Weather from '../tools/weather/Weather.js';

const HomePage = () => {
	const [name, setName] = useState('lerko');

	const handleClick = () => {
		setName('luigi');
	};

	const [isShown, setIsShown] = useState(false);

	return (
		<div
			className='home'
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}
		>
			<h1>welcome to the internet {name}</h1>
			{/* <button onClick={handleClick}>Click me</button> */}

			{isShown && (
				<div className='header'>
					<Weather />
					<Clock />
				</div>
			)}
			<Search />
		</div>
	);
};

export default HomePage;
