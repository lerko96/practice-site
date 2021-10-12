import React, { useState, useEffect } from 'react';
import Weather from '../tools/weather/Weather.js';
import ProjectList from '../ProjectList';
import ToolsList from './ToolPage';
import Search from '../Search.js';

const HomePage = () => {
	const [name, setName] = useState('lerko');

	const handleClick = () => {
		setName('luigi');
	};



	// const [lat, setLat] = useState([]);
	// const [long, setLong] = useState([]);
	// const [quote, setQuote] = useState([]);
	// const [data, setData] = useState([]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		navigator.geolocation.getCurrentPosition(function (position) {
	// 			setLat(position.coords.latitude);
	// 			setLong(position.coords.longitude);
	// 		});

	// 		// await fetch('https://quotes.rest/qod')
	// 		// 	.then((res) => res.json())
	// 		// 	.then((resultQuote) => {
	// 		// 		setData(resultQuote);
	// 		// 		console.log(resultQuote);
	// 		// 	});

	// 		await fetch(
	// 			`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
	// 		)
	// 			.then((res) => res.json())
	// 			.then((result) => {
	// 				setData(result);
	// 				console.log(result);
	// 			});
	// 	};
	// 	fetchData();
	// }, [lat, long]);

	return (
		<div className='home'>
			<div className='homer-header'>
				<h1>welcome to the internet {name}</h1>
				{/* <button onClick={handleClick}>Click me</button> */}
				<div className='weather-container'>
					{/* {typeof data.main != 'undefined' ? (
						<Weather weatherData={data} />
					) : (
						<div></div>
					)} */}
				</div>
			</div>

				<Search />
		</div>
	);
};

export default HomePage;
