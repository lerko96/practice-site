import React, { useState, useEffect } from 'react';
import './App.scss';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import ContactPage from './components/pages/ContactPage';
import { ErrorPage } from './components/pages/ErrorPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import car from './images/bg.jpg';

export default function App() {
	const [bgImg, setBgImg] = useState(`${car}`);



	const pageAccessedByReload =
		(window.performance && window.performance.type === 1) ||
		window.performance
			.getEntriesByType('navigation')
			.map((nav) => nav.type)
			.includes('reload');

	useEffect(() => {
		alert(pageAccessedByReload);
		// setBgImg()
	}, [pageAccessedByReload]);

	return (
		<Router>
			<div
				className='wrapper'
				style={{ backgroundImage: `url(${bgImg})` }}
			>
				<div className='content'>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route path='/contact' component={ContactPage} />
						<Route component={ErrorPage} />
					</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	);
}
