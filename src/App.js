import './App.scss';
import Header from './components/Header';
import TaskManager from './components/TaskManager';
import ExpenseTracker from './components/expense/ExpenseTracker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='wrapper'>
				<Header />
				<div className='content'>
					<Switch>
						<Route path='/'></Route>
						<Route path='/todolist'>
							<TaskManager />
						</Route>
					</Switch>
				</div>
				<ExpenseTracker />
			</div>
		</Router>
	);
}

export default App;
