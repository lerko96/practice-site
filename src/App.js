import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import ContactPage from './components/pages/ContactPage';
import { ErrorPage } from './components/pages/ErrorPage';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

export default function App() {
	return (
		<Router>
			<div className='wrapper'>
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
