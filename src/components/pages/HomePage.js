import React, { useState, useEffect } from 'react';

import WeatherData from '../tools/weather/WeatherData.js';
import ProjectList from '../ProjectList';
import ToolsList from './ToolPage';
import Search from '../Search.js';
import Clock from '../tools/Clock.js';
import Weather from '../tools/weather/Weather.js';
import TaskManager from '../tools/toDoList/TaskManager.js';
import Toolbar from '../Toolbar.js';
// import Toolbar from '../Toolbar.js';

const HomePage = () => {
	const [name, setName] = useState('lerko');
	const [tool, setTool] = useState('');
	// const [tool2, setTool2] = useState()

	const handleClick = () => {
		setName('luigi');
	};

	// function Toolbar(props) {
	// 	return <button>{props.name}</button>;
	// }

	//handle hover effect
	// const [isShown, setIsShown] = useState(false);

	return (
		<div
			className='home-container'
			//h handle hover
			// onMouseEnter={() => setIsShown(true)}
			// onMouseLeave={() => setIsShown(false)}
		>
			<div className='home-wrapper'>
				<header>
					<h1>welcome to the internet {name}</h1>
				</header>
				{/* handle name change */}
				{/* <button onClick={handleClick}>Click me</button> */}

				{/* hover effect */}
				{/* {isShown && ( */}
				<div className='top-container'>
					{/* <Weather /> */}
					<Clock />
				</div>
				<div className='search-container'>
					<Search />
				</div>
			</div>
			{/* )} */}

			<Toolbar />
			{/* <div className='toolbar'>
				<button onClick={() => setTool(<TaskManager />)}>notes</button>
				<button onClick={() => setTool(<Search />)}>search app</button>
			</div>
			<div className='tool-comp'>{tool}</div> */}
			
		</div>
	);
};

export default HomePage;
