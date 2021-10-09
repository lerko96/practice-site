import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Tools from './components/tools/Tools';
import TaskManager from './components/tools/toDoList/TaskManager';
import ExpenseTracker from './components/tools/expense/ExpenseTracker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='wrapper'>
				<Navbar />
				<div className='content'>
					<Switch>
						<Route path='/'>
							<Home />
							<Tools />
						</Route>
						<Route path='/tools'>
							<Tools />
						</Route>
					</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
