import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import GamePage from './components/pages/GamePage';
import ToolPage from './components/pages/ToolPage';
import ContactPage from './components/pages/ContactPage';
import { ErrorPage } from './components/pages/ErrorPage';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from 'react-router-dom';

export default function App() {
	return (
		<Router>
			<div className='wrapper'>
				<Navbar />
				<div className='content'>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route path='/tools' component={ToolPage} />
						<Route path='/games' component={GamePage} />
						<Route path='/contact' component={ContactPage} />
						<Route component={ErrorPage} />
					</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	);
}
