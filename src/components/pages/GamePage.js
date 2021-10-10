import React from 'react';
import { useRouteMatch } from 'react-router';
import { Switch, Route, Link } from 'react-router-dom';
import TaskManager from '../tools/toDoList/TaskManager';

const Game = ({ match }) => <p>{match.params.id}</p>;

class GamePage extends React.Component {
	render() {
		const { url } = this.props.match;
		return (
			<div className='game-page'>
				<h1>Games</h1>
				<div>
					<Link to='/games/donut-clicker'>Game 1</Link>

					<Link to='#'>Fake Game 2</Link>
				</div>

				<Route path='/games/:id' component={TaskManager} />
			</div>
		);
	}
}

export default GamePage;
