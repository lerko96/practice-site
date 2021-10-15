import React, { useState, useEffect } from 'react';

import Weather from '../tools/weather/Weather.js';
import Search from '../Search.js';
import Clock from '../tools/Clock.js';
import Toolbar from '../Toolbar.js';
// import Toolbar from '../Toolbar.js';

const HomePage = () => {

	return (
		<div className='home-wrapper'>
			<div className='top-container'>
				{/* <Weather /> */}
				<Search />
				<Clock />
			</div>
			<Toolbar />
		</div>
	);
};

export default HomePage;
