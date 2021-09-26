import './App.scss';
import Header from './components/Header';
import TaskManager from './components/TaskManager';
import ExpenseTracker from './components/expense/ExpenseTracker';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<TaskManager />
			<ExpenseTracker />
		</div>
	);
}

export default App;
