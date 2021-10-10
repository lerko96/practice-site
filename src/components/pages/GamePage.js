import React from 'react';
import { useRouteMatch, useParams } from 'react-router';
import { Switch, Route, Link } from 'react-router-dom';
import TaskManager from '../tools/toDoList/TaskManager';

export default function GamePage() {
	let { path, url } = useRouteMatch();

	return (
		<div className='game-page'>
			<h1>Games</h1>
			<div className='game-list'>
				<Link to={`${url}/donut-clicker`}>Donut Clicker</Link>
				<Link to={`${url}/virtual-pet`}>Virtual Pet</Link>
			</div>
			<Switch>
				<Route exact path={path}>
					<h2>Select a Game.</h2>
				</Route>
				<Route path={`${path}/donut-clicker`}>
					<h2>Doooonut clicker</h2>
					<TaskManager />
				</Route>
				<Route path={`${path}/virtual-pet`}>
					<h2>Virtual Pet</h2>
				</Route>
			</Switch>
		</div>
	);
}

// const Game = () => {
// 	let { id } = useParams();

// 	return (
// 		<div>
// 			<h3>{id}</h3>
// 			{/* <TaskManager /> */}
// 		</div>
// 	);
// };
