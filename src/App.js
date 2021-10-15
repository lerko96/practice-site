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
	Route,
	Switch,
	Link,
	useParams,
	useRouteMatch,
	Redirect,
} from 'react-router-dom';
import BlogPage from './components/pages/BlogPage';
import BlogDetails from './components/blogs/BlogDetails';
import CreateBlog from './components/blogs/CreateBlog';
import TaskManager from './components/tools/toDoList/TaskManager';

export default function App() {
	return (
		<Router>
			<div className='wrapper'>
				<Navbar />
				<div className='content'>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route path='/notes' component={TaskManager} />
						<Route exact path='/blogs' component={BlogPage} />
						<Route
							exact
							path='/blogs/create'
							component={CreateBlog}
							title='create a blog'
						/>
						<Route path='/blogs/:id'>
							<BlogDetails />
						</Route>
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
